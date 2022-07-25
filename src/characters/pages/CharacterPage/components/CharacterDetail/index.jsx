
import useFetchSingleCharacter from "../../../../hooks/useFetchSingleCharacter";
import CharacterInfo from "./components/CharacterInfo";

export const CharacterDetail = ({ id }) => {

  
  const { character: currentCharacter, error, loading } = useFetchSingleCharacter({id});


  return (
    <>

      {error && "There was an error fetching user!"}
      {loading && 'Loading...'}
      { currentCharacter && <CharacterInfo currentCharacter={currentCharacter} /> }
    </>
  );
}