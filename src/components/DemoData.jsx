

const DemoData = () => {
    return (
      <div className="container mx-auto">
        <div className="ml-24 mb-10 mt-10 md:ml-0 md:flex md:justify-between md:gap-3 md:flex-wrap">
          {/* superman */}
          <div className="card card-side bg-slate-950 p-4 md:p-10 shadow-xl md:w-[700px] hover:ring-offset-1 hover:ring-1 hover:shadow-lg hover:shadow-cyan-950 hover:origin-top-right hover:rotate-12 duration-300 ">
            <figure className="md:w-60">
              <img
                src="https://tablet-mag-images.b-cdn.net/production/864cce9883347771fe12b998cf391df1a3598de3-1906x2550.jpg?w=1300&q=70&auto=format&dpr=1"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Super-Man</h2>
              <p>
                Superman is a superhero who appears in American comic books
                published by DC Comics. The character was created by writer
                Jerry Siegel and artist Joe Shuster, and debuted in the comic
                book Action Comics #1.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>

          {/* batman  */}

          <div className="card card-side bg-slate-950 p-4 md:p-10 shadow-xl md:w-[700px] hover:ring-offset-1 hover:ring-1 hover:shadow-lg hover:shadow-cyan-950 hover:origin-top-right hover:rotate-12 duration-300 ">
            <figure className="md:w-60">
              <img
                src="https://tooys.mx/media/catalog/product/cache/39c7ff5a74bd9fa282a021db605b774d/b/a/batman-collector-dc-comics-por-hot-toys-00.jpg"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Batman</h2>
              <p>
                Batman, a masked vigilante from Gotham City, fights against evil
                to keep its citizens safe. He must battle Jack Napier, who turns
                into the Joker and threatens to take over Gotham City.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>

          {/* AntMan */}

          <div className="card card-side bg-slate-950 p-4 md:p-10 shadow-xl md:w-[700px] hover:ring-offset-1 hover:ring-1 hover:shadow-lg hover:shadow-cyan-950 hover:origin-top-right hover:rotate-12 duration-300 ">
            <figure className="md:w-60">
              <img
                src="https://progameguides.com/wp-content/uploads/2021/03/fortnite-outfit-Ant-Man.jpg?fit=875%2C915"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Ant-Man</h2>
              <p>
                Ant-Man is a 2015 American superhero film based on the Marvel
                Comics characters of the same name: Scott Lang and Hank Pym.
                Produced by Marvel Studios and distributed by Walt Disney
                Studios Motion Pictures, it is the 12th film in the Marvel
                Cinematic Universe (MCU).
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>

          {/* Hulk */}

          <div className="card card-side bg-slate-950 p-4 md:p-10 shadow-xl md:w-[700px] hover:ring-offset-1 hover:ring-1 hover:shadow-lg hover:shadow-cyan-950 hover:origin-top-right hover:rotate-12 duration-300 ">
            <figure className="md:w-60">
              <img
                src="https://i.pinimg.com/1200x/d7/34/e9/d734e9b0d84885e1b97eda13bfe4ded5.jpg"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Hulk</h2>
              <p>
                The Hulk is a superhero appearing in American comic books
                published by Marvel Comics. Created by writer Stan Lee and
                artist Jack Kirby, the character first appeared in the debut
                issue of The Incredible Hulk.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DemoData;