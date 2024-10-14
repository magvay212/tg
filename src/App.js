import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import Productlist from './components/ProductList/productlist';
import { Route, Routes } from 'react-router-dom';

function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={Productlist}/>
      </Routes>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
