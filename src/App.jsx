import React from 'react';
import ReactDOM from 'react-dom';
import QuestionContainer from './Components/QuestionContainer'; 
import CPRContainer from './Components/CPRContainer';
import { Home } from 'lucide-react';
import HomePage from './Components/HomePage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Assessment from "./Components/Assessment"

function App() {

  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Navigation 
        <nav className="bg-green-900 text-white p-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-200 transition duration-150 ease-in-out"><Home/></Link>
            </li>
            
          </ul>
        </nav>*/}

        {/* Routes */}
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cpr" element={<CPRContainer />} />
            <Route path="/assessment" element={<Assessment />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
  //   <div className="flex flex-col justify-around">
  //     <main className="">
  //       <Assessment />
  //     </main>
  //   </div>
  // )
}


export default App;