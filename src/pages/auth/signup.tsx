import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import stage from "../../../public/bg-login.png";
import artistImage from "../../../public/person.png";

export default function SignUp() {
    const navigate = useNavigate();

    return (
        <div
            className="min-h-screen flex flex-col bg-cover bg-center"
            style={{ backgroundImage: `url(${stage})` }}
        >

            {/* CENTER AREA */}
            <div className="flex-grow flex items-center justify-center p-4">

                <div className="relative overflow-hidden bg-white/90 backdrop-blur-xl border border-white/40 w-full max-w-4xl rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] grid grid-cols-1 lg:grid-cols-2 p-6 md:p-10">

                    {/* LIGHT REFLECTION */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"></div>

                    {/* LEFT SIDE */}
                    <div className="pr-0 lg:pr-10 relative z-10">

                        <div className="flex items-center justify-between mb-10">
                            <ArrowLeft
                                className="cursor-pointer text-gray-600 hover:text-black transition-colors"
                                size={20}
                            />
                            <Link
                                to="/login"
                                className="text-sm text-gray-500 hover:text-black transition-colors"
                            >
                                + already have an account
                            </Link>
                        </div>

                        <h1 className="text-3xl font-semibold mb-10 text-black">
                            Sign up
                        </h1>

                        {/* FORM */}
                        <div className="space-y-6">

                            <div>
                                <p className="text-sm text-black mb-1">Email</p>
                                <input
                                    type="email"
                                    className="w-full border-b border-gray-300 bg-transparent outline-none py-2 text-black focus:border-black transition-all duration-300"
                                />
                            </div>

                            <div>
                                <p className="text-sm text-black mb-1">Password</p>
                                <input
                                    type="password"
                                    className="w-full border-b border-gray-300 bg-transparent outline-none py-2 text-black focus:border-black transition-all duration-300"
                                />
                            </div>

                            <div>
                                <p className="text-sm text-black mb-1">Confirm Password</p>
                                <input
                                    type="password"
                                    className="w-full border-b border-gray-300 bg-transparent outline-none py-2 text-black focus:border-black transition-all duration-300"
                                />
                            </div>

                            <button
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    navigate("/login");
                                }}
                                className="bg-[#DB0000] text-white px-40 py-4 rounded-lg"
                            >
                                Create
                            </button>

                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex items-center justify-center mt-10 lg:mt-0 relative z-10">
                        <div className="relative w-full max-w-[280px] md:max-w-[320px] h-[360px] md:h-[420px] rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-300">

                            <img
                                src={artistImage}
                                className="w-full h-full object-cover grayscale"
                            />

                            <div className="absolute top-4 left-4 text-white font-bold text-lg">
                                M
                            </div>

                            <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
                                Lorem ipsum dolor sit amet, consectetur scing elit.
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
                <span className="cursor-pointer hover:opacity-70 transition">Contact</span>
                <span>|</span>
                <span className="cursor-pointer hover:opacity-70 transition">Privacy</span>
                <span>|</span>
                <span className="cursor-pointer hover:opacity-70 transition">Terms & Conditions</span>
            </div>

        </div>
    );
}