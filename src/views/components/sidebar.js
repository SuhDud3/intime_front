import '../../scss/sidebar.scss';
import logo_only from '../../images/InTime_only_logo.png';
import logo_settings from '../../images/settings.png';
import logo_profile from '../../images/person.png';
import logo_dashboard from '../../images/dataset.png';
import logo_expenses from '../../images/account_balance.png';
import logo_analysis from '../../images/monitoring.png';
import logo_logout from '../../images/logout.png';
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
        <nav id='sidebar'>
            <div id='logo'>
                <img id="logo_inTime" src={logo_only} alt="logo" className="logo"/>
            </div>
            <div id='menu'>
                <ul>
                    <li><button onClick={changePage('/dashboard')}>
                        <img src={logo_dashboard} alt="logo_dashboard" className="logo"/>
                        Dashboard</button></li>
                    <li><button onClick={changePage('/expenses')}>
                        <img src={logo_expenses} alt="logo_expenses" className="logo"/>
                        Expenses</button></li>
                    <li><button onClick={changePage('/incomes')}>
                        <img src={logo_expenses} alt="logo_expenses" className="logo"/>
                        Incomes</button></li>
                    <li><button onClick={changePage('/analysis')}>
                        <img src={logo_analysis} alt="logo_analysis" className="logo"/>
                        Analysis</button></li>
                    <li><button onClick={changePage('/profile')}>
                        <img src={logo_profile} alt="logo_profile" className="logo"/>
                        Profile</button></li>
                    <li><button onClick={changePage('/settings')}>
                        <img src={logo_settings} alt="logo_settings" className="logo"/>
                        Settings</button></li>
                </ul>
                    <button onClick={handleSubmit} id="logout">
                        <img src={logo_logout} alt="logo_logout" className="logo"/>
                        Déconnexion
                    </button>
            </div>
            
        </nav>
    );
}

export default Sidebar;