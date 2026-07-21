import { NextResponse } from 'next/server';
import { getRandomFallbackCaption } from '@/lib/fallbackCaption';

export async function POST(request) {
  try {
    const { productName, targetAudience, tone } = await request.json();

    // Menggunakan API Key jika ada, atau fallback ke template caption jika belum diset
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      const fallback = getRandomFallbackCaption();
      return NextResponse.json({ 
        caption: `[Mode Offline/Fallback]\n\n${fallback}\n\n(Produk: ${productName || 'Produk UMKM'})` 
      });
    }

    // Panggilan API AI (contoh integrasi Google Gemini API)
    const prompt = `Buatkan caption promosi media sosial yang menarik untuk produk UMKM berikut:
Nama Produk: ${productName}
Target Audience: ${targetAudience || 'Umum'}
Gaya Bahasa/Tone: ${tone || 'Ramah & Persuasif'}
Sertakan emoji relevan dan hashtag popular di Indonesia.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    const data = await response.json();
    const generatedText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      throw new Error("Gagal menghasilkan caption dari AI API.");
    }

    return NextResponse.json({ caption: generatedText });
  } catch (error) {
    console.error("Error generating caption:", error);
    return NextResponse.json(
      { caption: getRandomFallbackCaption() },
      { status: 200 }
    );
  }
}
