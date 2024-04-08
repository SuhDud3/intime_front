import '../../scss/incomeByCategory.scss';
import { useState, useEffect } from "react";
import React from "react";
import AnyChart from "anychart-react";

const IncomeByCategory = ({ userid }) => {
    const [categories, setCategories] = useState([]);
    const [incomes, setIncomes] = useState([]);
    
    useEffect(() => {
        fetchCategories();
        fetchIncomes();
    }, []);
    
    const incomesByCategory = () => {
        let incomesByCategory = [];
        for (let i = 0; i < incomes.length; i++) {
        let category = incomes[i].incomeSourceID;
        let amount = parseFloat(incomes[i].amount);
        if (categories[category - 1] === undefined) {
            continue;
        } else {
            let categoryName = categories[category - 1].incomeSourceLabel;
            if (incomesByCategory.some((e) => e.x === categoryName)) {
                let index = incomesByCategory.findIndex((e) => e.x === categoryName);
                incomesByCategory[index].value += amount;
            } else {
            incomesByCategory.push({ x: categoryName, value: amount });
            }
        }
        }
        
        return incomesByCategory;
    };
    
    const fetchCategories = async () => {
        const response = await fetch("http://localhost:5000/income/labels");
        const data = await response.json();
        setCategories(data.labels);
        return data;
    };
    
    const fetchIncomes = async () => {
        const response = await fetch("http://localhost:5000/income/user/" + userid);
        const data = await response.json();
        setIncomes(data.income);
        return data;
    };
    
    return (
        <div className="graph">
        <div>
            <AnyChart
            id="graph-container-income-by-category"
            type="pie"
            data={incomesByCategory()}
            title="Revenus par catégorie"
            />
        </div>
        </div>
    );
};

export default IncomeByCategory;