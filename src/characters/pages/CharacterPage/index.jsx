import { useParams } from "react-router-dom"
import { CharacterDetail } from "./components";


export const CharacterPage = () => {
  const { id } = useParams();

  return (
    <>
      <CharacterDetail id={id}/>
    </>
  )
}
