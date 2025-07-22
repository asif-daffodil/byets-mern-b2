import { Helmet } from "react-helmet";
import Prising from "../Components/Prising";
import Team from "../Components/Team";
import Testimonial from "../Components/Testimonial";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About Us</title>
                <meta name="description" content="Learn more about our company" />
            </Helmet>
            <Team />
            <Prising />
            <Testimonial />
        </div>
    );
};

export default About;