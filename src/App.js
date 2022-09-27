import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Category from './components/Category';
import Confirmation from './components/Confirmation';
import HomePage from './components/HomePage';
import MeasureExample from './components/MeasureExample';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <header className='border-b-2 border-zinc-700'>
        <div className='flex-row items-center justify-end'>
          <NavLink to='/' end className={({isActive}) => isActive ? 'text-white bg-black rounded-full font-bold mr-5 px-5' : 'font-bold mr-5'}>Home</NavLink>
          <NavLink to='/categories' className={({isActive}) => isActive ? 'text-white bg-black rounded-full font-bold mr-5 px-5' : 'font-bold mr-5'}>Categories</NavLink>
          <NavLink to='/about' className={({isActive}) => isActive ? 'text-white bg-black rounded-full font-bold mr-5 px-5' : 'font-bold mr-5'}>About</NavLink>
          <NavLink to='/register' className={({isActive}) => isActive ? 'text-white bg-black rounded-full font-bold mr-5 px-5' : 'font-bold mr-5'}>Register</NavLink>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/categories' element={<Categories />}>
          <Route path=':catId' element={<Category/>}/>
        </Route>
        <Route path='/about' element={<MeasureExample />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/confirmed' element={<Confirmation />}/>
        <Route path='*' element={<div className='font-bold text-xl text-red-500'>404 Not Found</div>} />

      </Routes>
    </div>
  );
}

export default App;
