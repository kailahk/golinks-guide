import "./Result.css"

export default function Result({repo, addRepo}) {
    const lastUpdated = repo.updated_at.split('-')
    const updatedTimeToShow = `${lastUpdated[1]}/${lastUpdated[0]}`
    const description = `${repo.description}`.split('')
    const textMatches = []
    repo.text_matches.forEach((obj, idx) => {
        console.log(obj)
        obj.matches.forEach((match, idx) => {
            console.log(match)
            textMatches.push(match.indices)
        })
    })
    console.log(repo, textMatches)
    return(
        <div className="Result">
            <h4>{repo.name}</h4>
            <p>{
                repo.description
                }</p>
            <p>{updatedTimeToShow}</p>
            <button onClick={()=> addRepo(repo)}>Add to my Repos</button>
        </div>
    )

}