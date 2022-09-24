import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Landing, Favorites, Recipe, SharedLayout} from './pages'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Landing />} />
            <Route path='favorites' element={<Favorites />}/>
            <Route path='recipe' element={<Recipe />}/>
          </Route>
          <Route path="*" element={<h3>Page not found</h3>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
