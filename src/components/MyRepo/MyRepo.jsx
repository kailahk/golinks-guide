import "./MyRepo.css"

export default function MyRepo({myRepo, deleteRepo}) {
    return(
        <div className="MyRepo">
            {myRepo.name}
            <button onClick={() => deleteRepo(myRepo)}>Delete from my Repos</button>
        </div>
    )

}