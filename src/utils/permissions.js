/**
 * Permission utility functions
 */

/**
 * Get user permissions from localStorage
 */
export const getUserPermissions = () => {
  try {
    return JSON.parse(localStorage.getItem('permissions') || '[]');
  } catch (error) {
    console.error('Error parsing permissions:', error);
    return [];
  }
};

/**
 * Check if user has a specific permission
 */
export const hasPermission = (permission) => {
  const permissions = getUserPermissions();
  return permissions.includes(permission);
};

/**
 * Check if user has any of the specified permissions
 */
export const hasAnyPermission = (permissionList) => {
  const permissions = getUserPermissions();
  return permissionList.some(perm => permissions.includes(perm));
};

/**
 * Check if user has all of the specified permissions
 */
export const hasAllPermissions = (permissionList) => {
  const permissions = getUserPermissions();
  return permissionList.every(perm => permissions.includes(perm));
};

/**
 * Get user role from localStorage
 */
export const getUserRole = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user?.role;
  } catch (error) {
    console.error('Error parsing user:', error);
    return null;
  }
};

/**
 * Check if user is admin
 */
export const isAdmin = () => {
  const role = getUserRole();
  return role?.id === 1 || role?.name?.toLowerCase() === 'admin';
};
