import { useNavigate } from 'react-router-dom';
import { CharacterType } from '../types';
import Button from './Button';

interface CharacterCardProps {
  character: CharacterType;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const navigate = useNavigate();
  return (
    <article
      className="
        p-6
        flex flex-col items-center
        bg-gray-900 shadow-xl rounded-xl border border-cyan-500
        hover:scale-105 transition
      "
    >
      <img
        src={character.image}
        alt="character face"
        className="mb-4 w-40 rounded-full"
      />
      <div className="w-52 p-3 text-center">
        <h2 className="mb-2 text-xl font-semibold">{character.name}</h2>
        <p className="text-gray-400 text-left"><b>status:</b> {character.status}</p>
        <p className="text-gray-400 text-left"><b>origin:</b> {character.origin.name}</p>
      </div>
      <div className='mt-auto w-full'>
        <Button
          title="See details"
          onClick={() => navigate(`details/${character.id}`)}
        />
      </div>
    </article>
  );
};

export default CharacterCard;
