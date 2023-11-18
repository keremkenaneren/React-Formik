import './App.css'
import {Routes, Route} from "react-router-dom";
import HomeForm from "./components/HomeForm.jsx";
import InspectionForm from "./components/InspectionForm.jsx";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeForm/>}/>
        <Route path="/inspection" element={<InspectionForm/>}/>
      </Routes>
    </div>
  )
}

export default App
