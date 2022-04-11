import './App.css';
import Header from "./components/headerSearch/Header.js"
import Main from "./components/mainJobs/mainJobs.js"
import JobDetails from "./components/jobDetails/jobDetails"
import {Routes, Route, Navigate} from "react-router-dom"
import {useState} from "react"

function App() {
  const [isActive, setIsActive] = useState("false")

  const handleToggle = () => {
    setIsActive(!isActive);
  }

  return (
    <div className={isActive ? "App" : "AppDark"}>
      <Header mode={isActive} toggle={handleToggle}/>   

    <Routes>
      <Route path='/' element={<Navigate to="/jobs" />} />
      <Route path='/jobs' element={<Main mode={isActive}/>} />
      <Route path='/jobs/:position' element={<JobDetails mode={isActive}/>} />
    </Routes>

    </div>
  );
}

export default App;
