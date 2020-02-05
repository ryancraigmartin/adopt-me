import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const Dropdown = () =>  (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={({target: value}) => setState(value)}
        onBlur={({target: value}) => setState(value)}s
        disabled={options.length === 0}
      >
      <option>All</option>
      {options.map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
      </select>
    </label>
  );
  return [state, Dropdown, setState]
};

export default useDropdown;
