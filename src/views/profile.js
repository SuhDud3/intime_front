import '../scss/profile.scss'
import Sidebar from './components/sidebar'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

function Profile() {

    const [user, setUser] = useState({})

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if(!location.state) {
            alert('Vous devez être connecté pour accéder à cette page')
            navigate('/')
        } else {
            fetchUser()
        }
    }, [])


    const fetchUser = async () => {
        const data = await fetch('http://localhost:5000/user/' + location.state.user.userID)
        const user = await data.json()
        setUser(user)
    }


    const modifyProfile = async (e) => {
        e.preventDefault()
        const firstname = document.querySelector('.firstname').value
        const lastname = document.querySelector('.lastname').value
        const username = document.querySelector('.username').value
        const email = document.querySelector('.email').value
        const paidByHour = document.querySelector('.paidByHour').value

        fetch('http://localhost:5000/user/update/' + user.userID, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id : user.userID,
                firstname: firstname,
                lastname: lastname,
                username: username,
                email: email,
                paidByHour: paidByHour
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === 200) {
                fetchUser()
            } else {
                alert(data.message)
            }
        })
    }

    return (
        <div>
            <Sidebar 
                user = { user }
            />
            <div className="main" id="body-profile">
                <div className="box-profile">
                    <h2>Informations personnelles</h2>
                    <div className="info">
                        <p>Prénom: <span>{user.firstname}</span></p> 
                        <p>Nom: <span>{user.lastname}</span></p>
                        <p>Username: <span>{user.username}</span></p>
                        <p>Email: <span>{user.email}</span></p>
                        <p>Taux horaire: <span>{user.paidByHour}</span></p>
                    </div>
                </div>
                <div className="box-profile">
                    <h2>Modifier mes informations</h2>
                    <form className="box-profile-form" onSubmit={modifyProfile}>
                        <input type="text" name="firstname" placeholder="Prénom" className="firstname" />
                        <input type="text" name="lastname" placeholder="Nom" className="lastname" />
                        <input type="text" name="username" placeholder="Username" className="username" />
                        <input type="email" name="email" placeholder="Email" className="email" />
                        <input type='double' name='paidByHour' placeholder='Taux horaire' className='paidByHour' />
                        <div className="button-modify-profile">
                            <button type="submit" id="modify-profile">Modifier</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile;