import React, { useState } from 'react';
import Button from '../components/Button';
import InputField from '../components/InputField';


const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        <form className="space-y-6">
          {!isLogin && (
            <InputField label="Username" type="text" placeholder="Enter your username" />
          )}
          <InputField label="Email" type="email" placeholder="Enter your email" />
          <InputField label="Password" type="password" placeholder="Enter your password" />
          <Button text={isLogin ? 'Login' : 'Register'} />
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <span
              className="text-blue-500 cursor-pointer ml-1 hover:underline transition-all"
              onClick={toggleForm}
            >
              {isLogin ? 'Register' : 'Login'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
