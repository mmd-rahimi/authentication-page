import { Route, Routes} from "react-router"
import Sign_in from "./pages/Sign_in"
import Sign_up from "./pages/Sign_up"
import  Home  from "./pages/Home"
import "./index.css";

function App() {
  return (
    <div className="bgCol dark:bgCol transition duration-700">
    <div className="flex flex-col items-center justify-center min-h-svh">

        <Routes>
          <Route path="/" element={<Sign_in />}/>
          <Route path="/Creat" element={<Sign_up />}/>
          <Route path="/Home" element={<Home />}/>
        </Routes>

    </div>
    </div>



  )
}
 
export default App