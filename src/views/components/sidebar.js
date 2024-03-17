import '../../scss/sidebar.scss';
import logo_only from '../../images/InTime_only_logo.png';
import { useNavigate } from 'react-router-dom';

function Sidebar( {user} ) {
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

    const changePage = (page) => {
        return () => {
            navigate(page, { state: { user } });
        }
    }


    return (
        <div id='sidebar'>
            <div id='logo'>
                <img id="logo_inTime" src={logo_only} alt="logo" className="logo"/>
            </div>
            <div id='menu'>
                <ul>
                    <li><button onClick={changePage('/dashboard')}>Dashboard</button></li>
                    <li><button onClick={changePage('/analysis')}>Analysis</button></li>
                    {/* <li>Categories</li>
                    <li>Profile</li> */}
                </ul>
            </div>
            <div id='logout'>
                <button onClick={handleSubmit} id="logout">Se déconnecter</button>
            </div> 
        </div>
    );
}

export default Sidebar;