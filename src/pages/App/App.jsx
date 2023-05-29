import './App.css';
import SearchReposPage from '../SearchReposPage/SearchReposPage';
import MyReposPage from "../MyReposPage/MyReposPage"
import NavBar from "../../components/NavBar/NavBar"
import Login from '../../components/Login/Login';
import { Routes, Route } from "react-router-dom"
import { useState } from 'react';

export default function App() {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  return (
    <main className="App">
      <h1>Welcome to GoLinks Guide!</h1>
      {user ?
        <>
          <NavBar setUser={setUser}/>
          <Routes>
            <Route path="/searchrepos" element={<SearchReposPage setRepos={setRepos} repos={repos}/>}></Route>
            <Route path="/myrepos" element={<MyReposPage />}></Route>
          </Routes>
        </>
        :
        <Login user={user} setUser={setUser}/>
      }
    </main>
  );
}
