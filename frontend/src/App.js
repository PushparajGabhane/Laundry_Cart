import './App.css';
import SignIn from './components/SignIn';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Resgister';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}


export default App;
