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
  const [myRepos, setMyRepos] = useState([]);

  function addRepo(newRepo) {
    const repoAlreadyPresent = myRepos.includes(newRepo)
    let newRepos;
    if (!repoAlreadyPresent) {
      newRepos = [...myRepos, newRepo];
    } else {
      newRepos = myRepos
    }
    setMyRepos(newRepos);
  }
  function deleteRepo(repoToDelete) {
    const newRepos = myRepos.filter((r, idx) => repoToDelete.name !== r.name);
    setMyRepos(newRepos);
  }
  return (
    <main className="App">
      <h1>Welcome to GoLinks Guide!</h1>
      {user ?
        <>
          <NavBar setUser={setUser}/>
          <Routes>
            <Route path="/searchrepos" element={<SearchReposPage setRepos={setRepos} repos={repos} addRepo={addRepo} />}></Route>
            <Route path="/myrepos" element={<MyReposPage myRepos={myRepos} deleteRepo={deleteRepo}/>}></Route>
          </Routes>
        </>
        :
        <Login user={user} setUser={setUser}/>
      }
    </main>
  );
}
