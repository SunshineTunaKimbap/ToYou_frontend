import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Root from "./layouts/Root";

import Browse from './pages/\bbrowse/Browse';
import Search from './pages/search/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/post" element={<Browse />} />
          <Route path="/post/:postid" element={<Post />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
