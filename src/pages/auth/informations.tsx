import React from "react";
import { MapPin, Calendar, Music2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import stage from "../../../public/bg-login.png";

const Information: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div
            className="h-screen flex items-center justify-center p-6 overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${stage})` }}
        >

            {/* POPUP CONTAINER */}
            <div className="w-full max-w-6xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden relative">

                {/* BACK BUTTON */}
                <div
                    onClick={() => navigate("/login")}
                    className="absolute top-6 right-8 text-red-500 text-sm font-medium cursor-pointer z-20"
                >
                    Back to Home
                </div>

                <div className="grid grid-cols-2 h-full">

                    {/* LEFT SIDE (FIXED + BACKGROUND IMAGE) */}
                    <div
                        className="relative p-16 flex flex-col justify-center h-full bg-cover bg-center"
                        //style={{ backgroundImage: `url(${stage})` }}
                    >
                        {/* DARK OVERLAY */}
                        <div className="absolute inset-0 bg-white"></div>

                        {/* CONTENT */}
                        <div className="relative z-10">
                            <h1 className="text-5xl font-semibold leading-tight">
                                Let’s get
                                <br />
                                started
                            </h1>

                            <p className="mt-6 max-w-sm leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor amet,
                                consectetur Lorem ipsum
                            </p>

                            <div className="flex items-center gap-4 mt-8">
                                <div className="flex -space-x-3">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/32.jpg"
                                        className="w-10 h-10 rounded-full border-2 border-white"
                                    />
                                    <img
                                        src="https://randomuser.me/api/portraits/women/44.jpg"
                                        className="w-10 h-10 rounded-full border-2 border-white"
                                    />
                                    <img
                                        src="https://randomuser.me/api/portraits/men/76.jpg"
                                        className="w-10 h-10 rounded-full border-2 border-white"
                                    />
                                </div>

                                <div>
                                    <p className="text-sm font-medium">
                                        600+ artist already joined
                                    </p>
                                    <div className="text-yellow-400 text-sm">★★★★★</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE (SCROLLABLE) */}
                    <div className="relative p-16 h-full overflow-y-auto scroll-smooth">

                        {/* Steps */}
                        <div className="flex items-center gap-6 text-sm mb-8">
                            <div className="flex items-center gap-2 text-green-600 font-medium">
                                <div className="w-5 h-5 rounded-full border border-green-600 flex items-center justify-center text-xs">
                                    ✓
                                </div>
                                Basic Info
                            </div>

                            <div className="flex items-center gap-2 text-gray-400">
                                <div className="w-5 h-5 rounded-full border flex items-center justify-center text-xs">
                                    2
                                </div>
                                Verification
                            </div>

                            <div className="flex items-center gap-2 text-gray-400">
                                <div className="w-5 h-5 rounded-full border flex items-center justify-center text-xs">
                                    3
                                </div>
                                Talent Show Case
                            </div>
                        </div>

                        {/* FORM */}
                        <div className="space-y-5">

                            <div>
                                <label className="text-sm font-medium">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="mt-2 w-full h-12 rounded-xl border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">
                                    Stage Name (Optional)
                                </label>
                                <input
                                    type="text"
                                    placeholder="your artistic name"
                                    className="mt-2 w-full h-12 rounded-xl border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">
                                    Location <span className="text-red-500">*</span>
                                </label>
                                <div className="relative mt-2">
                                    <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="city, state"
                                        className="w-full h-12 rounded-xl border border-gray-300 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="+94 (555) 123-456"
                                        className="mt-2 w-full h-12 rounded-xl border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium">
                                        Date Of Birth
                                    </label>
                                    <div className="relative mt-2">
                                        <Calendar className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
                                        <input
                                            type="date"
                                            className="w-full h-12 rounded-xl border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-black"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="john@gmail.com"
                                    className="mt-2 w-full h-12 rounded-xl border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">
                                    Category <span className="text-red-500">*</span>
                                </label>
                                <div className="relative mt-2">
                                    <Music2 className="absolute right-10 top-3.5 w-5 h-5 text-gray-400" />
                                    <select className="w-full h-12 rounded-xl border border-gray-300 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-black">
                                        <option>Musician</option>
                                        <option>Producer</option>
                                        <option>DJ</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                        {/* FOOTER */}
                        <div className="flex justify-between items-center mt-10">
                            <div>
                                <p className="text-sm font-medium">Step 1 of 3</p>
                                <p className="text-xs text-gray-500">
                                    Fill in your basic details to continue
                                </p>
                            </div>

                            <button
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    navigate("/verification");
                                }}
                                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition"
                            >
                                Continue →
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;