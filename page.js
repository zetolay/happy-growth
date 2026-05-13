export default function Home() {
  return (
    <main className="p-10 text-center bg-gray-50 min-h-screen">

      {/* LOGO */}
      <img 
        src="/images/logo-1.png" 
        alt="logo" 
        className="mx-auto w-32 mb-6"
      />

      {/* JUDUL */}
      <h1 className="text-4xl font-bold mb-2 text-green-700">
        Happy Growth
      </h1>

      <p className="text-gray-500 mb-10">
        Solusi Kesehatan Holistik untuk Hidup Lebih Optimal
      </p>

      {/* PRODUK */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* ANTIOXIDANT */}
        <div className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition">
          <img src="/images/antioxidant.jpeg" className="rounded-xl mb-3"/>
          <h2 className="text-xl font-semibold">Antioxidant</h2>
          <p className="text-gray-500 text-sm">Melawan radikal bebas</p>
        </div>

        {/* DETOX */}
        <div className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition">
          <img src="/images/detox.jpeg" className="rounded-xl mb-3"/>
          <h2 className="text-xl font-semibold">Detox</h2>
          <p className="text-gray-500 text-sm">Membersihkan racun dalam tubuh</p>
        </div>

        {/* EMPOWERING */}
        <div className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition">
          <img src="/images/empowering.png" className="rounded-xl mb-3"/>
          <h2 className="text-xl font-semibold">Empowering</h2>
          <p className="text-gray-500 text-sm">Menambah energi dan fokus</p>
        </div>

        {/* HYDROGREEN 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition">
          <img src="/images/hydrogreen-1.png" className="rounded-xl mb-3"/>
          <h2 className="text-xl font-semibold">Hydrogreen</h2>
          <p className="text-gray-500 text-sm">Air sehat kaya mineral</p>
        </div>

        {/* HYDROGREEN 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition">
          <img src="/images/hydrogreen-2.png" className="rounded-xl mb-3"/>
          <h2 className="text-xl font-semibold">Hydrogreen+</h2>
          <p className="text-gray-500 text-sm">Versi premium hydrogene</p>
        </div>

        {/* PROPOLIS */}
        <div className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition">
          <img src="/images/propolis.png" className="rounded-xl mb-3"/>
          <h2 className="text-xl font-semibold">Propolis</h2>
          <p className="text-gray-500 text-sm">Meningkatkan imun tubuh</p>
        </div>

        {/* REBUILDING */}
        <div className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition">
          <img src="/images/rebuilding.png" className="rounded-xl mb-3"/>
          <h2 className="text-xl font-semibold">Rebuilding</h2>
          <p className="text-gray-500 text-sm">Memperbaiki sel tubuh</p>
        </div>

        {/* PATCH */}
        <div className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition">
          <img src="/images/patch.jpg" className="rounded-xl mb-3"/>
          <h2 className="text-xl font-semibold">Patch</h2>
          <p className="text-gray-500 text-sm">Detoks lewat kaki</p>
        </div>

      </div>

    </main>
  );
}