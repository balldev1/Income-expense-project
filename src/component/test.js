npm install react-router-dom
npm start 

import { browserRouter as Router,Routes,Route,Link } from 'react-router-dom'

return (
    <Router>
        <div>
            <ul className = 'horizontal-menu'>
                <li>
                    <Link to = '/'>Information</Link>
                </li>
                <li>
                    <Link to = '/insert'>SaveData</Link>
                </li>
            </ul>
        </div>
        <Routes>
            <Route path = '/' element={<><ReportComponent/></>}></Route>
            <Route path = 'insert' element={<><Fromcomponent onaddItem = {onaddNewItem}/><Transaction item = {Item}/></>}></Route>
        </Routes>
    </Router>
)


export default App();