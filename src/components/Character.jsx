

const Character = ({data}) => {
    const { name, description, thumbnail} = data;
    return (
      <div>
        <div className="card card-side bg-slate-950 p-4 md:p-10 shadow-xl md:w-[700px] hover:ring-offset-1 hover:ring-1 hover:shadow-lg hover:shadow-cyan-950 hover:origin-top-right hover:rotate-12 duration-300 ">
          <figure className="md:w-60">
            <img
              src={`${thumbnail?.path}.${thumbnail?.extension}`}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Character;