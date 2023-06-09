import { Routes, Route } from "react-router-dom"
import Login from "./components/login"
import Home from "./components/home"


const App = () => {

    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}

export default App