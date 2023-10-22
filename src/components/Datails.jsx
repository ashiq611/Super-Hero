import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Datails = ({data}) => {

    const [tseries, settSeries] = useState();
    const [tcomics, settComics] = useState();
    const [tstories, settStories] = useState();


    const navigate = useNavigate()
    const {id, name, description, thumbnail, comics,series, stories} = data;


    // series
    useEffect(() => {
      fetch(
        `http://gateway.marvel.com/v1/public/characters/${id}/series?ts=1&apikey=7943881fc541cf7d3e9404918d8f5955&hash=7644c2f4990e51e4d36c43a48bc722d0`
      )
        .then((response) => response.json())
        .then((json) => settSeries(json?.data.results));
    }, [id]);


    // comics
    useEffect(() => {
      fetch(
        `http://gateway.marvel.com/v1/public/characters/${id}/comics?ts=1&apikey=7943881fc541cf7d3e9404918d8f5955&hash=7644c2f4990e51e4d36c43a48bc722d0`
      )
        .then((response) => response.json())
        .then((json) => settComics(json?.data.results));
    }, [id]);


    // stories
    useEffect(() => {
      fetch(
        `http://gateway.marvel.com/v1/public/characters/${id}/stories?ts=1&apikey=7943881fc541cf7d3e9404918d8f5955&hash=7644c2f4990e51e4d36c43a48bc722d0`
      )
        .then((response) => response.json())
        .then((json) => settStories(json?.data.results));
    }, [id]);
      

   


   


    return (
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div>
              Comics
              <div className="badge badge-secondary">{comics.available}</div>
            </div>
            <div>
              Series
              <div className="badge badge-secondary">{series.available}</div>
            </div>
            <div>
              Stories
              <div className="badge badge-secondary">{stories.available}</div>
            </div>
            <div className="card-actions justify-end">
              <button onClick={() => navigate(-1)} className="btn btn-primary">
                Back
              </button>
            </div>
          </div>
        </div>

        {/* series */}
        <h2 className="mt-10 text-4xl font-bold">Series</h2>
        <div className="mt-10 flex justify-between gap-5 flex-wrap">
          {tseries?.map((url, i) => (
            <div
              key={url.id}
              className="mockup-code bg-primary text-primary-content hover:ring-offset-1 hover:ring-1 hover:shadow-lg hover:shadow-cyan-950 hover:origin-top-right hover:rotate-12  duration-300"
            >
              <pre>
                <code>{url.title}</code>
              </pre>
            </div>
          ))}
        </div>

        {/* comics */}
        <h2 className="mt-10 text-4xl font-bold">Comics</h2>
        <div className="mt-10 flex justify-between gap-5 flex-wrap">
          {tcomics?.map((url, i) => (
            <div
              key={url.id}
              className="mockup-code bg-primary text-primary-content hover:ring-offset-1 hover:ring-1 hover:shadow-lg hover:shadow-cyan-950 hover:origin-top-right hover:rotate-12 duration-300"
            >
              <pre>
                <code>{url.title}</code>
              </pre>
            </div>
          ))}
        </div>

        {/* stroies */}
        <h2 className="mt-10 text-4xl font-bold">Stories</h2>
        <div className="mt-10 flex justify-between gap-5 flex-wrap">
          {tstories?.map((url, i) => (
            <div
              key={url.id}
              className="mockup-code bg-primary text-primary-content hover:ring-offset-1 hover:ring-1 hover:shadow-lg hover:shadow-cyan-950 hover:origin-top-right hover:rotate-12 duration-300"
            >
              <pre>
                <code>{url.title}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Datails;