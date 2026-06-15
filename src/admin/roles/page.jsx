"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Search, 
  Edit, 
  User,
  Shield,
  Check,
  X
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

export default function RolesListPage() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const [userPermissions, setUserPermissions] = useState({});

  useEffect(() => {
    // Check if user is admin, if not redirect to employee dashboard
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user?.role?.name !== 'admin') {
      router.push('/employee/dashboard');
      return;
    }
  }, [router]);

  useEffect(() => {
    fetchUsers();
    fetchPermissions();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_BASE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (data.success) {
        setUsers(data.data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
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

  const handleOpenPermissions = (user) => {
    setSelectedUser(user);
    
    // Initialize user permissions from their role
    const userPerms = {};
    if (user.role?.permissions) {
      user.role.permissions.forEach(perm => {
        const [module, action] = perm.name.split('.');
        if (!userPerms[module]) userPerms[module] = {};
        userPerms[module][action] = true;
      });
    }
    setUserPermissions(userPerms);
    setShowPermissionModal(true);
  };

  const handlePermissionToggle = (module, action) => {
    setUserPermissions(prev => ({
      ...prev,
      [module]: {
        ...prev[module],
        [action]: !prev[module]?.[action]
      }
    }));
  };

  const handleSavePermissions = async () => {
    try {
      const token = localStorage.getItem("token");
      
      // Convert userPermissions to permission IDs
      const permissionIds = [];
      Object.entries(userPermissions).forEach(([module, actions]) => {
        Object.entries(actions).forEach(([action, enabled]) => {
          if (enabled) {
            const perm = permissions.find(p => p.name === `${module}.${action}`);
            if (perm) permissionIds.push(perm.id);
          }
        });
      });

      // Update user's role permissions
      const response = await fetch(`${API_BASE_URL}/roles/${selectedUser.roleId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ permissionIds }),
      });

      if (response.ok) {
        setShowPermissionModal(false);
        fetchUsers();
      }
    } catch (error) {
      console.error("Error saving permissions:", error);
    }
  };

  const filteredUsers = users.filter(user =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getUserPermission = (user, module, action) => {
    if (!user.role?.permissions) return false;
    return user.role.permissions.some(p => p.name === `${module}.${action}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:ml-64">
        <main className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">User Permissions</h1>
              <p className="text-gray-600 mt-1">Manage user access and module-level permissions</p>
            </div>
          </div>

          {/* Search */}
          <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search users by name or email..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {loading ? (
              <div className="p-8 text-center text-gray-500">Loading...</div>
            ) : filteredUsers.length === 0 ? (
              <div className="p-8 text-center text-gray-500">No users found</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      {MODULES.map(module => (
                        <th key={module.id} className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {module.name}
                        </th>
                      ))}
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <User className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{user.name}</p>
                              <p className="text-sm text-gray-500">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-700">
                            <Shield className="h-3 w-3" />
                            {user.role?.name || 'No Role'}
                          </span>
                        </td>
                        {MODULES.map(module => (
                          <td key={module.id} className="px-4 py-4">
                            <div className="flex justify-center gap-1">
                              {CRUD_ACTIONS.map(action => (
                                <div
                                  key={action}
                                  className={`w-6 h-6 rounded flex items-center justify-center text-xs font-medium ${
                                    getUserPermission(user, module.id, action)
                                      ? 'bg-green-100 text-green-700'
                                      : 'bg-gray-100 text-gray-400'
                                  }`}
                                  title={`${action.charAt(0).toUpperCase() + action.slice(1)}`}
                                >
                                  {getUserPermission(user, module.id, action) ? (
                                    <Check className="h-4 w-4" />
                                  ) : (
                                    <X className="h-4 w-4" />
                                  )}
                                </div>
                              ))}
                            </div>
                          </td>
                        ))}
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => handleOpenPermissions(user)}
                            className="inline-flex items-center gap-2 px-3 py-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg"
                          >
                            <Edit className="h-4 w-4" />
                            Edit Permissions
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Permission Modal */}
          {showPermissionModal && selectedUser && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">Edit Permissions</h2>
                    <p className="text-gray-600 mt-1">
                      {selectedUser.name} ({selectedUser.email}) - {selectedUser.role?.name}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowPermissionModal(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {MODULES.map(module => (
                    <div key={module.id} className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-3">{module.name}</h3>
                      <div className="grid grid-cols-4 gap-4">
                        {CRUD_ACTIONS.map(action => (
                          <label key={action} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={userPermissions[module.id]?.[action] || false}
                              onChange={() => handlePermissionToggle(module.id, action)}
                              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700 capitalize">{action}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowPermissionModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSavePermissions}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Save Permissions
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
