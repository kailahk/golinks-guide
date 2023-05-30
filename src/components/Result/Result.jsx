import "./Result.css"

export default function Result({ repo, addRepo }) {
    const lastUpdated = repo.updated_at.split('-')
    const updatedTimeToShow = `${lastUpdated[1]}/${lastUpdated[0]}`
    return (
        <div className="Result">
            <h4>{repo.name}</h4>
            <p>{repo.description}</p>
            <p>{updatedTimeToShow}</p>
            <button onClick={() => addRepo(repo)}>Add to my Repos</button>
        </div>
    )

}