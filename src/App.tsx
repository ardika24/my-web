import { Route, Routes } from 'react-router-dom';
import './App.css';

import Wrapper from './components/Layout/Wrapper';
import Home from './components/Home/Home';
import Cursor from './components/Cursor/Cursor';

function App() {
  return (
    <>
      <Cursor />
      <Wrapper>
        <Routes>
          <Route path='/' element={<Home darkMode={false} />} />
          <Route path='/project' />
          <Route path='/contact' />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
