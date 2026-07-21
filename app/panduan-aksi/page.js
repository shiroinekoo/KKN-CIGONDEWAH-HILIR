import ChecklistInteractive from '@/components/ChecklistInteractive';

export default function PanduanAksi() {
  const tasks = [
    'Menentukan nama merek dan logo resmi UMKM',
    'Mengambil minimal 3 foto produk berkualitas baik',
    'Membuat akun media sosial khusus bisnis (Instagram/TikTok)',
    'Membuat caption promosi pertama menggunakan Caption Generator',
    'Mendaftar QRIS untuk kemudahan transaksi non-tunai',
  ];

  return (
    <div className="bg-white p-8 rounded-xl border border-slate-200">
      <h1 className="text-2xl font-bold mb-2">Checklist Panduan Aksi Digitalisasi</h1>
      <p className="text-slate-600 mb-6">
        Centang setiap langkah yang sudah selesai Anda lakukan untuk memantau progres digitalisasi usaha Anda:
      </p>

      <ChecklistInteractive items={tasks} />
    </div>
  );
}
