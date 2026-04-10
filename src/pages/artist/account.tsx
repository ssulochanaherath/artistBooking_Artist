import React, { useState } from "react";
import {
    Edit,
    Plus,
    Trash2,
    Music,
    MapPin,
    Star,
    Play,
    X,
} from "lucide-react";

export default function ArtistProfile() {

    // ================= STATES =================
    const [gallery, setGallery] = useState([
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    ]);

    const [media, setMedia] = useState([
        { id: 1, title: "Live Performance #1", type: "video", url: "" },
        { id: 2, title: "Acoustic Session", type: "audio", url: "" },
    ]);

    const [bio, setBio] = useState(
        "Professional live performer delivering unforgettable musical experiences for luxury events and private concerts."
    );

    const [price, setPrice] = useState(800);

    // ================= MODALS =================
    const [editModal, setEditModal] = useState(false);
    const [mediaModal, setMediaModal] = useState(false);

    // ================= MEDIA FORM =================
    const [mediaType, setMediaType] = useState("upload");
    const [mediaTitle, setMediaTitle] = useState("");
    const [mediaUrl, setMediaUrl] = useState("");

    // ================= GALLERY UPLOAD =================
    const handleAddImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setGallery([...gallery, url]);
        }
    };

    // ================= MEDIA ADD =================
    const handleAddMedia = (file = null) => {
        if (!mediaTitle.trim()) return;

        let url = mediaUrl;
        let type = "audio";

        if (mediaType === "upload" && file) {
            url = URL.createObjectURL(file);
            type = file.type.startsWith("video") ? "video" : "audio";
        }

        setMedia([
            ...media,
            {
                id: Date.now(),
                title: mediaTitle,
                type,
                url,
            },
        ]);

        // reset
        setMediaModal(false);
        setMediaTitle("");
        setMediaUrl("");
    };

    // ================= DELETE =================
    const handleDeleteImage = (index) => {
        setGallery(gallery.filter((_, i) => i !== index));
    };

    const handleDeleteMedia = (id) => {
        setMedia(media.filter((item) => item.id !== id));
    };

    return (
        <div className="min-h-screen bg-[#F8F9FB] pb-16">

            {/* ================= EDIT MODAL ================= */}
            {editModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white w-[400px] p-6 rounded-2xl relative">

                        <button
                            onClick={() => setEditModal(false)}
                            className="absolute top-3 right-3"
                        >
                            <X />
                        </button>

                        <h2 className="text-lg font-bold mb-4">Edit Profile</h2>

                        <label className="text-sm">Bio</label>
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            className="w-full border p-2 rounded mb-4"
                        />

                        <label className="text-sm">Price ($)</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full border p-2 rounded mb-4"
                        />

                        <button
                            onClick={() => setEditModal(false)}
                            className="w-full bg-black text-white py-2 rounded-lg"
                        >
                            Save
                        </button>
                    </div>
                </div>
            )}

            {/* ================= MEDIA MODAL ================= */}
            {mediaModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white w-[420px] p-6 rounded-2xl relative">

                        <button
                            onClick={() => setMediaModal(false)}
                            className="absolute top-3 right-3"
                        >
                            <X />
                        </button>

                        <h2 className="text-lg font-bold mb-4">Add Media</h2>

                        {/* TITLE */}
                        <label className="text-sm">Title *</label>
                        <input
                            value={mediaTitle}
                            onChange={(e) => setMediaTitle(e.target.value)}
                            className="w-full border p-2 rounded mb-4"
                            placeholder="Enter media title"
                        />

                        {/* TYPE */}
                        <label className="text-sm">Media Type</label>
                        <select
                            value={mediaType}
                            onChange={(e) => setMediaType(e.target.value)}
                            className="w-full border p-2 rounded mb-4"
                        >
                            <option value="upload">Upload File</option>
                            <option value="link">External Link</option>
                        </select>

                        {/* INPUT */}
                        {mediaType === "upload" ? (
                            <input
                                type="file"
                                accept="audio/*,video/*"
                                className="w-full mb-4"
                                onChange={(e) =>
                                    handleAddMedia(e.target.files[0])
                                }
                            />
                        ) : (
                            <input
                                value={mediaUrl}
                                onChange={(e) => setMediaUrl(e.target.value)}
                                className="w-full border p-2 rounded mb-4"
                                placeholder="Paste URL"
                            />
                        )}

                        <button
                            onClick={() => handleAddMedia()}
                            className="w-full bg-black text-white py-2 rounded-lg"
                        >
                            Add Media
                        </button>
                    </div>
                </div>
            )}

            {/* ================= HERO ================= */}
            <div className="relative h-[220px] w-full">
                <img
                    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                    className="w-full h-full object-cover"
                />

                <div className="absolute -bottom-16 left-1/4 -translate-x-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                        className="w-32 h-32 rounded-full border-[6px] border-white object-cover shadow-lg"
                    />
                </div>
            </div>

            {/* ================= CONTENT ================= */}
            <div className="max-w-6xl mx-auto px-4 mt-24 grid lg:grid-cols-12 gap-8">

                {/* LEFT */}
                <div className="lg:col-span-4 space-y-6">

                    <div className="bg-white rounded-2xl p-6 shadow text-center">
                        <h1 className="text-3xl font-bold">Alex Jean</h1>

                        <div className="flex justify-center mt-2 text-yellow-500">
                            <Star size={16} fill="currentColor" />
                            <span className="ml-1 text-sm text-gray-800">
                                4.75 rating
                            </span>
                        </div>

                        <button
                            onClick={() => setEditModal(true)}
                            className="mt-3 flex items-center gap-2 mx-auto text-sm text-blue-600"
                        >
                            <Edit size={14} /> Edit Profile
                        </button>

                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            className="mt-4 w-full text-sm border rounded-lg p-3"
                        />

                        <div className="mt-4">
                            <p className="text-red-500 font-bold text-xl">
                                ${price}
                            </p>
                            <p className="text-xs text-gray-400">
                                Starting price
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-5 shadow">
                        <p className="text-xs text-gray-400 uppercase">
                            Location
                        </p>
                        <p className="text-sm font-semibold mt-1 flex items-center gap-1">
                            <MapPin size={14} /> Colombo, Sri Lanka
                        </p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="lg:col-span-8 space-y-6">

                    <div className="bg-white rounded-2xl p-6 shadow">

                        {/* GALLERY */}
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold">Gallery</h3>

                            <label className="cursor-pointer text-blue-600 flex items-center gap-1 text-sm">
                                <Plus size={16} /> Add Photo
                                <input
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    onChange={handleAddImage}
                                />
                            </label>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {gallery.map((img, i) => (
                                <div key={i} className="relative group">
                                    <img
                                        src={img}
                                        className="rounded-xl aspect-[3/4] object-cover"
                                    />
                                    <button
                                        onClick={() =>
                                            handleDeleteImage(i)
                                        }
                                        className="absolute top-2 right-2 bg-white p-1 rounded-full shadow opacity-0 group-hover:opacity-100"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* MEDIA */}
                        <div className="mt-10">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold">
                                    Audio & Video
                                </h3>

                                <button
                                    onClick={() => setMediaModal(true)}
                                    className="text-blue-600 flex items-center gap-1 text-sm"
                                >
                                    <Plus size={16} /> Add Media
                                </button>
                            </div>

                            <div className="space-y-3">
                                {media.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                                {item.type === "video" ? (
                                                    <Play size={18} />
                                                ) : (
                                                    <Music size={18} />
                                                )}
                                            </div>

                                            <span className="text-sm font-medium">
                                                {item.title}
                                            </span>
                                        </div>

                                        <button
                                            onClick={() =>
                                                handleDeleteMedia(
                                                    item.id
                                                )
                                            }
                                            className="opacity-0 group-hover:opacity-100 text-red-500"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}