import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartUpPage from './pages/StartUpPage';
import ProfilePage from './pages/ProfilePage';
import TranslationPage from './pages/TranslationPage';
import NavBar from './navBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={ <StartUpPage /> } /> 
          <Route path='/profile' element={ <ProfilePage /> } /> 
          <Route path='/translation' element={ <TranslationPage /> } /> 
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
