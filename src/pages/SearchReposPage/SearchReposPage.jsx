import { useState } from 'react';
import './SearchReposPage.css';
import { getRepos } from '../../utilities/repos-service';
import Results from '../../components/Results/Results';

export default function SearchReposPage({setRepos, repos}) {
  const [formData, setFormData] = useState({
    keyword: '',
    sort: 'updated',
    order: 'desc',
  })
  function handleChange(evt) {
    setFormData({...formData, [evt.target.name]:evt.target.value})
  }
  async function handleSubmit(evt) {
    evt.preventDefault();
    const res = await getRepos(formData);
    setRepos(res);
    setFormData({
      keyword: '',
      sort: 'updated',
      order: 'desc',
    })
  }
  return (
    <div className="SearchReposPage">
      <h3>Search Repos</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="keyword">Keyword: </label>
        <input type="text" name="keyword" id="keyword" value={formData.keyword} onChange={handleChange}/>
        <label htmlFor="sort">Sort By: </label>
        <select name="sort" id="sort" value={formData.sort} onChange={handleChange}>
          <option value="updated">Updated</option>
          <option value="stars">Stars</option>
          <option value="forks">Forks</option>
          <option value="help-wanted-issues">Help Wanted Issues</option>
        </select>
        <label htmlFor="order">Order: </label>
        <select id="order" name="order" value={formData.order} onChange={handleChange}>
          <option value="desc">Descending Order</option>
          <option value="asc">Ascending Order</option>
        </select>
        <button type="submit">Search!</button>
      </form>
      <br /><hr /><br />
      <Results repos={repos} />
    </div>
  );
}
