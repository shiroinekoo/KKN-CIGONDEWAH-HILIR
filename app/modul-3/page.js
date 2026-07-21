import Link from 'next/link';

export default function Modul3() {
  return (
    <article className="prose max-w-none bg-white p-8 rounded-xl border border-slate-200">
      <h1 className="text-2xl font-bold mb-4">Modul 3: Digital Payment & E-Commerce</h1>
      <p className="text-slate-600 mb-6">
        Memudahkan transaksi pelanggan adalah kunci utama dalam meningkatkan angka penjualan.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Pemanfaatan QRIS</h2>
      <p className="text-slate-600">
        Dengan QRIS, usaha Anda dapat menerima pembayaran dari berbagai dompet digital (Gopay, OVO, Dana, ShopeePay) dan aplikasi m-Banking dalam satu kode QR.
      </p>

      <div className="mt-8 flex justify-between">
        <Link href="/modul-2" className="text-slate-500 hover:underline">&larr; Modul 2</Link>
        <Link href="/panduan-aksi" className="text-blue-600 font-semibold hover:underline">Panduan Aksi &rarr;</Link>
      </div>
    </article>
  );
}
