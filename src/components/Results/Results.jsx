import "./Results.css"
import Result from "../Result/Result"

export default function Results({repos, addRepo}) {
    let searchResults = repos;
    if (repos.items) {
        searchResults = repos.items
    }
    const reposList = searchResults.map((r, idx) => <Result repo={r} key={idx} addRepo={addRepo}/>)
    return(
        <div className="Results">
            {reposList}
        </div>
    )
}