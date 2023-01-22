import './App.css';
import React from 'react';
import NavigationBar from "./components/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/MyCustomCss.css';
import './css/Widget.css';
import './css/Navigation.css';
import SellerDashboardSite from "./sites/SellerDashboardSite";
import Settings, {SettingsContext} from "./data/Settings";
import {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmptySite from "./sites/EmptySite";


function App() {
    const [settings, setSettings] = useState(Settings);
    return (
        <SettingsContext.Provider value={[settings, setSettings]}>
            <BrowserRouter>
                <div className={`min-vh-100 ${settings.bgDark && "bg-dark text-bg-dark"}`}>
                    <div className={`App h-100 ${settings.bgDark && "bg-dark text-bg-dark"}`}>
                        <NavigationBar/>
                        <Routes>
                            <Route path="/" element={<SellerDashboardSite/>}/>
                            <Route path="/*" element={<EmptySite/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </SettingsContext.Provider>
    );
}

export default App;
