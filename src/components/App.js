import React, { useState } from "react";
import "../styles/App.css";
import { movies } from "../utils/movieList";

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [results, setResult] = useState(null);

    function handleClick(e) {
			e.preventDefault();
			let finalResult = [];
			for(let movie of movies){
				if(movie.title.toLowerCase() == inputValue.toLowerCase()){
					/* push a object in the array 
						object properties -> id, title
					*/
					finalResult.push(movie.title)
				}
			}
			setResult(finalResult);
			setInputValue("")

		}

    function handleChange(e) {
			setInputValue(e.target.value)
		}

    return (
        <div id="main">
            <form id="form">
                <input
                    type="text"
                    onChange={handleChange}
                    value={inputValue}
                    id="movie-input"
                ></input>
                <button id="button" onClick={handleClick}>
                    Search
                </button>
            </form>
            <div id="result">
                {results &&
                    results.map((movie) => (
                        <div className="movie">{movie}</div>
                    ))}
            </div>
        </div>
    );
    // controlled components and uncontrolled components?
    /* 
			if the state is handled by react end to end that is called as controlled component											
    
    */
};

export default App;