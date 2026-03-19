import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import stage from "../../assets/image/stage.jpg";

export default function SignUp() {
    const navigate = useNavigate();

    return (
        <div
            className="min-h-screen flex flex-col bg-cover bg-center"
            style={{ backgroundImage: `url(${stage})` }}
        >

            {/* CENTER AREA */}
            <div className="flex-grow flex items-center justify-center p-4">

                <div className="bg-gray-100 w-full max-w-5xl rounded-sm shadow-xl grid grid-cols-1 lg:grid-cols-2 p-6 md:p-10">

                    {/* LEFT SIDE */}
                    <div className="pr-0 lg:pr-10">

                        <div className="flex items-center justify-between mb-10">
                            <ArrowLeft className="cursor-pointer text-gray-600" size={20} />
                            <Link to="/login" className="text-sm text-gray-500">
                                + already have an account
                            </Link>
                        </div>

                        <h1 className="text-2xl font-semibold mb-10">Sign up</h1>

                        {/* FORM */}
                        <div className="space-y-6">

                            <div>
                                <p className="text-sm text-gray-500 mb-1">Email</p>
                                <input
                                    type="email"
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

                            <div>
                                <p className="text-sm text-gray-500 mb-1">Confirm Password</p>
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
                                Sign Up
                            </button>

                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex items-center justify-center mt-10 lg:mt-0">
                        <div className="relative w-full max-w-[280px] md:max-w-[320px] h-[360px] md:h-[420px] rounded-[40px] overflow-hidden shadow-lg">

                            <img
                                src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
                                className="w-full h-full object-cover grayscale"
                            />

                            <div className="absolute top-4 left-4 text-white font-bold text-lg">
                                M
                            </div>

                            <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
                                Lorem ipsum dolor sit amet, consectetur scing elit.
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