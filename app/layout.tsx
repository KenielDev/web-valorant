export const metadata = {
  title: "Next App",
  description: "Generated by create next app",
};
import localFont from "next/font/local";
import "../global.css";
export const TungstenBold = localFont({
  src: "../public/util/Tungsten-Bold.ttf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: `url("/img/background.png")`,
          backgroundPosition: "center",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
        }}
        className={`${TungstenBold.className} h-full `}
      >
        {children}
      </body>
    </html>
  );
}
