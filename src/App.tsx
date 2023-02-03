import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { ROUTES } from './constants/routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Context } from 'hooks/context';
import Parse from 'parse';
const PARSE_APPLICATION_ID = 'KnattpmQQW6mgrVGVCjGqHgFyLzJffEtMCa0v1jy';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = '4dyP8U37mMaY3qkbd1ITyBTjasN6A9Yc6wsRRyoZ';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;
import useTheme from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <Context.Provider value={{ isActive, setIsActive }}>
      <div className={`App ${theme === 'dark' ? 'dark' : 'light'}`}>
        <BrowserRouter>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            {ROUTES.map((route) => (
              <Route key={route.id} path={route.path} element={route.element} />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
