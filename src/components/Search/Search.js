import React, {useContext, useState} from 'react';
import {AlertContext} from "../../context/alert/AlertConterxt";

const Search = () => {

  const [value, setValue] = useState('')

  const {show} = useContext(AlertContext)

  const onSubmit = (event) => {
    if (event.key !== 'Enter') {
      return
    }

    if (value.trim()) {
      console.log('Making requerst')
    } else {
      show('Type Username')
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
