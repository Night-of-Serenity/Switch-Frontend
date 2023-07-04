import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const Search = ({ user }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    console.log(searchQuery);
    const performSearch = () => {
        const filteredResults = items.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setSearchResults(filteredResults);
    };

    return (
        <div className=" pt-2 pr-2 pl-2">
            <input
                className="rounded-lg w-5/6"
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder="Search..."
            />
            <button onClick={performSearch}>
                <HiMagnifyingGlass className="w-8 h-8 pt-2 " />
            </button>

            <ul>
                {searchResults.map((result) => (
                    <li key={result.id}>{result.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
