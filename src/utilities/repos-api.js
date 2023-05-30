export async function fetchRepos(base_url, queryString, options) {
    const res = await fetch(base_url+queryString, options).then(res => res.json());
    return res
}