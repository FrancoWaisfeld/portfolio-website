import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/reset.css";
import NavigationBar from "@/components/NavigationBar/NavigationBar";

export const metadata: Metadata = {
  title: "Franco Waisfeld",
  description:
    "A Full Stack Software Engineer based in San Diego, CA specializing in the Node.js and React ecosystems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <NavigationBar /> */}
        {children}
      </body>
    </html>
  );
}
