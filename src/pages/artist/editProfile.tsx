import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ArtistProfile() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Basic Information");

    // ✅ SAMPLE + UPLOADED GALLERY IMAGES
    const [gallery, setGallery] = useState([
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
        "https://images.unsplash.com/photo-1521337706264-a414f153a5c5",
    ]);

    const tabs = [
        "Basic Information",
        "Overview",
        "Pricing",
        "Gallery",
        "Audio & Video",
        "Social & Web",
    ];

    // ✅ HANDLE IMAGE UPLOAD
    const handleGalleryUpload = (e) => {
        const files = Array.from(e.target.files);

        const newImages = files.map((file) =>
            URL.createObjectURL(file)
        );

        setGallery((prev) => [...prev, ...newImages]);
    };

    return (
        <div className="min-h-screen bg-[#F8F9FB] pb-16">
            {/* HERO */}
            <div className="relative h-[260px] w-full">
                <img
                    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                    className="w-full h-full object-cover"
                    alt="cover"
                />

                <button className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/80 px-4 py-2 rounded-lg text-sm shadow">
                    Change Cover Photo
                </button>

                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 lg:left-1/4">
                    <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                        className="w-32 h-32 rounded-full border-[6px] border-white object-cover shadow-lg"
                        alt="avatar"
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-24 grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* SIDEBAR */}
                <div className="lg:col-span-4">
                    <div className="bg-white rounded-2xl p-6 shadow">
                        {tabs.map((tab) => (
                            <div
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-lg cursor-pointer mb-2 ${
                                    activeTab === tab
                                        ? "bg-red-100 text-red-500"
                                        : "hover:bg-gray-100"
                                }`}
                            >
                                {tab}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CONTENT */}
                <div className="lg:col-span-8">
                    <div className="bg-white rounded-2xl p-6 shadow space-y-6">

                        {/* BASIC INFO */}
                        {activeTab === "Basic Information" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input label="Stage Name" placeholder="Alex Jean" />
                                <Select label="Category" options={["Musician"]} />
                                <Input label="Location" placeholder="City, State" />
                                <Input label="Phone" placeholder="+94 777 123 456" />
                                <Input label="Email" placeholder="alex@email.com" />
                                <Input label="Short Bio" placeholder="Tell something about yourself..." />

                                <div className="md:col-span-2">
                                    <label className="text-sm text-gray-500">Tags</label>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {["artist", "indoor", "party"].map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-blue-100 text-blue-500 rounded-full text-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        <input
                                            className="border px-2 py-1 rounded"
                                            placeholder="+ Add tag"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* OVERVIEW */}
                        {activeTab === "Overview" && (
                            <div className="space-y-4">
                                <Textarea label="Biography 1" />
                                <Textarea label="Biography 2" />
                                <Textarea label="Paragraph" />
                            </div>
                        )}

                        {/* PRICING */}
                        {activeTab === "Pricing" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input label="Starting Price" placeholder="$100" />
                                <Input label="Maximum Price" placeholder="$1000" />
                                <div className="md:col-span-2 text-xs text-red-400">
                                    Clients will see your price range when booking
                                </div>
                            </div>
                        )}

                        {/* GALLERY */}
                        {activeTab === "Gallery" && (
                            <div>
                                <label className="text-sm text-gray-500">
                                    Upload Images
                                </label>

                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    className="mt-2"
                                    onChange={handleGalleryUpload}
                                />

                                {/* IMAGE PREVIEW GRID */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                                    {gallery.map((img, index) => (
                                        <div
                                            key={index}
                                            className="relative group"
                                        >
                                            <img
                                                src={img}
                                                className="w-full h-28 object-cover rounded-lg shadow"
                                                alt="gallery"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* AUDIO VIDEO */}
                        {activeTab === "Audio & Video" && (
                            <div className="space-y-3">
                                {[1, 2, 3].map((i) => (
                                    <Input
                                        key={i}
                                        label={`Media Link ${i}`}
                                        placeholder="https://..."
                                    />
                                ))}
                            </div>
                        )}

                        {/* SOCIAL */}
                        {activeTab === "Social & Web" && (
                            <div className="space-y-3">
                                <Input label="YouTube" placeholder="https://youtube.com/..." />
                                <Input label="Facebook" placeholder="https://facebook.com/..." />
                                <Input label="Instagram" placeholder="https://instagram.com/..." />
                                <Input label="Spotify" placeholder="https://spotify.com/..." />
                            </div>
                        )}

                        {/* ACTIONS */}
                        <div className="flex justify-end gap-4 pt-6">
                            <button
                                onClick={() => navigate("/account")}
                                className="text-gray-500"
                            >
                                Discard
                            </button>
                            <button
                                onClick={() => navigate("/account")}
                                className="bg-[#DB0000] text-white px-6 py-2 rounded-lg"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ================= UI COMPONENTS ================= */

function Input({ label, placeholder }) {
    return (
        <div>
            <label className="text-sm text-gray-500">{label}</label>
            <input
                className="w-full mt-1 border rounded-lg px-3 py-2"
                placeholder={placeholder}
            />
        </div>
    );
}

function Select({ label, options }) {
    return (
        <div>
            <label className="text-sm text-gray-500">{label}</label>
            <select className="w-full mt-1 border rounded-lg px-3 py-2">
                {options.map((o) => (
                    <option key={o}>{o}</option>
                ))}
            </select>
        </div>
    );
}

function Textarea({ label }) {
    return (
        <div>
            <label className="text-sm text-gray-500">{label}</label>
            <textarea
                rows={4}
                className="w-full mt-1 border rounded-lg px-3 py-2"
            />
        </div>
    );
}