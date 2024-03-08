import "../../scss/footer-home.scss";
import logo from '../../images/InTime_logo.png';

function FooterHome() {
    return (
        <div className="footer-home">
            <div className="container-footer">
                <img id="logo_inTime" src={logo} alt="logo" className="logo"/>
                <div className="us">
                    <h3>Nous</h3>
                    <ul>
                        <li><a href="/about">En savoir plus</a></li>
                    </ul>
                </div>
                <div className="other">
                    <h3>Autres</h3>
                    <ul>
                        <li><a href="/mentions-legales">Mentions légales</a></li>
                        <li><a href="/conditions-utilisation">Conditions d'utilisation</a></li>
                        <li><a href="/support">Support</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FooterHome;   