import { Routes, Route } from "react-router-dom";
import Pay from "./components/Pay";
import Success from "./components/Success";


const App = () => {
  return (
    <Routes>
      <Route path="/pay" element={<Pay/>}/>
      <Route path="/success" element={<Success/>} />
    </Routes>
  )
}


export default App