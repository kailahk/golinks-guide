import './MyReposPage.css';
import MyRepo from '../../components/MyRepo/MyRepo';

export default function MyReposPage({myRepos, deleteRepo}) {
  const reposList = myRepos.map((mR, idx) => <MyRepo myRepo={mR} key={idx} deleteRepo={deleteRepo}/>)
  return (
    <div className="MyReposPage">
      {reposList}
    </div>
  );
}
