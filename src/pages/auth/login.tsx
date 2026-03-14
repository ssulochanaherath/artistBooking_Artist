import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import stage from "../../assets/image/stage.jpg";

export default function SignIn() {
    const navigate = useNavigate();

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${stage})` }}
        >
            {/* CARD */}
            <div className="bg-gray-100 w-[1000px] rounded-sm shadow-xl grid grid-cols-2 p-10">

                {/* LEFT SIDE */}
                <div className="pr-10">

                    {/* TOP BAR */}
                    <div className="flex items-center justify-between mb-10">
                        <ArrowLeft className="cursor-pointer text-gray-600" size={20} />
                        <span className="text-sm text-gray-500 cursor-pointer">
                            + create an account
                        </span>
                    </div>

                    {/* TITLE */}
                    <h1 className="text-2xl font-semibold mb-10">Sign in</h1>

                    {/* FORM */}
                    <div className="space-y-6">

                        <div>
                            <p className="text-sm text-gray-500 mb-1">Email</p>
                            <input
                                type="email"
                                placeholder="jhond@gmail.com"
                                className="w-full border-b border-gray-300 bg-transparent outline-none py-2"
                            />
                        </div>

                        <div>
                            <p className="text-sm text-gray-500 mb-1">Password</p>
                            <input
                                type="password"
                                className="w-full border-b border-gray-300 bg-transparent outline-none py-2"
                            />
                        </div>

                        <p className="text-xs text-red-500 cursor-pointer">
                            forgot password
                        </p>

                        <button
                            onClick={() => {
                                window.scrollTo(0, 0);
                                navigate("/information");
                            }}
                            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full font-medium"
                        >
                            Login
                        </button>

                        <p className="text-center text-xs text-gray-400 mt-4">
                            or login with
                        </p>

                        {/* SOCIAL */}
                        <div className="flex justify-center gap-6">
                            <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" className="w-6 cursor-pointer"/>
                            <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" className="w-6 cursor-pointer"/>
                            <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" className="w-6 cursor-pointer"/>
                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="flex items-center justify-center">
                    <div className="relative w-[280px] h-[420px] rounded-[40px] overflow-hidden shadow-lg">

                        <img
                            src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
                            className="w-full h-full object-cover grayscale"
                        />

                        {/* LOGO */}
                        <div className="absolute top-4 left-4 text-white font-bold">
                            M
                        </div>

                        {/* TEXT */}
                        <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
                            Lorem ipsum dolor sit amet, consectetur scing elit.
                            Proin fringilla diam vitae ex posuere ultricies.
                        </div>

                        {/* DOTS */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                        </div>

                    </div>
                </div>

            </div>

            {/* FOOTER */}
            <div className="absolute bottom-5 right-10 text-white text-sm space-x-4">
                <span className="cursor-pointer">Contact</span>
                <span>|</span>
                <span className="cursor-pointer">Privacy</span>
                <span>|</span>
                <span className="cursor-pointer">Terms & Conditions</span>
            </div>

        </div>
    );
}