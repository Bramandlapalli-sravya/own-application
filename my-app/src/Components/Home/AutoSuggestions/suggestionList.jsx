const SuggessionList = ({
  suggestions,
  onSuggestionClick,
  highlight,
  dataKey,
}) => {
  const handleClick = (e) => {};

  const getHighlight = (text, highlight) => {
    // Split the text into parts based on the highlight word
    let parts = text.split(new RegExp(`(${highlight})`, "gi"));

    return (
      <span>
        {parts.map((part, index) =>
          part.toUpperCase() === highlight.toUpperCase() ? ( // Case-insensitive match making it to check for both to make a same case match
            // Highlight the matching part
            <span style={{ fontWeight: "bolder" }} key={index}>
              {part}
            </span>
          ) : (
            // Non-matching part stays normal
            <span key={index}>{part}</span>
          )
        )}
      </span>
    );
  };

  return (
    <div>
      {suggestions.map((suggestion) => {
        const currentkey = dataKey ? suggestion[dataKey] : suggestion;
        return (
          <div id={suggestion.id} onClick={() => onSuggestionClick(suggestion)}>
            {getHighlight(currentkey, highlight)}
          </div>
        );
      })}
    </div>
  );
};

export default SuggessionList;
