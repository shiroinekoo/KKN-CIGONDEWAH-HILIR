'use client';

import { useState } from 'react';
import CopyButton from './CopyButton';
import styles from './CaptionGenerator.module.css';

export default function CaptionGenerator() {
  const [productName, setProductName] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [tone, setTone] = useState('Ramah & Persuasif');
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCaption('');

    try {
      const res = await fetch('/api/generate-caption', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productName, targetAudience, tone }),
      });
      const data = await res.json();
      setCaption(data.caption);
    } catch (err) {
      console.error(err);
      setCaption('Gagal membuat caption. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Generator Caption Promosi UMKM</h3>
      <form onSubmit={handleGenerate} className={styles.form}>
        <div className={styles.field}>
          <label>Nama Produk / Usaha:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Contoh: Keripik Pisang Lumer"
            required
          />
        </div>

        <div className={styles.field}>
          <label>Target Konsumen:</label>
          <input
            type="text"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            placeholder="Contoh: Anak muda, Mahasiswa"
          />
        </div>

        <div className={styles.field}>
          <label>Gaya Bahasa / Tone:</label>
          <select value={tone} onChange={(e) => setTone(e.target.value)}>
            <option value="Ramah & Persuasif">Ramah & Persuasif</option>
            <option value="Profesional">Profesional</option>
            <option value="Santai & Lucu">Santai & Lucu</option>
            <option value="Mendesak / Promo">Mendesak / Promo (FOMO)</option>
          </select>
        </div>

        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? 'Membuat Caption...' : 'Buat Caption Sekarang'}
        </button>
      </form>

      {caption && (
        <div className={styles.result}>
          <h4>Hasil Caption:</h4>
          <p className={styles.captionText}>{caption}</p>
          <CopyButton text={caption} />
        </div>
      )}
    </div>
  );
}
