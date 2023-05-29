export async function getRepos(searchInput) {
    console.log(searchInput)
    const options = {
        headers: {
            accept: "application/vnd.github.text-match+json",
            "Content-Type": "application/json",
        }
    }
    const {keyword, sort, order} = searchInput;
    const queryString = `?q=${keyword}+in:name,description&sort=${sort}&order=${order}`
    const base_url = 'https://api.github.com/search/repositories'
    const res = fetch(base_url+queryString, options).then(res => res.json());
    return res;
}