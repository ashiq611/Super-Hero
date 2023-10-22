import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Datails from "../components/Datails";

const DetailsPage = () => {
  const [data, setData] = useState();

  const id = useParams();

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/characters/${id.id}?ts=1&apikey=7943881fc541cf7d3e9404918d8f5955&hash=7644c2f4990e51e4d36c43a48bc722d0`
    )
      .then((response) => response.json())
      .then((json) => setData(json?.data.results));
  }, []);

  console.log(id, data);
  return (
    <div className="container mx-auto">
     

      <div className="mockup-window border border-base-300">
        <div className=" flex justify-center px-4 py-16 border-t border-base-300">
          {/* card */}
          {data?.map((item) => (
            <Datails data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
