
import "./globals.css";

export const metadata = {
  title: "Zentry - Where Gamers Belong",
  description: "Welcome to Zentry, your gateway to an exciting gaming universe. Explore, compete, and connect with a passionate community of gamers just like you. Level up your gaming experience with us!",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
