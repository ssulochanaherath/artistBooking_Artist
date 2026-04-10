import { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function ProfileRequestsUI() {
    const [selected, setSelected] = useState(false);
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();

    const handleAccept = () => {
        setAccepted(true);
        setSelected(false); // close side panel
        setTimeout(() => setAccepted(false), 3000);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
            <div className="w-full max-w-6xl grid grid-cols-3 gap-6 relative">

                {/* LEFT PROFILE CARD */}
                <div className={`col-span-1 space-y-6 transition ${selected ? "opacity-30" : ""}`}>
                    <div className="bg-white rounded-2xl shadow p-6 text-center">
                        <div className="relative">
                            <img
                                src="https://via.placeholder.com/400x150"
                                className="w-full h-32 object-cover rounded-xl"
                            />
                            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-10">
                                <img
                                    src="https://via.placeholder.com/100"
                                    className="w-20 h-20 rounded-full border-4 border-white"
                                />
                            </div>
                        </div>

                        <div className="mt-12">
                            <h2 className="text-xl font-semibold">Alex Jean</h2>
                            <p className="text-gray-500 text-sm">Musician · Colombo LK</p>
                        </div>

                        <div className="mt-6 space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Starting price</span>
                                <span className="font-medium">$800</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">New Request</span>
                                <span className="text-red-500 font-medium">1</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Response Rate</span>
                                <span className="font-medium">100%</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-red-500">
                        <p className="text-sm font-medium">Respond within 48h</p>
                        <p className="text-xs text-gray-500 mt-1">
                            Late response lowers your profile ranking and visibility.
                        </p>
                    </div>
                </div>

                {/* RIGHT PANEL */}
                <div className="col-span-2">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm text-gray-500">Pending Requests · 1</h3>
                        <button
                            onClick={() => navigate("/account")}
                            className="text-red-500 text-sm">Back to Profile</button
                        >
                    </div>

                    <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-between border-l-4 border-red-500">
                        <div className="flex items-center gap-4">
                            <div className="text-center">
                                <p className="text-xs text-gray-400">MAR</p>
                                <p className="text-lg font-semibold">14</p>
                            </div>

                            <img
                                src="https://via.placeholder.com/40"
                                className="w-10 h-10 rounded-full"
                            />

                            <div>
                                <p className="font-medium">Tariqual Islam</p>
                                <p className="text-xs text-gray-500">
                                    Music · 7:00 PM - 10:00 PM · 3hrs
                                </p>
                                <p className="text-xs text-gray-500">
                                    Birthday Party · 40 guests
                                </p>
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="font-semibold">$1200</p>
                            <button
                                onClick={() => setSelected(true)}
                                className="text-xs text-red-500 mt-2"
                            >
                                View Request
                            </button>
                        </div>
                    </div>
                </div>

                {/* SLIDE OVER PANEL */}
                {selected && (
                    <div className="fixed inset-0 flex justify-end bg-black/20">
                        <div className="w-full max-w-md bg-white h-full shadow-xl p-6 overflow-y-auto">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-semibold">Tariqual Islam</h2>
                                <button onClick={() => setSelected(false)}>✕</button>
                            </div>

                            <div className="border-t pt-4 space-y-4">
                                <div>
                                    <p className="text-xs text-gray-400">Event Details</p>
                                </div>

                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div className="bg-gray-100 p-3 rounded-lg">
                                        <p className="text-gray-400 text-xs">Date</p>
                                        <p>March 14, 2026</p>
                                    </div>
                                    <div className="bg-gray-100 p-3 rounded-lg">
                                        <p className="text-gray-400 text-xs">Time</p>
                                        <p>7:00 - 10:00 PM</p>
                                    </div>
                                    <div className="bg-gray-100 p-3 rounded-lg">
                                        <p className="text-gray-400 text-xs">Duration</p>
                                        <p>3 hours</p>
                                    </div>
                                    <div className="bg-gray-100 p-3 rounded-lg">
                                        <p className="text-gray-400 text-xs">Event Type</p>
                                        <p>Birthday Party</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-400 mb-2">Venue</p>
                                    <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center text-xs text-gray-500">
                                        Map Placeholder
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-400 mb-2">Client Info</p>
                                    <div className="space-y-2 text-sm">
                                        <div className="bg-gray-100 p-3 rounded-lg">Tariqual Islam</div>
                                        <div className="bg-gray-100 p-3 rounded-lg">+94 77 123 4567</div>
                                        <div className="bg-gray-100 p-3 rounded-lg">tariqual@email.com</div>
                                    </div>
                                </div>

                                <div className="flex gap-3 pt-4">
                                    <button
                                        onClick={handleAccept}
                                        className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                                    >
                                        Accept Booking
                                    </button>
                                    <button
                                        onClick={() => setSelected(false)}
                                        className="flex-1 border py-2 rounded-lg"
                                    >
                                        Decline
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* SUCCESS POPUP */}
                {accepted && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                        <div className="bg-white rounded-2xl shadow-2xl px-8 py-6 text-center animate-scaleIn">
                            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl">
                                ✓
                            </div>
                            <h3 className="text-lg font-semibold">Booking Accepted</h3>
                            <p className="text-sm text-gray-500 mt-1">
                                You successfully accepted this request
                            </p>
                        </div>
                    </div>
                )}

            </div>

            {/* ANIMATION STYLE */}
            <style>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-scaleIn {
          animation: scaleIn 0.25s ease;
        }
      `}</style>
        </div>
    );
}
