import './App.css';
import SearchReposPage from '../SearchReposPage/SearchReposPage';
import MyReposPage from "../MyReposPage/MyReposPage"
import NavBar from "../../components/NavBar/NavBar"
import {Routes, Route} from "react-router-dom"

export default function App() {
  return (
    <main className="App">
      <NavBar/>
      <Routes>
        <Route path="/searchrepos" element={<SearchReposPage/>}></Route>
        <Route path="/myrepos" element={<MyReposPage/>}></Route>
      </Routes>
    </main>
  );
}
