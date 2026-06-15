"use client";

import { useState, useEffect } from "react";
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Shield,
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
  { id: 'devices', name: 'Devices' },
  { id: 'partnerships', name: 'Partnerships' },
  { id: 'leads_funnel', name: 'Leads - Funnel' },
  { id: 'leads_landing_page', name: 'Leads - Landing Page' },
  { id: 'leads_contact_us', name: 'Leads - Contact Us' }
];

const CRUD_ACTIONS = ['create', 'read', 'update', 'delete'];

const ACTION_MAPPING = {
  'view': 'read',
  'edit': 'update'
};

export default function RolesListPage() {
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingRole, setEditingRole] = useState(null);
  const [rolePermissions, setRolePermissions] = useState({});
  const [userPermissions, setUserPermissions] = useState([]);
  
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  useEffect(() => {
    fetchRoles();
    fetchPermissions();
    const storedPermissions = localStorage.getItem("permissions");
    if (storedPermissions) {
      setUserPermissions(JSON.parse(storedPermissions));
    }
  }, []);

  const fetchRoles = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_BASE_URL}/roles`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (data.success) {
        setRoles(data.data);
      }
    } catch (error) {
      console.error("Error fetching roles:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPermissions = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_BASE_URL}/permissions`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (data.success) {
        setPermissions(data.data);
      }
    } catch (error) {
      console.error("Error fetching permissions:", error);
    }
  };

  const handleCreate = () => {
    if (permissions.length === 0) {
      alert('Permissions are still loading. Please wait and try again.');
      return;
    }
    setEditingRole(null);
    setFormData({
      name: '',
      description: ''
    });
    setRolePermissions({});
    setShowModal(true);
  };

  const handleEdit = (role) => {
    setEditingRole(role);
    setFormData({
      name: role.name,
      description: role.description
    });
    
    // Convert permissions to grid format
    const permGrid = {};
    if (role.permissions) {
      role.permissions.forEach(perm => {
        const parts = perm.name.split('_');
        if (parts.length >= 2) {
          const action = parts[0];
          const module = parts.slice(1).join('_');
          
          // Map action to CRUD
          const crudAction = ACTION_MAPPING[action] || action;
          
          if (!permGrid[module]) permGrid[module] = {};
          permGrid[module][crudAction] = perm.id;
        }
      });
    }
    setRolePermissions(permGrid);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this role?")) return;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_BASE_URL}/roles/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        fetchRoles();
      }
    } catch (error) {
      console.error("Error deleting role:", error);
    }
  };

  const handlePermissionToggle = (module, action) => {
    console.log('Toggling permission:', module, action);
    
    const newPerms = { ...rolePermissions };
    if (!newPerms[module]) newPerms[module] = {};
    
    const permId = newPerms[module][action];
    
    if (permId) {
      // Remove permission
      delete newPerms[module][action];
    } else {
      // Find and add permission
      const perm = permissions.find(p => {
        const parts = p.name.split('_');
        const permAction = ACTION_MAPPING[parts[0]] || parts[0];
        const permModule = parts.slice(1).join('_');
        return permModule === module && permAction === action;
      });
      if (perm) {
        newPerms[module][action] = perm.id;
      }
    }
    setRolePermissions(newPerms);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      
      // Calculate permission IDs from rolePermissions
      const permissionIds = [];
      Object.values(rolePermissions).forEach(actions => {
        Object.values(actions).forEach(permId => {
          if (permId && !permissionIds.includes(permId)) {
            permissionIds.push(permId);
          }
        });
      });
      
      const submitData = {
        ...formData,
        permissionIds
      };

      const response = editingRole
        ? await fetch(`${API_BASE_URL}/roles/${editingRole.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(submitData),
          })
        : await fetch(`${API_BASE_URL}/roles`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(submitData),
          });

      const data = await response.json();

      if (data.success) {
        setShowModal(false);
        fetchRoles();
      } else {
        alert('Error saving role: ' + data.message);
      }
    } catch (error) {
      alert('Error saving role: ' + error.message);
    }
  };

  const filteredRoles = roles.filter(role =>
    role.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:ml-64">
        <main className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Roles</h1>
              <p className="text-gray-600 mt-1">Manage roles and assign multiple permissions</p>
            </div>
            {userPermissions.includes('create_roles') && (
              <button
                onClick={handleCreate}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-4 w-4" />
                Add Role
              </button>
            )}
          </div>

          {/* Search */}
          <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search roles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Roles Table */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {loading ? (
              <div className="p-8 text-center text-gray-500">Loading...</div>
            ) : filteredRoles.length === 0 ? (
              <div className="p-8 text-center text-gray-500">No roles found</div>
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
                        Permissions
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredRoles.map((role) => (
                      <tr key={role.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                              <Shield className="h-5 w-5 text-purple-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{role.name}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {role.description}
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                            <Key className="h-3 w-3" />
                            {role.permissions?.length || 0} permissions
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {userPermissions.includes('update_roles') && (
                              <button
                                onClick={() => handleEdit(role)}
                                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                                title="Edit"
                              >
                                <Edit className="h-4 w-4" />
                              </button>
                            )}
                            {userPermissions.includes('delete_roles') && !['admin', 'employee', 'client'].includes(role.name) && (
                              <button
                                onClick={() => handleDelete(role.id)}
                                className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                                title="Delete"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-8 max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-6">
                  {editingRole ? 'Edit Role' : 'Add Role'}
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Role Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        disabled={editingRole && ['admin', 'employee', 'client'].includes(editingRole.name)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Permissions
                      </label>
                      <div className="max-h-96 overflow-y-auto border border-gray-300 rounded-lg p-4">
                        {permissions.length === 0 ? (
                          <p className="text-sm text-gray-500">No permissions available. Loading...</p>
                        ) : (
                          <div className="space-y-4">
                            {MODULES.map(module => (
                              <div key={module.id} className="border border-gray-200 rounded-lg p-4">
                                <h4 className="font-semibold text-gray-900 mb-3">{module.name}</h4>
                                <div className="grid grid-cols-4 gap-4">
                                  {CRUD_ACTIONS.map(action => (
                                    <div key={`${module.id}-${action}`} className="flex items-center gap-2">
                                      <input
                                        type="checkbox"
                                        id={`${module.id}-${action}`}
                                        checked={!!rolePermissions[module.id]?.[action]}
                                        onChange={() => handlePermissionToggle(module.id, action)}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                      />
                                      <label 
                                        htmlFor={`${module.id}-${action}`} 
                                        className="text-sm text-gray-700 capitalize cursor-pointer"
                                      >
                                        {action}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
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
                      {editingRole ? 'Update' : 'Create'}
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
