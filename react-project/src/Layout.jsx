import { Outlet } from "react-router";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;