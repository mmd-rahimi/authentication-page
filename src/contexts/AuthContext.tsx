import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';
import type { RegisterFormData } from '@/schemas/auth';

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface IAuthContext {
  user: IUser | null;
  login: (username: string, password: string) => Promise<void>;
  register: (userData: RegisterFormData) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.get(
        'http://localhost:3001/users',
        {
          params: { username, password }
        }
      );

      if (response.data.length === 0) {
        return {
          succses: false,
          error: "username or password is incorrect"
        }
      }

      const userData = response.data[0];
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      toast.success('Logged in successfully');
      navigate('/Home');
    } catch (error) {
      return {
        success: false,
        error: 'Network or server error'
      };
    }
  };

  const register = async (userData: RegisterFormData) => {
    try {
      // Check if username exists
      const checkResponse = await axios.get(
        'http://localhost:3001/users',
        { params: { username: userData.username } }
      );

      if (checkResponse.data.length > 0) {
        throw new Error('Username already exists');
      }

      // Create new user
      const response = await axios.post(
        'http://localhost:3001/users',
        {
          name: userData.name,
          username: userData.username,
          password: userData.password,
          email: `${userData.username}@example.com`
        }
      );

      toast.success('Account created successfully');
      navigate('/');
      return response.data;
    } catch (error) {
      toast.error('Registration failed');
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};