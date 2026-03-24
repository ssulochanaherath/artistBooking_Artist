import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import stage from "../../../public/bg-login.png";
import artistImage from "../../../public/person.png";

export default function SignIn() {
    const navigate = useNavigate();

    return (
        <div
            className="min-h-screen flex flex-col bg-cover bg-center"
            style={{ backgroundImage: `url(${stage})` }}
        >

            {/* CENTER CONTENT */}
            <div className="flex-grow flex items-center justify-center p-4">

                <div className="bg-gray-100 w-full max-w-4xl rounded-sm shadow-xl grid grid-cols-1 lg:grid-cols-2 p-6 md:p-10">

                    {/* LEFT SIDE */}
                    <div className="pr-0 lg:pr-10">

                        {/* TOP BAR */}
                        <div className="flex items-center justify-between mb-10">
                            <ArrowLeft className="cursor-pointer text-gray-600" size={20} />

                            <Link to="/signup" className="text-sm text-gray-500">
                                + create an account
                            </Link>
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
                    <div className="flex items-center justify-center mt-10 lg:mt-0">

                        <div className="relative w-full max-w-[280px] md:max-w-[320px] h-[360px] md:h-[420px] rounded-[40px] overflow-hidden shadow-lg">

                            <img
                                src={artistImage}
                                className="w-full h-full object-cover grayscale"
                            />

                            {/* LOGO */}
                            <div className="absolute top-4 left-4 text-white font-bold text-lg">
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

            </div>

            {/* FOOTER */}
            <div className="text-white text-xs md:text-sm flex justify-center gap-4 pb-4 flex-wrap">
                <span className="cursor-pointer">Contact</span>
                <span>|</span>
                <span className="cursor-pointer">Privacy</span>
                <span>|</span>
                <span className="cursor-pointer">Terms & Conditions</span>
            </div>

        </div>
    );
}