import Link from 'next/link';

export default function Modul1() {
  return (
    <article className="prose max-w-none bg-white p-8 rounded-xl border border-slate-200">
      <h1 className="text-2xl font-bold mb-4">Modul 1: Pondasi Pemasaran & Identitas Brand</h1>
      <p className="text-slate-600 mb-6">
        Sebelum mulai berjualan di media sosial, penting bagi setiap pelaku UMKM untuk mengenali keunikan produk dan calon pembelinya.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Menentukan Value Proposition</h2>
      <p className="text-slate-600">
        Apa yang membuat produk Anda berbeda dari kompetitor? Apakah dari bahan baku, harga, kerapihan kemasan, atau kecepatan pengiriman?
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Foto Produk yang Menarik</h2>
      <ul className="list-disc pl-6 text-slate-600 space-y-2">
        <li>Gunakan pencahayaan alami (sinar matahari pagi/sore).</li>
        <li>Gunakan latar belakang yang bersih dan polos.</li>
        <li>Tampilkan produk dari berbagai sudut (*angle*).</li>
      </ul>

      <div className="mt-8 flex justify-between">
        <Link href="/" className="text-slate-500 hover:underline">&larr; Kembali ke Beranda</Link>
        <Link href="/modul-2" className="text-blue-600 font-semibold hover:underline">Lanjut ke Modul 2 &rarr;</Link>
      </div>
    </article>
  );
}
