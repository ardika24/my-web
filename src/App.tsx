import { Route, Routes } from 'react-router-dom';
import './App.css';

import Wrapper from './components/Layout/Wrapper';
import Home from './components/Home/Home';
import Project from './components/Project/Project';

function App() {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route path='/' element={<Home darkMode={false} />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
