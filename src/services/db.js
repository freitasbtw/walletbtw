const DB_NAME = 'MultiWalletDB';
const DB_VERSION = 1;
const STORE_NAME = 'portfolios';

export const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
  });
};

export const savePortfolios = async (portfolios) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.put(portfolios, 'current_data');

    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error);
  });
};

export const loadPortfolios = async () => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get('current_data');

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};
