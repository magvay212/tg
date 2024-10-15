import './App.css';
import {Route, Routes} from 'react-router-dom'
import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram'
import Header from './components/Header/Header';
import Category from './components/Category/Category'

function App() {
  const {tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Category />}/>
      </Routes>
    </div>
  );
}

export default App;
