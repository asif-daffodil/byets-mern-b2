import { Helmet } from "react-helmet";
import Hero from "../Components/Hero";
import Prising from "../Components/Prising";
import Products from "../Components/Products";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Welcome to our website" />
            </Helmet>
            <Hero />
            <Products />
            <Prising />
        </div>
    );
};

export default Home;