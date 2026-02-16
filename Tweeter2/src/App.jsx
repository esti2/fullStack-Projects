import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@mantine/core/styles.css';
import { Route, Routes } from "react-router";


import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

import ContextTweet from './Context/ContextTweet';

import ViewTweeter from './components/ViewTweeter';

import Navbar from './components/Navbar';

function App() {


  return (
    <>
      <Navbar>
        <ContextTweet>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
            <Route path="/HomePage" element={<HomePage />} />
          </Routes >
        </ContextTweet>
      </Navbar>

    </>
  )
}

export default App
