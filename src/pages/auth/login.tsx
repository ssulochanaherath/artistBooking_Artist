import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white flex justify-center items-center">
            {/* Main Card */}
            <div className="w-full max-w-5xl h-[90vh] grid grid-cols-1 lg:grid-cols-[3fr_2fr] bg-white shadow-sm overflow-hidden">
                {/* LEFT SIDE */}
                <div className="flex flex-col px-12 py-12 justify-start">
                    {/* Top bar */}
                    <div className="flex items-center justify-between mb-16">
                        <span className="text-sm text-gray-500 cursor-pointer">
                            + create an account
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl font-semibold mb-10">Sign in</h1>

                    {/* Inputs */}
                    <div className="space-y-5 max-w-sm">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-gray-100 px-4 py-3 rounded-lg outline-none"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full bg-gray-100 px-4 py-3 rounded-lg outline-none"
                        />

                        <span className="text-xs text-red-500 cursor-pointer">
                            forgot password
                        </span>

                        <button
                            onClick={() => navigate("/account")}
                            className="w-full bg-red-600 text-white py-3 rounded-full font-medium"
                        >
                            Login
                        </button>

                        {/* Social Icons */}
                        <div className="flex gap-4 justify-center mt-4">
                            <button className="w-12 h-12 border rounded-lg flex items-center justify-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" className="w-5" />
                            </button>
                            <button className="w-12 h-12 border rounded-lg flex items-center justify-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" className="w-5" />
                            </button>
                            <button className="w-12 h-12 border rounded-lg flex items-center justify-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" className="w-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE SIDE */}
                <div className="relative overflow-hidden rounded-tl-3xl rounded-br-3xl">
                    <img
                        src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
                        className="w-full h-full object-cover grayscale"
                    />

                    {/* Logo */}
                    <div className="absolute top-6 left-6 text-white font-bold text-lg">M</div>

                    {/* Quote */}
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                        <p className="text-sm leading-relaxed opacity-90">
                            “Lorem ipsum dolor sit amet, consectetur scing elit. Proin fringilla diam vitae ex posuere ultricies. In vel hendrerit”
                        </p>
                        <div className="flex gap-1 mt-4">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span className="w-2 h-2 bg-white/50 rounded-full"></span>
                            <span className="w-2 h-2 bg-white/50 rounded-full"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
