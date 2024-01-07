import './ui/global.css';
import { poppins } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={`${poppins.className} antialiased`}>{children}</div>
        <footer>footer para todos</footer>
      </body>
    </html>
  );
}
