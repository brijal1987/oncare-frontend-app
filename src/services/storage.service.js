const setStorageItem = (storageItemKey, storageItemValue) => {
  return localStorage.setItem(storageItemKey, storageItemValue);
};
const getStorageItem = (storageItemKey) => {
  return localStorage.getItem(storageItemKey);
};
const removeStorageItem = (storageItemKey) => {
  return localStorage.removeItem(storageItemKey);
};

export const storageService = {
  setStorageItem,
  getStorageItem,
  removeStorageItem,
};
