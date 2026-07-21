import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Panduan Digitalisasi UMKM',
  description: 'Panduan Praktis Digitalisasi UMKM - KKN Cigondewah Hilir',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-900 antialiased min-h-screen flex flex-col justify-between">
        <Nav />
        <main className="container mx-auto px-4 py-8 max-w-4xl flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
