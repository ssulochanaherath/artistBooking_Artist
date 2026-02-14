export default function ArtistProfile() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* HEADER */}
            <div className="relative h-80 w-full">
                <img
                    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                    className="w-full h-full object-cover"
                    alt="Artist cover"
                />

                {/* PROFILE IMAGE */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 lg:left-24 lg:translate-x-0">
                    <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                        className="w-32 h-32 rounded-full border-4 border-white object-cover"
                        alt="Artist avatar"
                    />
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-24 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LEFT COLUMN */}
                <div className="lg:col-span-2 space-y-8">
                    {/* INFO */}
                    <div className="bg-white rounded-2xl p-6 shadow">
                        <h1 className="text-3xl font-semibold">Alex Jean</h1>
                        <p className="text-gray-500 mt-1">DJ · Producer · Musician</p>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Proin fringilla diam vitae ex posuere ultricies. In vel
                            hendrerit sapien, non aliquet nulla.
                        </p>
                    </div>

                    {/* GALLERY */}
                    <div className="bg-white rounded-2xl p-6 shadow">
                        <h2 className="text-lg font-semibold mb-4">Gallery</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <img className="rounded-xl h-40 object-cover" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f" />
                            <img className="rounded-xl h-40 object-cover" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4" />
                            <img className="rounded-xl h-40 object-cover" src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2" />
                        </div>
                    </div>

                    {/* AUDIO & VIDEO */}
                    <div className="bg-white rounded-2xl p-6 shadow">
                        <h2 className="text-lg font-semibold mb-4">Audio & Video</h2>

                        {["Live concert show", "Studio session", "DJ party mix"].map(
                            (item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between border-b py-3 last:border-none"
                                >
                                    <span>{item}</span>
                                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                </div>
                            )
                        )}
                    </div>

                    {/* REVIEWS */}
                    <div className="bg-white rounded-2xl p-6 shadow">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold">Reviews</h2>
                            <span className="text-yellow-500 font-semibold">4.75 ★</span>
                        </div>

                        {[1, 2, 3].map((r) => (
                            <div key={r} className="border-t pt-4 mt-4">
                                <div className="flex justify-between">
                                    <span className="font-medium">User Name</span>
                                    <span className="text-yellow-500 text-sm">★★★★★</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">
                                    Amazing performance, very professional and talented!
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="space-y-6">
                    {/* BOOKING CARD */}
                    <div className="bg-white rounded-2xl p-6 shadow sticky top-24">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold text-red-600">$500</span>
                            <span className="text-sm text-gray-500">per event</span>
                        </div>

                        <button className="w-full bg-red-500 text-white py-3 rounded-full font-semibold hover:bg-red-600 transition">
                            Booking Now
                        </button>
                    </div>

                    {/* LOCATION */}
                    <div className="bg-white rounded-2xl p-6 shadow">
                        <h2 className="text-lg font-semibold mb-3">Location</h2>
                        <div className="h-40 rounded-xl overflow-hidden">
                            <img
                                src="https://maps.googleapis.com/maps/api/staticmap?center=New+York&zoom=13&size=600x300"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
