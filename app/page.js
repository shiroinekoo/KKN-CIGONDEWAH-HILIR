import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-10 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Panduan Praktis Digitalisasi UMKM
        </h1>
        <p className="mt-4 text-slate-600 text-lg">
          Tingkatkan penjualan dan jangkauan produk UMKM Anda melalui strategi pemasaran digital sederhana dan alat bantu berbasis AI.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/modul-1"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Mulai Belajar (Modul 1)
          </Link>
          <Link
            href="/panduan-aksi"
            className="px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition"
          >
            Panduan Aksi
          </Link>
        </div>
      </section>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl border border-slate-200">
          <h3 className="font-bold text-lg mb-2">Modul 1: Dasar Branding</h3>
          <p className="text-slate-600 text-sm mb-4">Pahami cara membangun identitas merek dan keunggulan produk Anda.</p>
          <Link href="/modul-1" className="text-blue-600 font-medium text-sm hover:underline">Baca Selengkapnya &rarr;</Link>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200">
          <h3 className="font-bold text-lg mb-2">Modul 2: Media Sosial</h3>
          <p className="text-slate-600 text-sm mb-4">Strategi konten dan pemanfaatan Caption AI untuk promosi jualan.</p>
          <Link href="/modul-2" className="text-blue-600 font-medium text-sm hover:underline">Baca Selengkapnya &rarr;</Link>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200">
          <h3 className="font-bold text-lg mb-2">Modul 3: Akses Pasar</h3>
          <p className="text-slate-600 text-sm mb-4">Mulai berjualan di e-commerce dan menggunakan fitur pembayaran digital.</p>
          <Link href="/modul-3" className="text-blue-600 font-medium text-sm hover:underline">Baca Selengkapnya &rarr;</Link>
        </div>
      </div>
    </div>
  );
}
