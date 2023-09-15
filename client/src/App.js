import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import { Route, Routes } from 'react-router-dom';
import Detail from './views/Detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/users/:id' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
