import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miro Clone | The Visual Workspace for Innovations.",
  description:
    "Miro clone is a visual workspace for innovation where teams manage projects, design products, and build the future together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
