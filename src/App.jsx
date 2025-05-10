import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Root from "./layouts/Root";

import Profile from './pages/profile/Profile';
import Browse from './pages/browse/Browse';
import Post from './pages/post/Post';
import Letter from './pages/letter/Letter';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>

          <Route path="/profile" element={<Profile />} />
          <Route path="/letter" element={<Browse />} />
          <Route path="/letter/:letterid" element={<Letter />} />
          <Route path="/post" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
