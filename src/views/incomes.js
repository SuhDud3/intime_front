import '../scss/incomes.scss';
import Sidebar from './components/sidebar';
import { useLocation } from 'react-router-dom';

function Incomes() {

    const location = useLocation();
    
    return (
        <div>
        <Sidebar 
            user = {location.state.user}
        />
        <div className="main" id="body-incomes">
            <h1>Incomes</h1>
            <div id='user-income'>
            <p>Income: {location.state.user.totalIncome}</p>
            </div>
        </div>
        </div>
    )
}

export default Incomes;