import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Loading } from "@/components/auth/loading";

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
      <body>
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
