import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <div className="text-[#131313CC] text-lg flex flex-col lg:flex-row items-center lg:gap-4">
        <li><NavLink to='/' className={({isActive}) => isActive ? "text-lg text-[#23BE0A] font-semibold px-4 py-3 border border-[#23BE0A] rounded-lg" : "text-[#131313CC] text-lg px-4 py-3"}>Home</NavLink></li>
        <li><NavLink to='/listed-books' className={({isActive}) => isActive ? "text-lg text-[#23BE0A] font-semibold px-4 py-3 border border-[#23BE0A] rounded-lg" : "text-[#131313CC] text-lg px-4 py-3"}>Listed Books</NavLink></li>        
        <li><NavLink to='/pages-to-read' className={({isActive}) => isActive ? "text-lg text-[#23BE0A] font-semibold px-4 py-3 border border-[#23BE0A] rounded-lg" : "text-[#131313CC] text-lg px-4 py-3"}>Pages to Read</NavLink></li>
    </div>

    return (
        <div className="navbar mt-8 xl:mt-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="text-[#131313] text-3xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4 text-lg font-semibold">
                <a className="btn text-white bg-[#23BE0A] rounded-lg">Sign Up</a>
                <a className="btn text-white bg-[#59C6D2] rounded-lg">Sign In</a>
            </div>
        </div>
    );
};

export default Header;