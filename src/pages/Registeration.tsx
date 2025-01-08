import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        // Simulate registration
        alert('Registration successful!');
        navigate('/login');
      };


      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
          <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
            <div>
              <h2 className="text-3xl font-bold text-center">Create an Account</h2>
              <p className="mt-2 text-center text-gray-600">Already have an account? 
                <Link to="/login" className="text-indigo-600 hover:text-indigo-500 ml-1">Sign in</Link>
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full px-4 py-2 border rounded-lg"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    required
                    className="mt-1 w-full px-4 py-2 border rounded-lg"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    required
                    className="mt-1 w-full px-4 py-2 border rounded-lg"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    required
                    className="mt-1 w-full px-4 py-2 border rounded-lg"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      );
    };
    
    export default Register;