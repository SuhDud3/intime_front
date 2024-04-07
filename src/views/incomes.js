import '../scss/incomes.scss';
import Sidebar from './components/sidebar';
import IncomeByMonth from './components/incomeByMonth';
import IncomeByCategory from './components/incomeByCategory';
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
                <div className='graph' id='user-income-monthly'>
                    <IncomeByMonth 
                        userid = {location.state.user.userID}
                    />
                </div>
                <div className='graph' id='user-income-category'>
                    <IncomeByCategory 
                        userid = {location.state.user.userID}
                    />
                </div>
            </div>
        </div>
    )
}

export default Incomes;