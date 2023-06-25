import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Basket from './pages/Basket';
import Account from './pages/Account';
import Policy from './pages/Policy';
import Terms from './pages/Terms';
import Newsletter from './pages/Newsletter';
import RecipeDetails from './pages/RecipeDetails';
import NotFound from './pages/NotFound';
import './server';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='basket' element={<Basket />} />
          <Route path='account' element={<Account />} />
          <Route path='newsletter' element={<Newsletter />} />
          <Route path='recipes/:id' element={<RecipeDetails />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='terms' element={<Terms />} />
        <Route path='policy' element={<Policy />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
