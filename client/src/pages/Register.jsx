import React, { useState } from 'react';
import { useRegisterUserMutation } from '../app/apiSlice';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerUser] = useRegisterUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, token } = await registerUser({ email, password }).unwrap();
      dispatch(setCredentials({ user, token }));
      navigate('/dashboard'); // Redirect to the dashboard after successful registration
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed! Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 mb-4 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-4 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
