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
    const [settings, setSettings] = useState(Settings);
    return (
        <SettingsContext.Provider value={[settings, setSettings]}>
            <div className={`min-vh-100 ${settings.bgDark && "bg-dark text-bg-dark"}`}>
                <div className={`App h-100 ${settings.bgDark && "bg-dark text-bg-dark"}`}>
                    <NavigationBar/>
                    <SellerDashboardSite/>
                </div>
            </div>
        </SettingsContext.Provider>
    );
}

export default App;
