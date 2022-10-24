import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import CreateAds from './CreateAds';
import Profile from './Profile';

export default function Dashboard(props) {
  const { user } = props;
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Profile />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/createads" element={<CreateAds user={user} />} />
      </Routes>
    </div>
  )
}
