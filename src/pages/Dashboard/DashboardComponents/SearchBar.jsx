import React, { useState, useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";

const SearchBar = ({ search, setSearch }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // Limpiar el foco al hacer clic fuera (opcional, para un comportamiento más limpio)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef]);

  return (
    <div className="search-bar-container">
      <div className={`search-input-wrapper ${isFocused ? 'focused' : ''}`}>
        <BsSearch className="search-icon" />
        <input
          ref={inputRef}
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Buscar productos..."
          className="search-input"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default SearchBar;