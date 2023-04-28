import {useState,useEffect} from 'react'
import './Formcomponent.css'
import { v4 as uuidv4 } from 'uuid';

const Formcomponent = (props) =>{
    console.log('Render Form Component')
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [formValid,setFormValid] = useState(false)
    
    const inputTitle = (event) =>{
        setTitle(event.target.value)
    }
    const inputAmount = (event) =>{
        setAmount(event.target.value)
    }
    const saveItem = (event) =>{
        event.preventDefault()
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onaddItem(itemData)
        setTitle('')
        setAmount('')
    }

    useEffect(()=>{
        const checkData = title.trim().length>0 && amount !==0
        setFormValid(checkData) 
    },[title,amount])

    return (
      <div>
        <form onSubmit = {saveItem}>
            <div className = 'form-control'>
                <label>List</label>
                <input type = 'text' placeholder ='Identify List' onChange ={inputTitle} value={title}/>
            </div>
            <div className = 'form-control'>
                <label>Amount</label>
                <input type = 'text' placeholder='+ income ,- expenses' onChange ={inputAmount} value = {amount}/>
            </div>
            <div>
                <button type ='submit' className = 'btn' disabled={!formValid}>Confirm</button>
            </div>
        </form>
      </div>  
    );
}

export default Formcomponent