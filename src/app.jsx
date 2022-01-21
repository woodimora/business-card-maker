import React from 'react';
import './app.module.css';
import Login from "./components/login/login";
import styles from "./app.module.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Maker from "./components/maker/maker";

function App({authService, FileInput}) {
    return (
        <div className={styles.app}>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Login authService={authService}/>}/>
                    <Route path='/maker' element={<Maker authService={authService} FileInput={FileInput}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
