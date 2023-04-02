import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Router from "../routes/Router";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const emptySearch = () => {
    setResults([]);
    setQuery("");
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
    console.log("event.target.value.length", event.target.value.length);
    if (event.target.value.length === 0) {
      setResults([]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://api.noroff.dev/api/v1/online-shop"
      );
      setResults(
        data.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    };
    fetchData();
  }, [query]);

  return (
    <>
      <div>
        <div className="relative md:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full pr-3 py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search..."
            value={query}
            onChange={handleChange}
          />
        </div>

        {query.length > 0 &&
          results.map((item) => (
            <ul
              className="border rounded-md border-gray-400 mx-auto p-2 m-2"
              key={item.id}
            >
              <Link to={`/products/${item.id}`} onClick={emptySearch}>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <img
                  className=" w-[80px]"
                  src={item.imageUrl}
                  alt={item.title}
                />
              </Link>
            </ul>
          ))}
      </div>
    </>
  );
}

export default Search;
