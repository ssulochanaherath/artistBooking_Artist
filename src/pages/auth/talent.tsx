import React from "react";
import { Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Talent: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#f3f3f5] flex items-center justify-center p-6">

            {/* POPUP CONTAINER */}
            <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden relative">

                {/* Back */}
                <div
                    onClick={() => navigate("/verification")}
                    className="absolute top-6 right-8 text-sm font-medium cursor-pointer flex items-center gap-2"
                >
                    ← Back
                </div>

                <div className="grid grid-cols-2">

                    {/* LEFT SIDE */}
                    <div className="p-16 bg-[#f9f9fb] flex flex-col justify-center">
                        <h1 className="text-5xl font-semibold leading-tight">
                            Show us
                            <br />
                            your talent
                        </h1>

                        <p className="mt-6 text-gray-600 max-w-md leading-relaxed">
                            Add your best performances — videos, audio tracks, and social
                            profiles so we can verify your work as an artist.
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

                    {/* RIGHT SIDE */}
                    <div className="p-16">

                        {/* Steps */}
                        <div className="flex items-center gap-6 text-sm mb-8">
                            <div className="flex items-center gap-2 text-green-600 font-medium">
                                <div className="w-5 h-5 rounded-full border border-green-600 flex items-center justify-center text-xs">
                                    ✓
                                </div>
                                Basic Info
                            </div>

                            <div className="flex items-center gap-2 text-green-600 font-medium">
                                <div className="w-5 h-5 rounded-full border border-green-600 flex items-center justify-center text-xs">
                                    ✓
                                </div>
                                Verification
                            </div>

                            <div className="flex items-center gap-2 text-green-600 font-medium">
                                <div className="w-5 h-5 rounded-full border border-green-600 flex items-center justify-center text-xs">
                                    ✓
                                </div>
                                Talent Show Case
                            </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-semibold mb-2">
                            Video Performances <span className="text-red-500">*</span>
                        </h2>
                        <p className="text-gray-600 text-sm mb-6">
                            Upload clips or paste YouTube / Vimeo links — at least 1 required
                        </p>

                        {/* Upload Box */}
                        <div className="border-2 border-dashed rounded-2xl h-44 flex flex-col items-center justify-center text-gray-500 hover:border-red-500 transition cursor-pointer mb-6">
                            <Upload className="w-8 h-8 text-red-500 mb-3" />
                            <p className="text-sm font-medium">
                                Click to upload or drag & drop
                            </p>
                            <p className="text-xs text-gray-400">
                                MP4, MOV, AVI Max 50MB
                            </p>
                        </div>

                        {/* OR */}
                        <div className="text-center text-xs text-gray-400 mb-4">
                            OR PASTE A LINK
                        </div>

                        {/* Link Input */}
                        <input
                            type="text"
                            placeholder="https://www.youtube.com/watch?v=YKT9"
                            className="w-full h-12 rounded-xl border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-black mb-4"
                        />

                        {/* Add Another */}
                        <p className="text-sm text-red-600 cursor-pointer mb-10">
                            Add another video
                        </p>

                        {/* Bottom */}
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm font-medium">Step 3 of 3</p>
                                <p className="text-xs text-gray-500">
                                    Add at least 1 video and 1 social link
                                </p>
                            </div>

                            <button
                                onClick={() => alert("Onboarding Complete 🎉")}
                                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition"
                            >
                                continue →
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Talent;