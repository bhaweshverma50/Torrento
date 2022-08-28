import React from "react";
import "./App.css";
import 'antd/dist/antd.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="teams" element={<Teams />}> */}
          {/* <Route path=":teamId" element={<Team />} /> */}
          {/* <Route path="new" element={<NewTeamForm />} /> */}
          {/* <Route index element={<LeagueStandings />} /> */}
        {/* </Route> */}
    </Routes>
  </BrowserRouter>
  );
}