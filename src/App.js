import React from 'react';
import './App.css';
import {dikshenedi} from './dikshenedi'

function App() {
    return (
        <div className="app">
            <div className="app__container">
                <div className="app__title">
                    <h1>GGB <br />GOLPA GUIDE BOOK</h1>
                </div>
                <div className="app__words">
                    {
                        dikshenedi.map((item)=>{
                            return (
                                <div className="app__word">
                                    <div className='app__word--title'><span>{item.dik}</span> ( {item.method} )</div>
                                    <div className='app__word--main'>{item.desc}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="app__version">
                    <span>last update : 2020-01-07</span>
                    <span>V1.2.0</span>
                </div>
            </div>

        </div>
    );
}

export default App;
