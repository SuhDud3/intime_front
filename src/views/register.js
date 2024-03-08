import '../scss/inscription.scss';
import HeaderHome from './components/header-home';
import FooterHome from './components/footer-home';
import { useState } from 'react';
import sha256 from 'crypto-js/sha256';

function Register() {
    const [values, setValues] = useState({
        email: '',
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    function verifySamePassword (){
        if (values.password !== values.password2) {
            return false;
        } else {
            return true;
        }
    }

    function verifyQualityPassword (){
        if (values.password.length < 8) {
            return false;
        } else {
            return true;
        }
    }

    // Write a function that verify an email with regex
    function verifyEmail (){
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (regex.test(values.email)) {
            return true;
        } else {
            return false;
        }
    }

    function verifyCluf (){
        if (document.getElementById('cluf').checked) {
            return true;
        } else {
            return false;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (verifySamePassword() && verifyQualityPassword() && verifyEmail() && verifyCluf()) {
            console.log(values);
            const response = await fetch('http://localhost:5000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            const data = await response.json();
            console.log(data);
        // } else {
        //     console.log("Erreur dans le formulaire");
        // }
    }

    return (
        <div>
        <HeaderHome />
        <form onSubmit={handleSubmit}>
            <div className="box">
            <h1>Inscription</h1>
    
            <input type="email" name="email" placeholder='email' className="email" onChange={handleChange}/>
            
            <input type="text" name="username" placeholder='username' className="username" onChange={handleChange}/>
    
            <input type="password" name="password" placeholder='password' className="password" onChange={handleChange}/>
    
            <input type="password" name="password2" placeholder='password' className="password2" onChange={handleChange}/>
    
            <div className="cluf">
                <input type="checkbox" name="cluf" id="cluf" value="cluf" />
                <label for="cluf">J'accepte les <a id="rgpd" href="/conditions-utilisation">conditions d'utilisation</a>.</label>
            </div>
            
            <div className="button_sign">
                <button type="submit" id="sign-up">S'inscrire</button> 
            </div>
    
            <p id="already_account">Déjà un compte ? <a href="/login" id="sign-in-link">Se connecter</a></p>
            
            </div> {/* End Box */}
        
        </form>
        <FooterHome />
        </div>
    );
}

export default Register;
