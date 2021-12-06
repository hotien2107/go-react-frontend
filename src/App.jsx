import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Admin from './components/Admin';
import Genres from './components/Genres';
import Home from './components/Home';
import Movies from './components/Movies';
import OneGenre from './components/OneGenre';
import OneMovie from './components/OneMovie';

export default function App() {
    return (
        <BrowserRouter>
            <div className='container'>
                <div className='row'>
                    <h1 className='mt-3'>Go Watch a Movie!</h1>
                    <hr className='mb-3'></hr>
                </div>

                <div className='row'>
                    <div className='col-md-2'>
                        <nav>
                            <ul className='list-group'>
                                <li className='list-group-item'>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li className='list-group-item'>
                                    <Link to='/movies'>Movies</Link>
                                </li>
                                <li className='list-group-item'>
                                    <Link to='/genres'>Genres</Link>
                                </li>
                                <li className='list-group-item'>
                                    <Link to='/admin'>Manage Catalogue</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className='col-md-10'>
                        <Routes>
                            <Route path='/movies'>
                                <Route index element={<Movies />} />
                                <Route path=':id' element={<OneMovie />} />
                            </Route>

                            <Route exact path='/genres'>
                                <Route index element={<Genres />} />
                                <Route path=':genre_id' element={<OneGenre />} />
                            </Route>

                            <Route path='/admin' element={<Admin />} />

                            <Route path='/' element={<Home />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}
