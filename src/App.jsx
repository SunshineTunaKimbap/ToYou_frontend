import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Root from "./layouts/Root";

import Profile from './pages/profile/Profile';
import Browse from './pages/browse/Browse';
import Post from './pages/post/Post';
import LetterView from './pages/letter/LetterView';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>

          <Route path="/" element={<Profile />} />
          <Route path="/letter"
            element={
              <Browse infoList={
                [
                  {abbrReceiver:"ㅅㅎㅈ", content:"15분만 잘게"},
                  {abbrReceiver:"ㅂㅅㅈ", content:"뭐라고?"},
                  {abbrReceiver:"ㅇㅈㅇ", content:"#likeagirl"},
                  {abbrReceiver:"ㅂㅈㅎ", content:""},
                  {abbrReceiver:"ㅅㅇㅊ", content:"졸려요"},
                ]
              }/>
            } />
          <Route path="/letter/:letterid" element={<LetterView info={{abbrReceiver:"ㄱㅅㅇ", content:"안녕."}}/>} />
          <Route path="/post" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
