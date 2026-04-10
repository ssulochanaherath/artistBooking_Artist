import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {
    Heart,
    MoreHorizontal,
    Play,
    Music,
    MapPin,
    Users,
    Star,
    Instagram,
    Facebook,
    Twitter,
    Mail,
} from "lucide-react";

export default function ArtistProfile() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#F8F9FB] pb-16">
            {/* HERO */}
            <div className="relative h-[200px] sm:h-[230px] lg:h-[280px] w-full">
                <img
                    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                    className="w-full h-full object-cover"
                    alt="Artist cover"
                />

                {/* Avatar */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 lg:left-1/4">
                    <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                        className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-[6px] border-white object-cover shadow-lg"
                        alt="Artist avatar"
                    />
                </div>
            </div>

            {/* GRID */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                {/* LEFT COLUMN */}
                <div className="lg:col-span-5 xl:col-span-4 space-y-6">
                    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-md text-center">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                            Alex Jean
                        </h1>

                        <div className="flex justify-center items-center mt-2 text-yellow-500 font-medium">
                            <Star size={16} fill="currentColor" />
                            <span className="ml-1 text-gray-800 text-sm sm:text-base">
                4.75 (151 reviews)
              </span>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                            {["artist", "indoor", "party", "live band"].map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-purple-50 text-purple-600 text-xs rounded-full font-medium capitalize"
                                >
                  {tag}
                </span>
                            ))}
                        </div>

                        <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                            Professional live performer delivering unforgettable musical
                            experiences for luxury events and private concerts.
                        </p>

                        <div className="mt-8 text-left border-t pt-6">
                            <div className="flex items-baseline gap-1">
                <span className="text-xl sm:text-2xl font-bold text-red-500">
                  $800
                </span>
                                <span className="text-gray-500 text-sm font-medium">
                  starting price
                </span>
                            </div>
                            <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">
                                Range: $800 - $2,500 depending on event type
                            </p>
                        </div>

                        <div className="mt-6 flex gap-2">
                            <button
                                onClick={() => navigate("/editProfile")}
                                className="flex-1 bg-black text-white py-3 rounded-xl font-bold hover:bg-black/80 transition shadow-lg shadow-red-200"
                            >
                                Edit Profile
                            </button>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                        <div className="p-1">
                            <img
                                src="https://maps.googleapis.com/maps/api/staticmap?center=Colombo,Sri+Lanka&zoom=13&size=400x250"
                                className="w-full h-40 object-cover rounded-xl"
                                alt="Map"
                            />
                        </div>
                        <div className="p-4 text-center border-t">
                            <p className="text-xs font-bold text-gray-400 uppercase">
                                Location
                            </p>
                            <p className="text-sm font-semibold text-gray-800">
                                Colombo, Sri Lanka
                            </p>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                        <p className="text-xs font-bold text-gray-400 uppercase mb-4">
                            Social & Web
                        </p>
                        <div className="flex justify-center gap-3">
                            {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                                <div
                                    key={i}
                                    className="p-3 bg-gray-100 rounded-full text-gray-400 hover:bg-gray-200 cursor-pointer"
                                >
                                    <Icon size={18} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="lg:col-span-7 xl:col-span-8 space-y-6">
                    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
                        {/* Overview */}
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6">
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                    Overview
                                </h2>
                                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Music size={14} /> Musician
                  </span>
                                    <span className="flex items-center gap-1">
                    <MapPin size={14} /> Colombo
                  </span>
                                    <span className="flex items-center gap-1">
                    <Users size={14} /> 13+ Events
                  </span>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <button className="p-2 border rounded-full text-gray-400">
                                    <Heart size={18} />
                                </button>
                                <button className="p-2 border rounded-full text-gray-400">
                                    <MoreHorizontal size={18} />
                                </button>
                            </div>
                        </div>

                        <p className="text-gray-500 text-sm leading-relaxed">
                            Alex Jean is a dynamic performer known for electrifying stage
                            presence and musical excellence across private events and luxury
                            venues.
                        </p>

                        {/* Gallery */}
                        <h3 className="text-lg font-bold mt-10 mb-4">Gallery</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            <img
                                className="rounded-xl aspect-[3/4] object-cover"
                                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
                                alt=""
                            />
                            <img
                                className="rounded-xl aspect-[3/4] object-cover"
                                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
                                alt=""
                            />
                            <img
                                className="rounded-xl aspect-[3/4] object-cover"
                                src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
                                alt=""
                            />
                        </div>

                        {/* Audio */}
                        <h3 className="text-lg font-bold mt-10 mb-4">Audio & Video</h3>
                        <div className="space-y-3">
                            {[1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                            {item === 1 ? (
                                                <Play size={18} />
                                            ) : (
                                                <Music size={18} />
                                            )}
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">
                      Live Performance #{item}
                    </span>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                </div>
                            ))}
                        </div>

                        {/* Reviews */}
                        <h3 className="text-lg font-bold mt-12 mb-6">Reviews</h3>

                        {/* Rating Breakdown */}
                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                            <div className="text-center">
                                <h2 className="text-4xl font-bold">4.75</h2>
                                <div className="flex justify-center text-yellow-400 mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={20} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-gray-400 text-xs mt-1">151 Reviews</p>
                            </div>

                            <div className="space-y-2">
                                {[5, 4, 3, 2, 1].map((star, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm">
                                        <span>{star}</span>
                                        <Star size={14} />
                                        <div className="flex-1 h-2 bg-gray-200 rounded-full">
                                            <div
                                                className="h-2 bg-yellow-400 rounded-full"
                                                style={{ width: `${90 - i * 15}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Review Cards */}
                        <div className="space-y-4">
                            {[1, 2].map((r) => (
                                <div
                                    key={r}
                                    className="bg-gray-50 rounded-xl p-5 border border-gray-100"
                                >
                                    <div className="flex justify-between">
                                        <div className="flex gap-3 items-center">
                                            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                            <div>
                                                <p className="text-xs font-bold uppercase">
                                                    Tariqual Islam
                                                </p>
                                                <p className="text-[10px] text-gray-400">
                                                    14 August 2023
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={12} fill="currentColor" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-3">
                                        Amazing performance! Very professional and energetic.
                                        Highly recommended for private events.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
