// import '../../scss/displayUserEpargne.scss';
import { useState, useEffect } from 'react';
import React from 'react';
import AnyChart from 'anychart';


class UserExpenseMonthly extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: this.props.userid
        }
    }

    componentDidMount() { 
        this.fetchData();
     }; 
    
    

    fetchData = async () => {
        const response = await fetch('http://localhost:5000/expense/' + this.state.userid);
        const data = await response.json();
        console.log(data);
    }

    render() {
        return (
            <div className='graph'>
                <p>Graphique des dépenses mensuelles</p>
            </div>
        );
    }
}

export default UserExpenseMonthly;
