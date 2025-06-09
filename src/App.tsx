import { Navigate, Route, Routes} from "react-router"
import Sign_in from "./pages/Sign_in"
import Sign_up from "./pages/Sign_up"
import  Home  from "./pages/Home"
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/my components/ProtectedRoute";

function App() {
  return (
    <div className="bgCol dark:bgCol transition duration-700">
    <div className="flex flex-col items-center justify-center min-h-svh">

    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Sign_in />} />
        <Route path="/Creat" element={<Sign_up />} />
        <Route
          path="/Home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AuthProvider>

    </div>
    </div>



  )
}
 
export default App