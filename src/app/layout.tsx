import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Pastor Patrick D. Osagie",
  description: "Pastor, Musician, Youth Leader — Continental Youth Pastor at RCCG Power Assembly",
  keywords: ["RCCG", "Pastor", "Youth Ministry", "Prayer", "Patrick Osagie"],
  openGraph: {
    title: "Pastor Patrick D. Osagie",
    description: "Continental Youth Pastor | Musician | Faith Leader",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
