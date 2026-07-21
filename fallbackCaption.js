// Generator caption sederhana berbasis template, dipakai sebagai FALLBACK
// kalau GEMINI_API_KEY belum diisi di .env.local. Begitu API key asli
// dipasang, generate-caption/route.js otomatis pakai Gemini, bukan fungsi ini.

const HOOKS_BY_CATEGORY = {
  Konveksi: [
    'Udah beli baju mahal tapi tetep aja nggak nyaman dipakai seharian? 😩',
    'Lemari penuh baju, tapi yang enak dipakai kerja cuma satu-dua? 🤔',
  ],
  Kuliner: [
    'Laper tapi bingung mau makan apa yang enak & nggak bikin kantong bolong? 😋',
    'Udah coba banyak tempat makan tapi rasanya gitu-gitu aja? 🍽️',
  ],
  'Produk Kreatif': [
    'Cari kado atau barang unik yang nggak pasaran? ✨',
    'Pengen punya sesuatu yang beda dari yang lain-lain? 🎨',
  ],
};

const HASHTAG_CATEGORY = {
  Konveksi: '#konveksilokal',
  Kuliner: '#kulinerlokal',
  'Produk Kreatif': '#produkkreatif',
};

function formatRupiah(n) {
  const num = Number(n) || 0;
  return 'Rp' + num.toLocaleString('id-ID');
}

function slug(text) {
  return String(text || '').replace(/\s+/g, '').toLowerCase();
}

export function generateFallbackCaption(data) {
  const { kategori, namaProduk, keunggulan, harga, hargaCoret, namaToko, lokasi, variantSeed = 0 } =
    data;

  const poin = String(keunggulan || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const poinText = poin.slice(0, 3).join(', ');

  const hookList = HOOKS_BY_CATEGORY[kategori] || HOOKS_BY_CATEGORY.Konveksi;
  const hook = hookList[variantSeed % hookList.length];

  const problem =
    'Pasti pernah kan ngalamin itu — udah keluar uang tapi hasilnya bikin kecewa.';

  const solution = `Nah, ${namaProduk} dari ${namaToko} ini jawabannya.${
    poinText ? ' ' + poinText.charAt(0).toUpperCase() + poinText.slice(1) + '.' : ''
  }`;

  let priceLine = formatRupiah(harga);
  if (hargaCoret) {
    priceLine = `${formatRupiah(harga)} (dari ${formatRupiah(hargaCoret)})`;
  }

  const ctaOptions = [
    `Stok terbatas! Chat "${String(namaProduk).split(' ')[0].toUpperCase()}" ke WA di bio buat pesan sekarang 👇`,
    'Yuk langsung DM atau chat WA di bio, kita bantu pilihin yang paling cocok buat kamu 👇',
  ];
  const cta = ctaOptions[variantSeed % ctaOptions.length];

  const hashtags = [
    `#${slug(namaProduk)}`,
    HASHTAG_CATEGORY[kategori] || '#produklokal',
    lokasi ? `#umkm${slug(lokasi)}` : '#umkmindonesia',
    '#produklokal',
    `#${slug(namaToko)}`,
  ].join(' ');

  return { hook, problem, solution, priceLine, cta, hashtags };
}
