# Panduan UMKM Naik Kelas

Website panduan interaktif untuk pelaku UMKM konveksi, kuliner, dan produk
kreatif: cara motret produk pakai HP, bikin caption jualan, konsisten posting
di media sosial, plus fitur generator caption otomatis pakai Gemini AI.

Dibangun dengan [Next.js](https://nextjs.org) (App Router), tanpa database —
siap deploy langsung ke [Vercel](https://vercel.com).

## Struktur Halaman

- `/` — Beranda
- `/modul-1` — Fotografi Produk Pakai HP
- `/modul-2` — Caption Penjualan + Generator AI (Gemini)
- `/modul-3` — Post & Konsistensi
- `/panduan-aksi` — Template siap pakai & Checklist interaktif

Fitur generator caption ada di API route `app/api/generate-caption/route.js`
— ini yang menghubungkan ke Gemini API. **Kalau `GEMINI_API_KEY` belum
diisi, fitur ini tetap jalan pakai generator lokal sederhana** (lihat
`lib/fallbackCaption.js`), jadi kamu tetap bisa coba tampilannya duluan
sebelum API key siap.

## 1. Jalankan di Komputer Sendiri (Lokal)

Butuh [Node.js](https://nodejs.org) versi 18 ke atas.

```bash
# 1. install dependencies
npm install

# 2. (opsional) siapkan API key Gemini
cp .env.example .env.local
# lalu buka .env.local dan isi GEMINI_API_KEY dengan key asli kamu

# 3. jalankan mode development
npm run dev
```

Buka `http://localhost:3000` di browser.

### Cara dapat API key Gemini (gratis)

1. Buka [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Login pakai akun Google
3. Klik **Create API Key**, salin key-nya
4. Tempel ke file `.env.local` pada baris `GEMINI_API_KEY=...`

## 2. Upload ke GitHub

```bash
git init
git add .
git commit -m "Website panduan UMKM"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA_REPO.git
git push -u origin main
```

Ganti `USERNAME/NAMA_REPO` dengan repo GitHub kamu sendiri (buat dulu repo
kosong di GitHub sebelum push).

> File `.env.local` **tidak akan ikut ter-upload** ke GitHub (sudah
> diabaikan lewat `.gitignore`) — ini penting supaya API key kamu tidak
> bocor ke publik.

## 3. Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com), login/daftar (bisa langsung pakai akun GitHub)
2. Klik **Add New → Project**
3. Pilih repo GitHub yang baru saja kamu push
4. Vercel otomatis mendeteksi ini project Next.js — biarkan pengaturan default
5. Sebelum klik **Deploy**, buka bagian **Environment Variables**, tambahkan:
   - Name: `GEMINI_API_KEY`
   - Value: (API key Gemini kamu)
6. Klik **Deploy**, tunggu 1-2 menit

Setelah selesai, website kamu bisa diakses lewat URL yang diberikan Vercel
(bisa dihubungkan ke domain sendiri juga lewat menu **Domains** di project
settings).

### Update API key nanti

Kalau mau ganti/tambah API key setelah project sudah live: buka project di
Vercel → **Settings → Environment Variables** → edit nilainya → lalu
**redeploy** (Vercel → tab Deployments → titik tiga pada deployment terakhir
→ Redeploy).

## Struktur Folder

```
app/
  layout.js              → kerangka halaman (nav, font, footer)
  globals.css             → warna, tipografi, style bersama
  page.js                 → halaman beranda
  modul-1/page.js         → Modul 1: Fotografi
  modul-2/page.js         → Modul 2: Caption
  modul-3/page.js         → Modul 3: Konsistensi
  panduan-aksi/page.js    → Template & Checklist
  api/generate-caption/route.js → API route ke Gemini
components/
  Nav.js, Footer.js
  CaptionGenerator.js     → form + preview generator caption (client component)
  ChecklistInteractive.js → checklist yang bisa dicentang
  CopyButton.js           → tombol salin template
lib/
  fallbackCaption.js      → generator caption cadangan tanpa API key
```

## Mengubah Isi Konten

Semua teks modul ada langsung di file halaman masing-masing (`app/modul-1/page.js`,
dst) sebagai JSX biasa — tinggal edit teksnya, tidak perlu paham React
mendalam untuk mengubah kalimat atau tabel.
