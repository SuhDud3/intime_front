import '../../scss/header.scss';
import logo from '../../images/InTime_logo.png';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/auth/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        navigate('/');
        
    }

    return (
        <div className="header-home">
            <img id="logo_inTime" src={logo} alt="logo" className="logo"/>
            <button onClick={handleSubmit} id="logout">Se déconnecter</button>
        </div>
    );
}

export default Header;