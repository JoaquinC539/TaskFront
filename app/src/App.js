import {  Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LandPage from "./components/LandPage/LandPage"
import About from "./components/About/About"
import Login from './components/Login/Login'
import Dash from './components/Dash/Dash';
import Team from './components/Team/Team';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandPage />}></Route>
        <Route path="about" element={<About />}/>
        <Route path="login" element={<Login />}/>
        <Route path="dash" element={<Dash />} />
        <Route path="team" element={<Team />} />
      </Route>
    </Routes>
  );
}

export default App;
