import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validation des identifiants
    if (email === 'amine@gmail.com' && password === 'amine') {
      console.log('Tentative de connexion avec:', { email, password, rememberMe });
      onLogin();
      navigate('/dashboard'); // Redirection vers le Dashboard
    } else {
      setError('Identifiants incorrects.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8 px-2 sm:px-4 lg:px-8">
      <motion.div 
        className="max-w-md w-full space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <img
            className="mx-auto h-16 w-auto mb-6 sm:h-24"
            src="/logo192.png"
            alt="Logo"
          />
          <h2 className="mt-4 sm:mt-6 text-center text-2xl sm:text-3xl font-extrabold text-gray-900">
            Connexion à votre compte
          </h2>
        </div>
        <form className="mt-6 sm:mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <motion.div 
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </motion.div>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Adresse email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-vinca-primary focus:border-vinca-primary focus:z-10 text-sm sm:text-base"
                placeholder="Adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-vinca-primary focus:border-vinca-primary focus:z-10 text-sm sm:text-base"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-vinca-primary focus:ring-vinca-primary border-gray-300 rounded"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Se souvenir de moi
              </label>
            </div>
            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-vinca-primary hover:text-vinca-secondary">
                Mot de passe oublié ?
              </Link>
            </div>
          </div>
          <div>
            <motion.button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-vinca-primary hover:bg-vinca-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vinca-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Se connecter
            </motion.button>
          </div>
          <div className="mt-4">
            <button
              type="button"
              onClick={() => navigate('/admin-login')}
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition"
            >
              Espace Administrateur
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
