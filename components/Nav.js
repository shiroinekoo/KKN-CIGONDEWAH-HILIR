import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
      <Link href="/" className="font-bold text-xl text-blue-400">
        Panduan UMKM
      </Link>
      <div className="flex gap-4 text-sm font-medium">
        <Link href="/modul-1" className="hover:text-blue-300">Modul 1</Link>
        <Link href="/modul-2" className="hover:text-blue-300">Modul 2</Link>
        <Link href="/modul-3" className="hover:text-blue-300">Modul 3</Link>
        <Link href="/panduan-aksi" className="hover:text-blue-300">Panduan Aksi</Link>
      </div>
    </nav>
  );
}
