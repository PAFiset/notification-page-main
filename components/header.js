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
        setMobileModal(false)
      });
    });

    return() => {
      window.removeEventListener("resize",handleResize);
    }

  }, []);


  return ( 
    <header className="header" >    
      <nav className="navbar" >
          <Link href="/"><a className="home_link" >snap</a></Link>
          <div className={isMobileModal ? "navcontent" : "navcontent" + " " + "navbarmobileclosed"}>
              <Link href="/usagers"><a >Usager</a></Link>
              <Link href="/createur"><a >Créateur</a></Link>
              <Link href="/projets"><a >Projets</a></Link>
              <Link href="/about"><a >About</a></Link>
              <div className={"registration_section"} >
                <Link href="/"><a >Login</a></Link>
                <Link href="/"><a className="register">Register</a></Link>
              </div>
          </div>
      </nav> 
      <button className={ isMobileModal ? "navicon_open" + " " + "navicon" : "navicon"} onClick={clickHandler} >
          <span></span>
          <span></span>
          <span></span>
      </button>
    </header>
  );
}
 
export default Header;