
import { API_URL } from '../../../../Config/Constants';
import { useFetchCharacters } from '../../../hooks/useFetchCharacters';
import { CharacterCard } from './CharacterCard';

export const CharacterList = () => {

  const {characters,loading,error} = useFetchCharacters(`${API_URL}/people/`);

  return (
    <>
      <h1 className='text-center p-2'>Star Wars Characters</h1>

      <hr />
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {
          characters?.map((character) => {
            return <CharacterCard
              key={character?.name}
              {...character}
            />
          })
        }
      </div>
    </>
  )
}
