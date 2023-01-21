import './App.css';
import NavigationBar from "./components/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/MyCustomCss.css';
import './css/Widget.css';
import './css/Navigation.css';
import SellerDashboardSite from "./sites/SellerDashboardSite";
import Settings, {SettingsContext} from "./data/Settings";
import {useState} from "react";

function App() {

    return (
        <SettingsContext.Provider value={useState(Settings)}>
            <div className="App bg-dark">
                <NavigationBar/>
                <SellerDashboardSite/>
            </div>
        </SettingsContext.Provider>
    );
}

export default App;
