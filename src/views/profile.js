import '../scss/profile.scss'
import Sidebar from './components/sidebar'
import { useLocation } from 'react-router-dom'

function Profile() {
    const location = useLocation()

    return (
        <div>
            <Sidebar 
                user = {location.state.user}
            />
            <div className="main" id="body-profile">
                <div className="box-profile">
                    <h2>Informations personnelles</h2>
                    <div className="info">
                        <p>Prénom: {location.state.user.firstname}</p>
                        <p>Nom: {location.state.user.lastname}</p>
                        <p>Username: {location.state.user.username}</p>
                        <p>Email: {location.state.user.email}</p>
                    </div>
                </div>
                <div className="box-profile">
                    <h2>Modifier mes informations</h2>
                    <form className="box-profile-form">
                        <input type="text" name="firstname" placeholder="Prénom" className="firstname" />
                        <input type="text" name="lastname" placeholder="Nom" className="lastname" />
                        <input type="text" name="username" placeholder="Username" className="username" />
                        <input type="email" name="email" placeholder="Email" className="email" />
                        <div className="button_sign">
                            <button type="submit" id="sign-in">Modifier</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile;