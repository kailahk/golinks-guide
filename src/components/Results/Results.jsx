import "./Results.css"
import Result from "../Result/Result"

export default function Results({repos}) {
    let searchResults = repos;
    if (repos.items) {
        searchResults = repos.items
    }
    const reposList = searchResults.map((r, idx) => <Result repo={r} key={idx} />)
    return(
        <div className="Results">
            {reposList}
        </div>
    )
}