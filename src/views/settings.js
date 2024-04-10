import '../scss/settings.scss'
import Sidebar from './components/sidebar'
import { useLocation, useNavigate } from 'react-router-dom'

function Settings() {
    const location = useLocation()

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
        <div>
            <Sidebar 
                user = {location.state.user}
            />
            <div className="main" id="body-settings">
                <h1>Settings</h1>
                <button onClick={handleSubmit} className='btn-header-disconnect' id="settings_disconnect">
                        Déconnexion
                    </button>
            </div>
        </div>
    )
}

export default Settings;