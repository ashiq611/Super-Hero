import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Character from "./Character";


const Characters = () => {
    const [url, setUrl] = useState(
      "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=7943881fc541cf7d3e9404918d8f5955&hash=7644c2f4990e51e4d36c43a48bc722d0"
    );

    const [data, setData] = useState();

    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((json) => setData(json?.data.results));
    },[])
    // console.log(data)
    return (
      <div className="container mx-auto">
        <div className="ml-24 mb-10 mt-10 md:ml-0 md:flex md:justify-between md:gap-3 md:flex-wrap">
          {data?.map((char) => (
            <Character data={char} />
          ))}
        </div>
      </div>
    );
};

export default Characters;