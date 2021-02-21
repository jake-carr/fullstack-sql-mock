import React from 'react';

const Search = (props) => {
  const { handleSearchInput, go } = props;

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={handleSearchInput} />
      <button className="btn hidden-sm-down" onClick={go}>
        <span className="glyphicon glyphicon-search">search</span>
      </button>
    </div>
  )

};

export default Search;