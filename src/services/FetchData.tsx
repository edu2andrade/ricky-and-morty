const BASE_URL = 'https://rickandmortyapi.com/api';

const getCharactersList = async (page?: number) => {
  const response = await fetch(`${BASE_URL}/character/${page ? `?page=${page}` : ''}`);
  const data = await response.json();
  return data;
};

const getCharacterData = async (characterId: string) => {
  const response = await fetch(`${BASE_URL}/character/${characterId}`);
  const data = await response.json();
  return data;
};

const getCharacterLocation = async (locationId: string) => {
  const response = await fetch(`${BASE_URL}/location/${locationId}`);
  const data = await response.json();
  return data;
};

export { BASE_URL, getCharactersList, getCharacterData, getCharacterLocation };
