import logo from '../images/InTime_logo.png';
import Header from '../views/components/header.js';

function Welcome() {
    return (
        <div>
        <Header />
        <div id="body-welcome">
            <h1>Bienvenue sur InTime</h1>
            <p>Votre application de gestion de budget</p>
    
            <p>L'application est encore en cours de construction, soyez indulgents !</p>
    
            <img src={logo} alt="logo" className="logo" />
    
            <a href="/" class="btn-header">Continuer</a>
        </div>
        </div>
    );
}

export default Welcome;