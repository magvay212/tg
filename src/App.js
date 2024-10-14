import './App.css';
import {Route, Routes} from 'react-router-dom'
import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram'
import Header from './components/Header/Header';
import Scrub from './components/Scrub/Scrub';

function App() {
  const {tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Scrub />}/>
      </Routes>
    </div>
  );
}

export default App;
