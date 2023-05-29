import "./Result.css"

export default function Result({repo}) {
    const lastUpdated = repo.updated_at.split('-')
    const updatedTimeToShow = `${lastUpdated[1]}/${lastUpdated[0]}`
    console.log(repo)
    return(
        <div className="Result">
            <h4>{repo.name}</h4>
            <p>{repo.description}</p>
            <p>{updatedTimeToShow}</p>
        </div>
    )

}