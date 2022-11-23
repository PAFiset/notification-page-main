import Navbar from '../styles/Header.module.scss';
import { useState , useEffect } from 'react';
import Link from 'next/link';


const Header = () => {

  const [isMobileModal,setMobileModal] = useState(false);

  const getWindowDimension = () =>{
    const width = window.innerWidth;
    return width;
  };

  const clickHandler = () => {
    setMobileModal(!isMobileModal);
  };

  useEffect(() => {
    const links = document.querySelectorAll(".links");
    console.log(` render +  ${links}`);
    
    function handleResize() {
      getWindowDimension() < 700 ? "" : setMobileModal(false);
    }

    window.addEventListener('resize', handleResize);

    links.forEach((link) => {
      link.addEventListener("click",function () {

        console.log(` render +  ${links}`);

        setMobileModal(false)
      });
    });

    return() => {
      window.removeEventListener("resize",handleResize);
    }

  }, []);


  return ( 
    <div className={Navbar.navigation} >    
      <nav className={Navbar.navbar} >
          <Link href="/"><a className="links" >snap</a></Link>
          <div className={isMobileModal ? Navbar.navcontent : Navbar.navcontent + " " + Navbar.navbarmobileclosed}>
              <Link href="/usagers"><a className="links">Usager</a></Link>
              <Link href="/createur"><a className="links">Créateur</a></Link>
              <Link href="/projets"><a className="links">Projets</a></Link>
              <Link href="/about"><a className="links">About</a></Link>
              <div className={Navbar.registration_section} >
                <Link href="/"><a className="links">Login</a></Link>
                <Link href="/"><a className={Navbar.register + " links" }>Register</a></Link>
              </div>
          </div>
      </nav> 
      <button className={ isMobileModal ? Navbar.navicon_open + " " + Navbar.navicon : Navbar.navicon} onClick={clickHandler} >
          <span></span>
          <span></span>
          <span></span>
      </button>
    </div>
  );
}
 
export default Header;