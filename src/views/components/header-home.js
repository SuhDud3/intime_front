import '../../scss/header-home.scss';
import logo from '../../images/InTime_logo.png';    


function HeaderHome() {
    return (
        <div className="header-home">
            <a href="/"><img id="logo_inTime" src={logo} alt="logo" className="logo"/></a>
            <div className="button-home">
                <a href="/login" className="btn-header-connect">Se connecter</a>
                <a href="/register" className="btn-header-register">S'inscrire</a> 
            </div>
        </div>
    );
}

export default HeaderHome;