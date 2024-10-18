import React, { useEffect, useState, useCallback } from "react";
import SuggestionList from "./suggestionList.jsx";
import debounce from "lodash/debounce";

export const AutoComplete = ({
  placeholder,
  fetchSuggestions,
  dataKey,
  customLoading,
  // staticData,
  onSelect,
  onBlur,
  onFocus,
  onChange,
  customStyles,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  const getSuggestions = async () => {
    setError(null);
    setLoading(true);
    try {
      let result = await fetchSuggestions(inputValue);

      setSuggestions(result);
    } catch (error) {
      setError(error);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };
  const getSuggestionDebounced = useCallback(
    debounce(getSuggestions, 3000),
    []
  );

  useEffect(() => {
    return () => {
      getSuggestionDebounced.cancel(); // Cleanup on unmount
    };
  }, [getSuggestionDebounced]);

  console.log("suggestions", suggestions);

  useEffect(() => {
    if (inputValue) {
      getSuggestionDebounced(inputValue);
    }
  }, [inputValue]);

  const handleSuggestionClick = (suggestion) => {
    setInputValue(dataKey ? suggestion[dataKey] : suggestion);
    onSelect(suggestion);
    setSuggestions([]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={onFocus}
        onBlur={onBlur}
        style={customStyles}
      />
      {/* {suggestions.length > 0 && ( */}
      <ul>
        {loading && customLoading}
        {error && <div>{error}</div>}
        <SuggestionList
          suggestions={suggestions}
          dataKey={dataKey}
          highlight={inputValue}
          onSuggestionClick={handleSuggestionClick}
        />
      </ul>
      <div onClick={() => console.log("first parent")}>
        First Parent
        <div onClick={() => console.log("secound parent")}>
          Secound Parent
          <div onClick={() => console.log("third parent")}>Third Parent</div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};
