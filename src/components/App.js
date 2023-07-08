// create your App component here
import React, { useState, useEffect } from "react";
// import { server } from "../mocks/server.js";
// import { worker } from "../mocks/worker.js";

function App() {
  const [dogImg, setDogImg] = useState(
    "https://images.dog.ceo/breeds/bulldog-english/mami.jpg"
  );
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setDogImg(data.message);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }

    //  await fetch("https://dog.ceo/api/breeds/image/random")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setDogImg(data.message)
    //     });
  }
  if (!isLoaded) return <p>Loading...</p>;
  return <img src={dogImg} alt="A Random Dog" />;
}

export default App;
