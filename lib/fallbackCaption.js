export const fallbackCaptions = [
  "Dapatkan produk berkualitas terbaik untuk kebutuhan harian Anda! Promo terbatas minggu ini, jangan sampai kehabisan. Tautan pembelian ada di bio! 🛒✨ #UMKMIndonesia #ProdukLokal",
  "Kualitas terjamin dengan harga terjangkau! Spesial hari ini ada diskon menarik khusus pelanggan setia. Hubungi kami via DM/WhatsApp untuk pemesanan! 📦🔥 #UMKMBisa #SolusiBelanja",
  "Solusi praktis dan hemat untuk Anda! Buat harimu lebih mudah dengan produk unggulan kami. Klik link di bio untuk order sekarang! 💡🎉 #SupportLocal"
];

export function getRandomFallbackCaption() {
  const randomIndex = Math.floor(Math.random() * fallbackCaptions.length);
  return fallbackCaptions[randomIndex];
}
