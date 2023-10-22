

const Hero = () => {
    return (
      <div>
        <marquee
          scrollAmount="3"
          className="h-10 leading-10 bg-red-800 text-2xl font-bold text-white"
        >
          EXCLUSIVE SUPER-HERO!!!
        </marquee>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/06/07/the-amazing-spider-man-2012.jpeg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary hover:origin-bottom hover:-rotate-12 hover:scale-110">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;