
import "./globals.css";


export async function generateMetadata()
 {  
  return{
    title: "Portfolio- Nakul",
    description: "Generated by create next app",
    // icons: [{ rel: 'icon', url: '/logo.png' }],
    };
 }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
