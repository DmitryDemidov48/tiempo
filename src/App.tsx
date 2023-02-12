import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {MonthStatistics} from "./pages/MonthStatistics/components/MonthStatistics";
import {Home} from "./pages/Home/components/Home";
import {Header} from "./shared/Header/Header";
import {Popup} from "./shared/Popup/Popup";




function App() {
    return (
        <Router>
            <div className='global-container'>
           {/*<Popup />*/}
            <div className="container">
            <Header/>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/month-statistics" element={<MonthStatistics/>}/>
                </Routes>
            </div>
                </div>
            </div>
        </Router>
    );
}


export default App;
