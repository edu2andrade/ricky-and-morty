import { BASE_URL } from '../services/FetchData';
import { CharacterType } from '../types';

export const CACHE_TIME =  5 * 60 * 1000; // 5 minutes
const CACHE_KEY = `${BASE_URL}_cache`;
const TIMESTAMP_KEY = `${BASE_URL}_timestamp`;
const CURRENT_PAGE_KEY = `${BASE_URL}_page`;
const CURRENT_PAGE = localStorage.getItem(CURRENT_PAGE_KEY);
export const PAGE = CURRENT_PAGE ? parseInt(CURRENT_PAGE, 10) : 1;

export const getFromCache = () => {
  const cachedData = localStorage.getItem(CACHE_KEY);
  const cachedTimestamp = localStorage.getItem(TIMESTAMP_KEY);
  return { cachedData, cachedTimestamp };
};

export const setToCache = (data: CharacterType[], page: number) => {
  localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  localStorage.setItem(TIMESTAMP_KEY, Date.now().toString());
  localStorage.setItem(CURRENT_PAGE_KEY, JSON.stringify(page));
};

export const resetCache = (newData: CharacterType[]) => {
  localStorage.removeItem(CACHE_KEY);
  localStorage.removeItem(TIMESTAMP_KEY);
  localStorage.removeItem(CURRENT_PAGE_KEY);
  localStorage.setItem(CACHE_KEY, JSON.stringify(newData));
  localStorage.setItem(TIMESTAMP_KEY, Date.now().toString());
  localStorage.setItem(CURRENT_PAGE_KEY, JSON.stringify(1));
};