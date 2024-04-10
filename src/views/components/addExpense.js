import '../../scss/addExpense.scss'
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { useState, useEffect } from 'react';

function AddExpense({ user }) {

    const userID = user.userID

    const [categories, setCategories] = useState([])
    const [open, setOpen] = useState(false)
    const [openValidation, setOpenValidation] = useState(false)

    const displayAlertError = () => {
        setOpen(true)
    }

    const displayAlertValidation = () => {
        setOpenValidation(true)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }

    const handleCloseValidation = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpenValidation(false)
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        const response = await fetch('http://localhost:5000/category/')
        const data = await response.json()
        setCategories(data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const date = e.target.date.value
        const detail = e.target.description.value
        const amount = e.target.amount.value
        const category = e.target.category.value

        const newExpense = {
            userID: userID,
            date: date,
            detail: detail,
            amount: amount,
            categoryID: category
        }

        const response = await fetch('http://localhost:5000/expense/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newExpense)
        })

        if (response.status === 201) {
            displayAlertValidation()
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } else {
            displayAlertError()
        }
    }

    return (
        <div id="add-expense-container" className="card">
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                Erreur lors de l'ajout de la dépense
                </Alert>
            </Snackbar>
            <Snackbar open={openValidation} autoHideDuration={6000} onClose={handleCloseValidation} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleCloseValidation} severity="success" sx={{ width: '100%' }} >
                Dépense ajoutéeh1
                </Alert>
            </Snackbar>
            <h1>Ajout d'une dépense</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="date" required />
                </div>
                <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="textarea" id="description" name="description" required />
                </div>
                <div className="form-group">
                <label htmlFor="amount">Montant</label>
                <input type="number" id="amount" name="amount" required />
                </div>
                <div className="form-group">
                <label htmlFor="category">Catégorie</label>
                <select id="category" name="category" required>
                    {categories.map((category) => (
                    <option key={category.categoryID} value={category.categoryID}>
                        {category.categoryName}
                    </option>
                    ))}
                </select>
                </div>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    )
}

export default AddExpense;