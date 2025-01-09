import apiDataService from '../axios';
import { ILoginRequest } from '../types/auth/ILoginRequest';
import { ILoginResponse } from '../types/auth/ILoginResponse';
import { IRegisterRequest } from '../types/auth/IRegisterRequest';
import { IRegisterResponse } from '../types/auth/IRegisterResponse';
import { IUser } from '../types/user/IUser';

const AuthAPI = {
  login: async (data: ILoginRequest): Promise<ILoginResponse> => {
    const response = await apiDataService.post<ILoginResponse>('/api/auth/login', data);
    return response.data;
  },

  register: async (data: IRegisterRequest): Promise<IRegisterResponse> => {
    const response = await apiDataService.post<IRegisterResponse>('/api/auth/register', data);
    return response.data;
  },

  fetchUser: async (): Promise<IUser> => {
    const response = await apiDataService.get<IUser>('/api/auth/me');
    return response.data;
  },

  logout: async (): Promise<void> => {
    await apiDataService.post('/api/auth/logout');
  }
};

export default AuthAPI;