import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from 'src/home/Home';
import { Login } from 'src/login/Login';
import { Post } from 'src/post/Post';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}
