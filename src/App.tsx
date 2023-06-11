import { Route, Routes } from 'react-router-dom';
import './App.css';

import Wrapper from './components/Layout/Wrapper';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' />
          <Route path='/contact' />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
