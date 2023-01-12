import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Analytics from './pages/Analytics';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import AppBar from './components/AppBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/analytics' element={<Analytics />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
