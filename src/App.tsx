import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/login.tsx";
import Account from "./pages/artist/account.tsx";
import Information from "./pages/auth/informations.tsx";
import Verification from "./pages/auth/verification.tsx";
import Talent from "./pages/auth/talent.tsx";
import Signup from "./pages/auth/signup.tsx";
import EditProfile from "./pages/artist/editProfile.tsx";
import Bookings from "./pages/artist/bookingRequests.tsx";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/information" element={<Information />} />
            <Route path="/account" element={<Account />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/talent" element={<Talent />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/editProfile" element={<EditProfile />} />
            <Route path="/bookingRequests" element={<Bookings />} />
        </Routes>
    );
}

export default App;
