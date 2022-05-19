import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(true);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (response.status >= 200 && response.status <= 299) {
        const tours = await response.json();
        setLoading(false);
        setTours(tours);
      } else {
        setLoading(false);
        setIsError(true);
        console.log(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (isError) {
    return <h1 className="loading">Error loading page...</h1>;
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchData()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return <Tours tours={tours} removeTour={removeTour} />;
}

export default App;
