import './styles/App.scss';
import Header from "./components/header";
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'
import {useEffect, useState} from "react";
import HomeScreen from "./screens/homeScreen";
import Footer from "./components/Footer";

function App() {
  return (
      <Router>
          <Routed/>
      </Router>
  );
}

function Routed() {
    let location = useLocation();

    const [hide, setHide] = useState(false);
    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/confirm' || location.pathname === '/forgotpassword' || location.pathname === '/logout') {
            setHide(true);

        } else {

            setHide(false);

        }
    }, [location.pathname])

    return (<div className={'h-100'}>
        {!hide && <Header/>}

        <main>
            <Routes>
                <Route path={'/'} element={<HomeScreen/>}/>
            </Routes>
        </main>
        {!hide && <Footer/>}
    </div>)
}
export default App;
