import { CharacterType } from '../types';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { getCharactersList } from '../services/FetchData';
import { CACHE_TIME, PAGE, getFromCache, resetCache, setToCache } from '../utils/cache';

const useCharacters = () => {
  const [characterList, setCharacterList] = useState<CharacterType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(PAGE);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { ref, inView } = useInView();

  const fetchData = async () => {
    try {
      const { cachedData, cachedTimestamp } = getFromCache();

      if (cachedData && cachedTimestamp) {
        const isCacheExpired = Date.now() - parseInt(cachedTimestamp, 10) > CACHE_TIME;
        if (isCacheExpired) {
          setCurrentPage(1);
          await loadInitialData();
          return;
        } else {
          setCharacterList(JSON.parse(cachedData));
          setIsLoading(false);
          return;
        }
      }
      await loadInitialData();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const loadInitialData = async () => {
    try {
      const response = await getCharactersList(1);
      const newData = response.results;
      setCharacterList(newData);
      resetCache(newData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const loadData = async (page: number) => {
    try {
      const response = await getCharactersList(page);
      const newData = response.results;
      setCharacterList([...characterList, ...newData]);
      setToCache([...characterList, ...newData], page);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (inView) {
      loadData(currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  }, [inView]);

  return { characterList, ref, isLoading };
};

export default useCharacters;
