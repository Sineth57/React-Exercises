import Logo from "./Logo";
import "./NavBar.css";
import NavButton from "./NavButton";
import NavLinks from "./NavLinks";

function NavBar(){
    return( 
        <div className="navbar">
           <div className="logo-navlinks">
           <Logo />
            <NavLinks />
            
           </div>
            <NavButton />
        </div>    
    );
}

export default NavBar;