import Characters from "../components/Characters";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import DemoData from '../components/DemoData';


const Home = () => {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <Characters/>
            <DemoData/>
        </div>
    );
};

export default Home;