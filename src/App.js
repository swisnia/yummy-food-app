import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Landing, Favorites, Recipes, RecipeDetails, SharedLayout} from './pages'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Landing />} />
            <Route path='favorites' element={<Favorites />}/>
            <Route path='recipes' element={<Recipes />}/>
            <Route path='recipe-details' element={<RecipeDetails />}/>
          </Route>
          <Route path="*" element={<h3>Page not found</h3>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
