
import { Route, Routes } from 'react-router-dom'
import { CharacterPage, CharactersPage } from '../pages'

export const CharactersRoutes = () => {

  return (
    <>

      <div className='container' style={{height: "100%"}}>
        <Routes>

          <Route path='/character/:id' element={<CharacterPage/>}/>
          
          <Route path="/" element={<CharactersPage/>} />

        </Routes>
      </div>


    </>
  )
}
