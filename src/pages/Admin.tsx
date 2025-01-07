import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Package, Users, Settings } from 'lucide-react';

const Admin = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex gap-8">
        <AdminSidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<OrderManagement />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/settings" element={<AdminSettings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const AdminSidebar = () => {
  const links = [
    { icon: Package, label: 'Orders', path: '/admin' },
    { icon: Users, label: 'Users', path: '/admin/users' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <div className="w-64 bg-white rounded-lg shadow-md p-6">
      <nav className="space-y-2">
        {links.map((link) => (
          <a
            key={link.path}
            href={link.path}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-50"
          >
            <link.icon className="w-5 h-5" />
            <span>{link.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

const OrderManagement = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold mb-6">Order Management</h2>
    <div className="space-y-4">
      {[1, 2, 3].map((order) => (
        <div key={order} className="border rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">Order #{order}</span>
            <select className="border rounded px-2 py-1">
              <option>Pending</option>
              <option>Processing</option>
              <option>Delivered</option>
            </select>
          </div>
          <div className="text-sm text-gray-600">
            <p>Customer: John Doe</p>
            <p>Total: $45.99</p>
            <p>Delivery Time: 2024-02-{order} 14:00</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const UserManagement = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold mb-6">User Management</h2>
    <table className="w-full">
      <thead>
        <tr className="border-b">
          <th className="text-left py-2">Name</th>
          <th className="text-left py-2">Email</th>
          <th className="text-left py-2">Orders</th>
          <th className="text-left py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3].map((user) => (
          <tr key={user} className="border-b">
            <td className="py-2">User {user}</td>
            <td className="py-2">user{user}@example.com</td>
            <td className="py-2">{user * 2}</td>
            <td className="py-2">
              <button className="text-indigo-600 hover:text-indigo-800">Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const AdminSettings = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold mb-6">Admin Settings</h2>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name</label>
        <input type="text" className="w-full px-4 py-2 border rounded-lg" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Business Hours</label>
        <div className="grid grid-cols-2 gap-4">
          <input type="time" className="px-4 py-2 border rounded-lg" />
          <input type="time" className="px-4 py-2 border rounded-lg" />
        </div>
      </div>
      <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
        Save Changes
      </button>
    </div>
  </div>
);

export default Admin;