import { useParams, useNavigate } from 'react-router-dom';
import { LocationType, SingleCharacterType } from '../types';
import {getCharacterData, getCharacterLocation} from '../services/FetchData';
import Button from '../components/Button';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';

const CharacterDetails = () => {
  const [character, setCharacter] = useState<SingleCharacterType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { characterId } = useParams();
  const navigate = useNavigate();

  const fetchCharacter = async (characterId: string) => {
    setIsLoading(true);
    try {
      const response = await getCharacterData(characterId);
      setCharacter(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (characterId) fetchCharacter(characterId);
  }, [characterId]);

  const locationId = character && character.location.url.split('/').pop();

  return (
    <main className="px-8 lg:px-24 xl:px-40 py-8 flex flex-col items-center">
      {(character && !isLoading) ? (
        <>
          <h1 className="pb-8 text-4xl text-center font-bold">{character.name}</h1>
          <article className="p-8 flex flex-col gap-8 rounded-xl border border-cyan-300">
            <img
              src={character.image}
              alt="characters face"
              className="w-80 rounded-xl"
            />
            <div className="flex flex-col">
              <ul>
                <li>
                  <strong>Origin: </strong>
                  {character.origin.name}
                </li>
                <li>
                  <strong>Gender: </strong>
                  {character.gender}
                </li>
                <li>
                  <strong>Specie: </strong>
                  {character.species}
                </li>
                <li>
                  <strong>Status: </strong>
                  {character.status}
                </li>
                <li>
                  <strong>Location: </strong>
                  <Location id={locationId} />
                </li>
              </ul>
              <Button title="Back to characters list" onClick={() => navigate('/')} />
            </div>
          </article>
        </>
      ) : (<Loading />)}
    </main>
  );
};

function Location({ id }: { id: string | null | undefined }) {
  const [location, setLocation] = useState<LocationType | null>(null);

  const fetchLocation = async (locationId: string) => {
    try {
      const response = await getCharacterLocation(locationId);
      setLocation(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) fetchLocation(id);
  }, [id]);

  return (
    <>
      {location ? (<p>{location.name} - {location.type}</p>) : (<p>Not found</p>)}
    </>
  );
}

export default CharacterDetails;