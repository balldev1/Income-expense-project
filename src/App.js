import './App.css';
import Transaction from './component/Transaction'
import Formcomponent from './component/Formcomponent'
import { useState,useEffect,useReducer } from 'react'
import DataContext from './data/DataContext';
import ReportComponent from './component/ReportComponent';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Item from './component/Item';



function App(){
  const design ={color:'red',textAlign:'center',fontSize:'1.5rem'}

  const initState = [
    {id:1,title:'salary',amount:50000},
    {id:2,title:'sell product',amount:5000},
    {id:3,title:'travel',amount:-3000},
    {id:4,title:'rent a room',amount:-4000}
  ]

    const [items,setItems] =useState(initState)
    const [reportIncome,setreportIncome] =useState(0)
    const [reportExpense,setreportExpense] =useState(0)
    const [showReport,setShowreport] = useState(false)

    const reducer = (state,action) =>{
      switch(action.type){
        case 'SHOW':
          return setShowreport(true)
        case 'HIDE':
          return setShowreport(false)
      }
    }

    const [result,dispatch] = useReducer(reducer,showReport)

    useEffect(()=>{
      const amount =(items.map(e=>e.amount))
      const income =amount.filter(e=>e>0).reduce((total,e)=>total +=e,0,)
      const expense =(amount.filter(e=>e<0).reduce((total,e)=>total +=e,0))*-1
      setreportIncome(income)
      setreportExpense(expense)
    },[items,reportIncome,reportExpense])
    
    const onAddNewItem = (newItem) =>{
      setItems((prevItem)=>{
        return [newItem,...prevItem]
      })
    }
      
  return (
     <DataContext.Provider value ={
      {
        income : reportIncome,
        expense : reportExpense
      }
      }>
    <div className = 'container'>
        <h1 style ={design}>Program Income && Expenses</h1>
        <Router>
          <div>
            <ul className = 'horizontal-menu'>
              <li>
                <Link to = '/'>Information Account</Link>
              </li>
              <li>
                <Link to = '/insert'>Save Data</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path = '/' element ={<><ReportComponent/></>}></Route>
            <Route path = '/insert' element ={<><Formcomponent onaddItem = {onAddNewItem}/> <Transaction items = {items}/> </>}></Route>
          </Routes>
        </Router>
    </div>
    </DataContext.Provider>    
  );
}

export default App;
