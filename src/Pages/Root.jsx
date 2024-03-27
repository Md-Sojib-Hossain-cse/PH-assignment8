import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto font-work-sans">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;