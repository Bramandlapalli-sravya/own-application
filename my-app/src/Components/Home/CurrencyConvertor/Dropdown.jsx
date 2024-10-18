import { HiOutlineStar } from "react-icons/hi2";

export const Dropdown = ({
  currencies,
  currency,
  setCurrency,
  favorites,
  handlefavorite = () => {},
  title = "",
  className = "",
}) => {
  console.log(favorites, "favorites");
  return (
    <div className={`mt-2 ${className}`}>
      <label htmlFor={title}> {title}:</label>
      <div className="relative">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
        >
          {favorites.map((favorite) => {
            return <option key={favorite}>{favorite}</option>;
          })}
          <hr />
          {currencies
            .filter((fav) => !favorites.includes(fav))
            .map((currency) => {
              return (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              );
            })}
        </select>
        <button
          className="absolute inset-y-0 right-0 pr-5 flex items-center"
          onClick={() => handlefavorite(currency)}
        >
          <HiOutlineStar />
        </button>
        {/* {favorites} */}
      </div>
    </div>
  );
};
