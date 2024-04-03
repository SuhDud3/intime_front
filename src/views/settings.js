import '../scss/settings.scss'
import Sidebar from './components/sidebar'
import { useLocation } from 'react-router-dom'

function Settings() {
    const location = useLocation()

    return (
        <div>
            <Sidebar 
                user = {location.state.user}
            />
            <div className="main" id="body-settings">
                <h1>Settings</h1>
                <div id="settings-info">
                    <p>Username: {location.state.user.username}</p>
                    <p>Email: {location.state.user.email}</p>
                    <p>First Name: {location.state.user.firstName}</p>
                    <p>Last Name: {location.state.user.lastName}</p>
                </div>
            </div>
        </div>
    )
}

export default Settings;