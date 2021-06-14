import React, {useContext, useState} from 'react';
import {AlertContext} from "../../context/alert/AlertConterxt";
import {GithubContext} from "../../context/github/githubContext";

const Search = () => {

  const [value, setValue] = useState('')

  const alert = useContext(AlertContext)

  const github = useContext(GithubContext)

  const onSubmit = (event) => {
    if (event.key !== 'Enter') {
      return
    }

    github.clearUsers()

    if (value.trim()) {
      alert.hide()
      github.search(value.trim())
    } else {
      alert.show('Type Username')
    }
  }

  return (
      <div className="form-group mb-4">
        <input
            type="text"
            className="form-control"
            placeholder="Type username"
            onKeyPress={onSubmit}
            onChange={event => setValue(event.target.value)}
            value={value}
        />
      </div>
  );
};

export default Search;
