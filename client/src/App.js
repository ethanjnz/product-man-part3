import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import { Route, Routes } from 'react-router-dom';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/users/:id' element={<Detail />} />
        <Route path='/user/:id/edit' element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
