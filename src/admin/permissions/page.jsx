"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Key
} from "lucide-react";
import Sidebar from "../dashboard/components/Sidebar";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const MODULES = [
  { id: 'users', name: 'Users' },
  { id: 'roles', name: 'Roles' },
  { id: 'permissions', name: 'Permissions' },
  { id: 'employees', name: 'Employees' },
  { id: 'dashboard', name: 'Dashboard' },
  { id: 'reports', name: 'Reports' },
  { id: 'settings', name: 'Settings' },
  { id: 'articles', name: 'Articles' },
  { id: 'categories', name: 'Categories' },
  { id: 'services', name: 'Services' },
  { id: 'partnerships', name: 'Partnerships' },
  { id: 'leads', name: 'Leads' }
];

const CRUD_ACTIONS = ['create', 'read', 'update', 'delete'];

export default function PermissionsPage() {
  const router = useRouter();
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingPermission, setEditingPermission] = useState(null);
  
  useEffect(() => {
    // Check if user is admin, if not redirect to employee dashboard
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user?.role?.name !== 'admin') {
      router.push('/employee/dashboard');
      return;
    }
  }, [router]);
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    module: '',
    actions: []
  });

  useEffect(() => {
    fetchPermissions();
  }, []);

  const fetchPermissions = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      console.log("Fetching permissions with token:", token);
      const response = await fetch(`${API_BASE_URL}/permissions`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log("Permissions response:", data);

      if (data.success) {
        setPermissions(data.data);
      } else {
        console.error("Failed to fetch permissions:", data.message);
      }
    } catch (error) {
      console.error("Error fetching permissions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingPermission(null);
    setFormData({
      name: '',
      description: '',
      module: '',
      actions: []
    });
    setShowModal(true);
  };

  const handleEdit = (permission) => {
    setEditingPermission(permission);
    const [module, action] = permission.name.split('.');
    setFormData({
      name: permission.name,
      description: permission.description,
      module: module,
      actions: [action]
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this permission?")) return;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_BASE_URL}/permissions/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        fetchPermissions();
      }
    } catch (error) {
      console.error("Error deleting permission:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      console.log("Creating permissions with:", formData);
      
      if (editingPermission) {
        // Update single permission
        const permissionName = `${formData.module}.${formData.actions[0]}`;
        const submitData = {
          name: permissionName,
          description: formData.description,
          module: formData.module
        };

        const response = await fetch(`${API_BASE_URL}/permissions/${editingPermission.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(submitData),
        });

        const data = await response.json();
        console.log("Update response:", data);

        if (data.success) {
          setShowModal(false);
          fetchPermissions();
        }
      } else {
        // Create multiple permissions
        const promises = formData.actions.map(action => {
          const permissionName = `${formData.module}.${action}`;
          const submitData = {
            name: permissionName,
            description: formData.description,
            module: formData.module
          };

          console.log("Creating permission:", submitData);

          return fetch(`${API_BASE_URL}/permissions`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(submitData),
          });
        });

        const responses = await Promise.all(promises);
        console.log("Create responses:", responses);
        
        setShowModal(false);
        fetchPermissions();
      }
    } catch (error) {
      console.error("Error saving permission:", error);
    }
  };

  const filteredPermissions = permissions.filter(perm =>
    perm.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    perm.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    perm.module?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:ml-64">
        <main className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Permissions</h1>
              <p className="text-gray-600 mt-1">Manage system permissions with CRUD actions</p>
            </div>
            <button
              onClick={handleCreate}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-4 w-4" />
              Add Permission
            </button>
          </div>

          {/* Search */}
          <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search permissions..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Permissions Table */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {loading ? (
              <div className="p-8 text-center text-gray-500">Loading...</div>
            ) : filteredPermissions.length === 0 ? (
              <div className="p-8 text-center text-gray-500">No permissions found</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Module
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredPermissions.map((permission) => {
                      const [module, action] = permission.name.split('.');
                      return (
                        <tr key={permission.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <Key className="h-5 w-5 text-green-600" />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{permission.name}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {permission.description}
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-700 capitalize">
                              {module}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700 capitalize">
                              {action}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleEdit(permission)}
                                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                                title="Edit"
                              >
                                <Edit className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => handleDelete(permission.id)}
                                className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                                title="Delete"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
                <h2 className="text-2xl font-bold mb-6">
                  {editingPermission ? 'Edit Permission' : 'Add Permission'}
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Module
                      </label>
                      <select
                        value={formData.module}
                        onChange={(e) => setFormData({ ...formData, module: e.target.value })}
                        required
                        disabled={!!editingPermission}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                      >
                        <option value="">Select a module</option>
                        {MODULES.map(module => (
                          <option key={module.id} value={module.id}>{module.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Actions
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {CRUD_ACTIONS.map(action => (
                          <label key={action} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.actions.includes(action)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setFormData({ ...formData, actions: [...formData.actions, action] });
                                } else {
                                  setFormData({ ...formData, actions: formData.actions.filter(a => a !== action) });
                                }
                              }}
                              disabled={!!editingPermission}
                              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 disabled:bg-gray-100"
                            />
                            <span className="text-sm text-gray-700 capitalize">{action.charAt(0).toUpperCase() + action.slice(1)}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={3}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-3 mt-6">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      {editingPermission ? 'Update' : 'Create'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
