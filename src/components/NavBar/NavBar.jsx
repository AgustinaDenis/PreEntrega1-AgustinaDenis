import CartWidget from "./CartWidget"
import logoM from "../../assets/logomagnetic.png";
import "./navbar.css"



const NavBar = () => {
    return(
        
     <div>
        <nav className="navbar navbar-expand-lg bg-body- fondo">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> <img src={logoM} alt="logo" style={{width:"200px"}}  /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse menu" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="#">Albums</a>
              <a className="nav-link" href="#">Photocards</a>
              <a className="nav-link" href="#">Lighsticks</a>
            </div>
          </div>
          <CartWidget />
        </div>
      </nav>
      </div>

    )

}

export default NavBar