import React, { useState, useEffect } from 'react';
import history from '../utils/history';
import { connect } from 'react-redux';
import actionSearchAds from '../actions/actionSearchAds';

function convertSearchStr(searchStr) {
  return searchStr.replaceAll(" ", "|");
}

const SearchAdPanel = ({ onSearchAd }) => {
  useEffect(() => {
    onSearchAd()
  }, [])
  const [searchStrForQuery, setSearchStr] = useState();
  return (
    <form className="d-flex " role="search" >
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
        onChange={(e) => setSearchStr(e.target.value)} />
      <button className="btn btn-outline-success" type="submit"
        onClick={(e) => {
          e.preventDefault()
          let convertedStr = convertSearchStr(searchStrForQuery);
          onSearchAd(convertedStr)
          history.push("/search");
        }
        }>Search</button>
    </form>
  )
}

const CSearchAdPanel = connect(null, { onSearchAd: actionSearchAds })(SearchAdPanel);

export default CSearchAdPanel;
