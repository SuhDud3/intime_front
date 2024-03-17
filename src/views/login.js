import '../scss/connexion.scss';
import HeaderHome from './components/header-home';
import FooterHome from './components/footer-home';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import sha256 from 'crypto-js/sha256';

function Login() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: '',  
        password: ''
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://intime-back.onrender.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        const data = await response.json();
        if(response.status === 200){
            let user = data.user;
            navigate('/dashboard', { state: { user } });
        } else {
            alert(data.message);
        }
    }

    return (
        <div>
        <HeaderHome />
        <form onSubmit={handleSubmit}>
            <div className="box">
                <h1>Connexion</h1>
    
                <input type="email" name="email" placeholder='email' className="email" onChange={handleChange}/>
                
                <input type="password" name="password" placeholder='password' className="password" onChange={handleChange}/>
                
                <a href="/mot-de-passe-oublie" id="forgotten_password">Mot de passe oublié ?</a>
    
                <div className="button_sign">
                    <button type="submit" id="sign-in">Se connecter</button>
                </div>
    
                <p id="no_account">Pas de compte ? <a href="/register" id="register-link">S'inscrire</a></p>
    
            </div> {/* End Box */}
        
        </form>
        <FooterHome />
        </div>
    );
}

export default Login;