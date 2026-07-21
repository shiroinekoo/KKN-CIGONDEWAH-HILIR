import CaptionGenerator from '@/components/CaptionGenerator';
import Link from 'next/link';

export default function Modul2() {
  return (
    <div className="space-y-6">
      <article className="bg-white p-8 rounded-xl border border-slate-200">
        <h1 className="text-2xl font-bold mb-4">Modul 2: Promosi Media Sosial & Generator Caption</h1>
        <p className="text-slate-600 mb-6">
          Media sosial adalah etalase digital utama bagi UMKM. Gunakan fitur Generator AI di bawah ini untuk membuat teks promosi secara otomatis.
        </p>

        <CaptionGenerator />
      </article>

      <div className="flex justify-between px-2">
        <Link href="/modul-1" className="text-slate-500 hover:underline">&larr; Modul 1</Link>
        <Link href="/modul-3" className="text-blue-600 font-semibold hover:underline">Modul 3 &rarr;</Link>
      </div>
    </div>
  );
}
