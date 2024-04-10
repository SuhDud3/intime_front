import '../scss/inscription.scss';
import HeaderHome from './components/header-home';
import FooterHome from './components/footer-home';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import sha256 from 'crypto-js/sha256';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [open, setOpen] = useState(false);
    const [openValidation, setOpenValidation] = useState(false);

    const navigate = useNavigate();

    const displayAlertError = () => {
        setOpen(true);
    }

    const displayAlertValidation = () => {
        setOpenValidation(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    const handleCloseValidation = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenValidation(false);
    }

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
        if (values.password.length < 3) {
            return false;
        } else {
            return true;
        }
    }

    function verifyEmail (){
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (regex.test(values.email)) {
            return true;
        } else {
            return false;
        }
    }

    // function verifyCluf (){
    //     if (document.getElementById('cluf').checked) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    const handleSubmit = async (e) => {
        displayAlertValidation();
        e.preventDefault();
        if (verifySamePassword() && verifyQualityPassword() && verifyEmail()) {
            const response_register = await fetch('http://localhost:5000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            const data = await response_register.json();
            if(response_register.status === 201){
                fetchUser();
            } else {
                console.log('error 1');
                handleCloseValidation();
                displayAlertError();
            }
        } else {
            console.log('error 2');
            handleCloseValidation();
            displayAlertError();
        }
    }

    const urlServer = 'https://intime-back.onrender.com/auth/login';
    const urlLocal = 'http://localhost:5000/auth/login';

    const fetchUser = async () => {
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
            console.log('error');
        }
    }


    return (
        <div>
        <HeaderHome />
        <Snackbar id='snackbar_error_login' open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}> Erreur dans le formulaire </Alert>
        </Snackbar>
        <Snackbar id='snackbar_validation_login' open={openValidation} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert onClose={handleCloseValidation} severity="info" sx={{ width: '100%' }}> Chargement... </Alert>
        </Snackbar>
        <form onSubmit={handleSubmit}>
            <div className="box" id='box-register'>
                <h1>Inscription</h1>
        
                <input type="email" name="email" placeholder='email' className="email" onChange={handleChange}/>
                
                <input type="text" name="username" placeholder='username' className="username" onChange={handleChange}/>
        
                <input type="password" name="password" placeholder='password' className="password" onChange={handleChange}/>
        
                <input type="password" name="password2" placeholder='password' className="password2" onChange={handleChange}/>
        
                <div className="cluf">
                    <input type="checkbox" name="cluf" id="cluf" value="cluf"/>
                    <p>J'accepte les <a id="rgpd" href="/conditions-utilisation">conditions d'utilisation</a>.</p>
                </div>
                
                <div className="button_sign">
                    <button type="submit" id="sign-up">S'inscrire</button> 
                </div>
        
                <p id="already_account">Déjà un compte ? <a href="/login" id="sign-in-link">Se connecter</a></p>
            
            </div> 
        
        </form>
        <FooterHome />
        </div>
    );
}

export default Register;
