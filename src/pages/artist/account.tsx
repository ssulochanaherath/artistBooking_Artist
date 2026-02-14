import React from 'react';
import { Heart, MoreHorizontal, Play, Music, MapPin, Users, Star, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function ArtistProfile() {
    return (
        <div className="min-h-screen bg-[#F8F9FB] pb-12">
            {/* 1. HERO BANNER */}
            <div className="relative h-[300px] w-full">
                <img
                    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                    className="w-full h-full object-cover"
                    alt="Artist cover"
                />
                {/* Profile Avatar Overlay */}
                <div className="absolute -bottom-16 left-1/4 -translate-x-1/2">
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                            className="w-32 h-32 rounded-full border-[6px] border-white object-cover shadow-lg"
                            alt="Artist avatar"
                        />
                    </div>
                </div>
            </div>

            {/* 2. MAIN CONTENT CONTAINER */}
            <div className="max-w-6xl mx-auto px-4 mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* LEFT COLUMN (SIDEBAR) - 4/12 width */}
                <div className="lg:col-span-6 space-y-6">
                    {/* Main Info Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-md text-center">
                        <h1 className="text-4xl font-bold text-gray-900">Alex Jean</h1>
                        <div className="flex justify-center items-center mt-1 text-yellow-500 font-medium">
                            <Star size={16} fill="currentColor" />
                            <span className="ml-1 text-gray-800">4.7 (151 reviews)</span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                            {['artist', 'indoor', 'party', 'indoor'].map((tag, i) => (
                                <span key={i} className="px-3 py-1 bg-purple-50 text-purple-600 text-xs rounded-full font-medium capitalize">
                  {tag}
                </span>
                            ))}
                        </div>

                        <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum
                        </p>

                        <div className="mt-8 text-left border-t pt-6">
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-bold text-red-500">$800</span>
                                <span className="text-gray-500 text-sm font-medium">starting price</span>
                            </div>
                            <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">Range: $800 - $2,500 depending on event type and duration</p>
                        </div>

                        <div className="mt-6 flex gap-2">
                            <button className="flex-1 bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition shadow-lg shadow-red-200">
                                Booking Now
                            </button>
                            <button className="p-3 border rounded-xl text-gray-400 hover:bg-gray-50">
                                <Heart size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Location Card */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                        <div className="p-1">
                            <img
                                src="https://maps.googleapis.com/maps/api/staticmap?center=Colombo,Sri+Lanka&zoom=13&size=400x250&key=YOUR_KEY"
                                className="w-full h-44 object-cover rounded-xl"
                                alt="Map"
                            />
                        </div>
                        <div className="p-4 text-center border-t">
                            <p className="text-xs font-bold text-gray-400 uppercase">Location</p>
                            <p className="text-sm font-semibold text-gray-800">Colombo, Sri Lanka</p>
                        </div>
                    </div>

                    {/* Social Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                        <p className="text-xs font-bold text-gray-400 uppercase mb-4">Social & Web</p>
                        <div className="flex justify-center gap-3">
                            {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                                <div key={i} className="p-3 bg-gray-100 rounded-full text-gray-400 hover:bg-gray-200 cursor-pointer">
                                    <Icon size={18} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN (DETAILS) - 8/12 width */}
                <div className="lg:col-span-6 space-y-6">
                    <div className="bg-white rounded-2xl p-8 shadow-sm">
                        {/* Overview Header */}
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
                                <div className="flex gap-4 mt-2 text-sm text-gray-400">
                                    <span className="flex items-center gap-1"><Music size={14}/> Musician</span>
                                    <span className="flex items-center gap-1"><MapPin size={14}/> Lorem</span>
                                    <span className="flex items-center gap-1"><Users size={14}/> 13+</span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 border rounded-full text-gray-400"><Heart size={18}/></button>
                                <button className="p-2 border rounded-full text-gray-400"><MoreHorizontal size={18}/></button>
                            </div>
                        </div>

                        <div className="space-y-4 text-gray-500 leading-relaxed text-sm">
                            <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsu</p>
                            <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsu</p>
                            <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit</p>
                        </div>

                        {/* Gallery Section */}
                        <h3 className="text-lg font-bold mt-10 mb-4">Gallery</h3>
                        <div className="grid grid-cols-3 gap-3">
                            <img className="rounded-xl aspect-[3/4] object-cover" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f" alt="G1"/>
                            <img className="rounded-xl aspect-[3/4] object-cover" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4" alt="G2"/>
                            <div className="relative">
                                <img className="rounded-xl aspect-[3/4] object-cover" src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2" alt="G3"/>
                                <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center text-white text-xs font-bold">
                                    View all photos
                                </div>
                            </div>
                        </div>

                        {/* Audio & Video Section */}
                        <h3 className="text-lg font-bold mt-10 mb-4">Audio & Video</h3>
                        <div className="space-y-3">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="flex items-center justify-between p-1">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                                            {item === 1 ? <Play size={18} fill="currentColor"/> : <Music size={18}/>}
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">Live in Concert Colombo (Lorem ipsum dolor sit amet, consectetur)</span>
                                    </div>
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${item === 1 ? 'bg-red-100 text-red-500' : 'bg-green-100 text-green-500'}`}>
                                        <div className={`w-2 h-2 rounded-full ${item === 1 ? 'bg-red-500' : 'bg-green-500'}`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Reviews Section */}
                        <div className="mt-12 text-center">
                            <h2 className="text-5xl font-bold">4.75</h2>
                            <div className="flex justify-center gap-1 mt-2 text-yellow-400">
                                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor"/>)}
                            </div>
                            <p className="text-gray-400 text-xs mt-1">151 Reviews</p>

                            <p className="text-sm font-bold text-gray-800 mt-8 mb-4">Popular review & comments</p>

                            <div className="space-y-4 text-left">
                                {[1, 2, 3].map((r) => (
                                    <div key={r} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                                <div>
                                                    <p className="text-xs font-bold uppercase">Tariqual Islam</p>
                                                    <p className="text-[10px] text-gray-400">14 August 2023</p>
                                                </div>
                                            </div>
                                            <div className="flex text-yellow-400">
                                                {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor"/>)}
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Leave a Review */}
                            <div className="mt-10 border-t pt-8">
                                <p className="font-bold text-gray-800">Leave a Review</p>
                                <div className="flex justify-center gap-2 mt-3 text-gray-300">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={24} />)}
                                </div>
                                <textarea
                                    className="w-full mt-6 p-4 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-gray-200"
                                    rows="4"
                                    placeholder="write review here"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}