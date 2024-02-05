import { CharacterType } from '../types';
import CharacterCard from '../components/CharacterCard';
import Loading from '../components/Loading';
import useCharacters from '../hooks/useCharacters';

const CharactersList = () => {
  const { characterList, isLoading, ref } = useCharacters();

  return (
    <section className='px-8 lg:px-24 xl:px-40 py-4 '>
      <main className="py-8 flex flex-col items-center">
        <h1 className="mb-12 text-4xl font-bold">Characters List</h1>
        <div className='flex flex-wrap gap-4 justify-center'>
          {characterList?.length > 0 ? characterList.map((character: CharacterType) => (
            <CharacterCard key={character.id} character={character} />
          )) : <Loading />}
        </div>
        <div ref={ref}>
          {isLoading ? <Loading /> : 'Get more!'}
        </div>
      </main>
    </section>
  );
};

export default CharactersList;