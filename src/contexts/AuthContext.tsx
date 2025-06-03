import type { IAuthContext, IUser } from "@/types/Types";
import { createContext, useContext, useState } from "react";
import axios from 'axios';



const AuthContext = createContext<IAuthContext | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      const response = await axios.get<IUser[]>(
        'http://localhost:3001/users',
        { params: { username, password } }
      );
      
      if (response.data.length > 0) {
        setUser(response.data[0]);
        localStorage.setItem('user', JSON.stringify(response.data[0]));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };


    const register = async (userData: Omit<IUser, 'id'>): Promise<boolean> => {
    try {
      // Check if username exists
      const checkUser = await axios.get<IUser[]>(
        'http://localhost:3001/users',
        { params: { username: userData.username } }
      );
      
      if (checkUser.data.length > 0) {
        throw new Error('Username already exists');
      }

      // Create new user
      const response = await axios.post<IUser>(
        'http://localhost:3001/users',
        userData
      );
      
      if (response.status === 201) {
        return true;
      }
      return false;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };


  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };




  return (
    <AuthContext.Provider value={{ user, setUser, login, register, logout }}>
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
