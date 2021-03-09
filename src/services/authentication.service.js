import { storageService } from './storage.service';
import { STORAGE_KEY_AUTHENTICATION } from '../constants';

const getCurrentUser = () => {
  try {
    const currentUser = storageService.getStorageItem(STORAGE_KEY_AUTHENTICATION);
    if (!currentUser) return null;
    return JSON.parse(currentUser);
  } catch (e) {
    return null;
  }
};

const login = (userData) => {
  console.log('userData', userData)
  storageService.setStorageItem(STORAGE_KEY_AUTHENTICATION, userData);
};

const logout = () => {
  storageService.removeStorageItem(STORAGE_KEY_AUTHENTICATION);
};

export const authenticationService = {
  getCurrentUser,
  login,
  logout,
};
