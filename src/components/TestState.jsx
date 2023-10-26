import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TestState() {
    // count variable
    const [count, setCount] = useState(0);

    // the title var
    const [title, setTitle] = useState("Openheimer");

    // the movie titles var
    const [movieTitles, setMovieTitles] = useState([
        "Inception",
        "The Dark Knight",
        "Interstellar",
        "Openheimer",
        "The fault in our stars"
    ]);

    // the title index var
    const [titleIndex, setTitleIndex] = useState(0);

    // the city var
    const [cities, setCities] = useState([
        { id: 1, name: "Agadir" },
        { id: 2, name: "Marrakech" },
        { id: 3, name: "New York" },
        { id: 4, name: "Rabat" }
    ]);

    // the city index var
    const [cityIndex, setCityIndex] = useState(0);

    // input field value for new city
    const [newCity, setNewCity] = useState('');

    // the function to manipulate title

    function manipulateTitle() {
        // Set the title to the next movie title
        setTitle(movieTitles[titleIndex]);

        // Increment the titleIndex to point to the next title for the next click
        setTitleIndex((prevIndex) => (prevIndex + 1) % movieTitles.length);

        // Run the map function to traverse the table
        cities.map((city) => console.log(city.name));
    }




    // the function to manipulate city
    function manipulateCity() {
        setCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
    }

    function manipulateClick() {
        // Use the current value of count provided by the function argument
        setCount((prevCount) => prevCount + 1);
        console.log(count);
    }

    const handleDelete = (id) => {
        // create a copy of the cities array with the deleted element
        const cityCopy = [...cities];

        // remove the element with the given id from the copied array
        const cityModified = cityCopy.filter((city) => city.id !== id);

        // modify the state
        setCities(cityModified);
    };

    const handleAddCity = () => {
        // validate if the newCity is not empty
        if (newCity.trim() === '') {
            return;
        }

        // create a new city object
        const newCityObject = {
            id: cities.length + 1,
            name: newCity
        };

        // create a copy of the cities array and add the new city
        const cityCopy = [...cities, newCityObject];

        // modify the state to include the new city
        setCities(cityCopy);

        // clear the input field
        setNewCity('');
    };

    return (
        <div>
            <div>
                <h1 className="display-4 text-center mb-4">Title of the Movie: {title}</h1>
                {cities.length > 0 ? (
                    <>
                        <h2 className="text-muted text-center mb-4">City Where to watch the movie: {cities[cityIndex].name}</h2>
                        <button onClick={manipulateCity} className="btn btn-success mx-auto d-block">
                            Change the City
                        </button>
                    </>
                ) : (
                    <p className="text-success text-center"><b>No theaters present this film. </b></p>
                )}
                <br></br>
                <h1 className="display-4 text-center">Count: {count}</h1>
                <button onClick={manipulateClick} className="btn btn-primary mt-4 mx-auto d-block">
                    Increment
                </button>
                <br /><br />
                <button onClick={manipulateTitle} className="btn btn-secondary mx-auto d-block">
                    Change the title
                </button>
            </div>

            <br></br>

            <div className="text-center">
                <h3 className='mr-5'>Here we'll add the cities:</h3>
                {cities.length === 0 ? (
                    <p className="m-3 text-danger"><b>No cities available</b></p>) : (
                    <ul>
                        <b>
                            {cities.map((city) => (
                                <li key={city.id}>
                                    {city.name}
                                    <button onClick={() => handleDelete(city.id)} className="btn btn-sm bg-blue btn-hover-red">
                                        <b>&times;</b>
                                    </button>
                                </li>
                            ))}
                        </b>
                    </ul>
                )}
                {/* Input field and button to add a new city */}
                <h3>Add a city</h3>
                <div className="mt-3 d-flex justify-content-center align-items-center">
                    <input
                        type="text"
                        placeholder="Enter new city"
                        value={newCity}
                        onChange={(e) => setNewCity(e.target.value)}
                        className="form-control mr-2"
                    />
                    <button onClick={handleAddCity} className="btn btn-primary">
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TestState;
