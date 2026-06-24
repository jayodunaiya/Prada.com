import NavBar from "../NavBar";
import Footer from "../Footer/Footer";

export default function For_Everyone() {
  const womenImages = [
    "https://i.pinimg.com/736x/f2/a8/ce/f2a8ce5007d28f20111927292fe482fd.jpg",
    "https://i.pinimg.com/webp/1200x/5d/c7/b7/5dc7b71521510222b2e53fb9218cef21.webp",
    "https://i.pinimg.com/webp/1200x/d1/fc/1b/d1fc1b08a54ac65bb5c70f8cc56ec6a4.webp",
    "https://i.pinimg.com/736x/1c/f4/50/1cf4505f5dafab7d50257dbac48ceccb.jpg",
    "https://i.pinimg.com/736x/0e/5e/3b/0e5e3bada67e1d5853e049af5805a928.jpg"
  ];

  const menImages = [
    "https://i.pinimg.com/736x/0e/5e/3b/0e5e3bada67e1d5853e049af5805a928.jpg",
    "https://i.pinimg.com/736x/83/bb/a1/83bba10a089c27026ff81f477ebe62f6.jpg",
    "https://i.pinimg.com/736x/11/18/e2/1118e26685adb28b6f136b105e23123a.jpg",
    "https://i.pinimg.com/1200x/6a/65/d8/6a65d82bc595eb69273f5443bb54a714.jpg",
    "https://i.pinimg.com/webp/1200x/9b/22/da/9b22da9230fae512c6bbe872849f0ca4.webp"
  ];

  // Additional images for the transition gallery
  const extraImages = [
    womenImages[2], menImages[2], womenImages[3], menImages[3]
  ];

  return (
    <div className="bg-white min-h-screen text-black font-sans antialiased">
      <NavBar />

      {/* --- WOMEN'S SECTION --- */}
      <section className="pt-24 pb-12 px-6 text-center border-b border-neutral-100">
        <h1 className="text-4xl md:text-7xl font-light tracking-tighter uppercase mb-6">Women's Collection</h1>
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase">Season 2026 / New Arrivals</p>
      </section>

       {/* Big Video */}
      <div className="w-full h-auto">
        <img className="w-full h-full object-cover" src="https://i.pinimg.com/webp/736x/a4/7f/41/a47f412db036ce9d68711ca2e6dd6edf.webp" alt="" />
      </div>

      <main className="max-w-[1800px] mx-auto p-4 md:p-8 pt-5">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[900px]">
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden bg-neutral-100 group">
            <img src={womenImages[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Women's Hero" />
          </div>
          {womenImages.slice(1, 5).map((img, i) => (
            <div key={i} className="relative overflow-hidden bg-neutral-100 group">
              <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Women's Product" />
            </div>
          ))}
        </div>
      </main>

      {/* --- EXTRA GALLERY TRANSITION --- */}
      <section className="max-w-[1800px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[300px] md:h-[400px]">
          {extraImages.map((img, i) => (
            <div key={i} className="overflow-hidden bg-neutral-100">
              <img src={img} className="w-full h-full object-cover hover:opacity-80 transition-opacity" alt="Gallery" />
            </div>
          ))}
        </div>
      </section>

    {/* Men's Narrative */}
        <section className="my-24 py-6 border-y border-neutral-200">
          <div className="max-w-2xl mx-auto text-center px-4">
            <p className="text-neutral-600 leading-relaxed italic text-lg font-light">
              "Defining the new masculine silhouette through experimental utility and refined, timeless construction."
            </p>
          </div>
        </section>

      <main className="max-w-[1800px] mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[900px]">
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden bg-neutral-100 group">
            <img src={menImages[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Men's Hero" />
          </div>
          {menImages.slice(1, 5).map((img, i) => (
            <div key={i} className="relative overflow-hidden bg-neutral-100 group">
              <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Men's Product" />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}