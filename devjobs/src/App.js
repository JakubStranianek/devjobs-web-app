import './App.css';
import Header from "./components/headerSearch/Header.js"
import Main from "./components/mainJobs/mainJobs.js"
import JobDetails from "./components/jobDetails/jobDetails"
import {Routes, Route, Navigate} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />   

    <Routes>
      <Route path='/' element={<Navigate to="/jobs" />} />
      <Route path='/jobs' element={<Main />} />
      <Route path='/jobs/:position' element={<JobDetails />} />
    </Routes>

    </div>
  );
}

export default App;
