import React from "react";
import { Upload, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Verification: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#f3f3f5] flex items-center justify-center p-6">

            {/* POPUP CONTAINER */}
            <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden relative">

                {/* Back */}
                <div className="absolute top-6 right-8 text-sm font-medium cursor-pointer flex items-center gap-2">
                    ← Back
                </div>

                <div className="grid grid-cols-2">

                    {/* LEFT SIDE */}
                    <div className="p-16 bg-[#f9f9fb] flex flex-col justify-center">
                        <h1 className="text-5xl font-semibold leading-tight">
                            Verify your
                            <br />
                            Identity
                        </h1>

                        <p className="mt-6 text-gray-600 max-w-md leading-relaxed">
                            We verify all artists to keep the platform safe and trusted.
                            Your documents are fully encrypted and never shared with
                            third parties.
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

                            <div className="flex items-center gap-2 text-gray-400">
                                <div className="w-5 h-5 rounded-full border flex items-center justify-center text-xs">
                                    3
                                </div>
                                Talent Show Case
                            </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-semibold mb-2">
                            Upload your document
                        </h2>
                        <p className="text-gray-600 text-sm mb-6">
                            Select a document type and upload a clear, unedited photo.
                            Make sure all details are visible.
                        </p>

                        {/* Document Types */}
                        <div className="flex gap-4 mb-8">
                            {["National ID", "Passport", "Bank Statement", "Driving License"].map((item, index) => (
                                <div
                                    key={index}
                                    className="w-28 h-24 border rounded-2xl flex flex-col items-center justify-center text-xs text-gray-600 hover:border-red-500 cursor-pointer transition"
                                >
                                    <div className="mb-2 text-red-500">🪪</div>
                                    {item}
                                </div>
                            ))}
                        </div>

                        {/* Upload Front & Back */}
                        <div className="grid grid-cols-2 gap-6 mb-6">

                            <div>
                                <p className="text-xs text-gray-400 mb-2">FRONT SIDE</p>
                                <div className="border-2 border-dashed rounded-2xl h-40 flex flex-col items-center justify-center text-gray-500 hover:border-red-500 cursor-pointer transition">
                                    <Upload className="w-6 h-6 text-red-500 mb-2" />
                                    <p className="text-sm">Upload front</p>
                                    <p className="text-xs text-gray-400">JPG, PNG or PDF</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400 mb-2">BACK SIDE</p>
                                <div className="border-2 border-dashed rounded-2xl h-40 flex flex-col items-center justify-center text-gray-500 hover:border-red-500 cursor-pointer transition">
                                    <Upload className="w-6 h-6 text-red-500 mb-2" />
                                    <p className="text-sm">Upload back</p>
                                    <p className="text-xs text-gray-400">JPG, PNG or PDF</p>
                                </div>
                            </div>

                        </div>

                        {/* Selfie Upload */}
                        <div className="mb-6">
                            <p className="text-xs text-gray-400 mb-2">SELFIE</p>
                            <div className="border-2 border-dashed rounded-2xl h-36 flex items-center justify-between px-6 hover:border-red-500 cursor-pointer transition">
                                <div className="flex items-center gap-4">
                                    <Camera className="w-6 h-6 text-gray-500" />
                                    <div>
                                        <p className="text-sm font-medium">Selfie with document</p>
                                        <p className="text-xs text-gray-400">
                                            Hold your document next to your face. JPG or PNG
                                        </p>
                                    </div>
                                </div>
                                <Upload className="w-5 h-5 text-red-500" />
                            </div>
                        </div>

                        {/* Agreement */}
                        <div className="flex items-start gap-3 mb-8 text-sm text-gray-600">
                            <input type="checkbox" className="mt-1 accent-red-600" />
                            <p>
                                I confirm these documents are genuine and belong to me. I agree
                                to the <span className="text-red-600 font-medium">Privacy Policy</span> and{" "}
                                <span className="text-red-600 font-medium">Verification Terms</span>.
                            </p>
                        </div>

                        {/* Bottom */}
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm font-medium">Step 2 of 3</p>
                                <p className="text-xs text-gray-500">
                                    All documents are encrypted & private
                                </p>
                            </div>

                            <button
                                onClick={() => navigate("/verification")}
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

export default Verification;