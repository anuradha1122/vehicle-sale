import './App.css';
import { useEffect, useState } from 'react';
import { isExpired } from "react-jwt";
import { DataProvider } from './services/MyContext';
import { Route, Routes, useLocation } from "react-router-dom";
import AuthService from './services/Auth-service';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AdsPanel from './components/AdsPanel';
import ViewAds from './components/ViewAds';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './user/Dashboard';

function App() {
  const location = useLocation();

  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  const currentLogin = () => {
    const token = localStorage.accessToken;
    const isMyTokenExpired = isExpired(token);
    if (isMyTokenExpired) {
      setIsLogin(false);
    } else {
      const localUser = AuthService.getCurrentUser();
      setIsLogin(true);
      setUser(localUser);
    }
  };

  useEffect(() => {
    async function asyncCall() {
      currentLogin();
    }
    asyncCall();
  }, [location.pathname]);

  return (
    <><DataProvider>
      <Header isLogin={isLogin} user={user} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/ads" element={<AdsPanel />} />
        <Route exact path="/view-ads" element={<ViewAds />} />
        {!isLogin && <Route exact path="/login" element={<Login />} />}
        {!isLogin && <Route exact path="/register" element={<Register />} />}
        {isLogin && <Route exact path="/dash/*" element={<Dashboard user={user} />} />}
        <Route path="*" element={<p className='text-center m-5'>There's nothing here: 404!</p>} />
      </Routes>
      <Footer />
    </DataProvider>
    </>
  );
}

export default App;
