import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="mx-12">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
