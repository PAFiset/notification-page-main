import Navbar from '../../styles/Header.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';


const Header = () => {

    const [isMobileModal,setMobileModal] = useState(false);

    const clickHandler = () =>{
        setMobileModal(!isMobileModal);
    };

    return ( 
        <>
            <div className={Navbar.navbar} >
                <div className={Navbar.navcontent}>
                    <p>snap</p>
                    <a href="https://www.google.ca" target="_blank">Features</a>
                    <a href="https://www.google.ca" target="_blank">Compagny</a>
                    <a href="https://www.google.ca" target="_blank">Career</a>
                    <a href="https://www.google.ca" target="_blank">About</a>
                </div>
                <span onClick={clickHandler} >
                    <i className="fa fa-bars"></i>
                </span>
            </div> 
            <div className={isMobileModal ? Navbar.navbarmobile : Navbar.navbarmobileclosed} >
                <p>-- snap --</p>
                <a href="https://www.google.ca" target="_blank">Features</a>
                <a href="https://www.google.ca" target="_blank">Compagny</a>
                <a href="https://www.google.ca" target="_blank">Career</a>
                <a href="https://www.google.ca" target="_blank">About</a>
                <span onClick={clickHandler} >
                    <i className="fa-solid fa-x"></i>
                </span>
            </div> 
        </>
    );
}
 
export default Header;