import Characters from "../components/Characters";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";


const Home = () => {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <Characters/>
        </div>
    );
};

export default Home;