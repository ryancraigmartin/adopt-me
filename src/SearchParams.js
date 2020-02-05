import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
// import useDropdown from "./useDropdown"

const SearchParams = () => {
  const [location, setLocation] = useState("Miami, FL");
  const [animal, setAnimal] = useState("Dog");
  const [breed, setBreed] = useState("");
  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={({ target: { value } }) => setLocation(value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            value={animal}
            id="animal"
            onChange={({ target: { value } }) => setAnimal(value)}
            onBlur={({ target: { value } }) => setAnimal(value)}
          >
            <option>All</option>
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        {/* <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={({ target: { value } }) => setBreed(value)}
            onBlur={({ target: { value } }) => setBreed(value)}
            disabled={!breeds.length}
          >
            <option>All</option>
            {breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label> */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
