import '../scss/connexion.scss';
import HeaderHome from './components/header-home';
import FooterHome from './components/footer-home';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import sha256 from 'crypto-js/sha256';

function Login() {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [openValidation, setOpenValidation] = useState(false);

    const displayAlertError = () => {
        setOpen(true);
    };

    const displayAlertValidation = () => {
        setOpenValidation(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleCloseValidation = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenValidation(false);
    };


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

    const urlServer = 'https://intime-back.onrender.com/auth/login';
    const urlLocal = 'http://localhost:5000/auth/login';
   
    const handleSubmit = async (e) => {
        displayAlertValidation();
        e.preventDefault();
        const response = await fetch(urlLocal, {
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
            handleCloseValidation();
            displayAlertError();
        }
    }

    return (
        <div>
        <Snackbar id='snackbar_error_login' open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}> Email ou mot de passe incorrect </Alert>
        </Snackbar>
        <Snackbar id='snackbar_validation_login' open={openValidation} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert onClose={handleCloseValidation} severity="info" sx={{ width: '100%' }}> Chargement... </Alert>
        </Snackbar>
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
    
            </div> 
        </form>
        <FooterHome />
        </div>
    );
}

export default Login;