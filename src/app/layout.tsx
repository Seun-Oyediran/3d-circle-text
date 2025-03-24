import type { Metadata, Viewport } from "next";
import "../../public/scss/main.scss";
import Provider from "@/state/provider";
import { ReactLenis } from "lenis/react";

export const metadata: Metadata = {
  title: "3D Circle Text",
  description: "Developed by Seun Oyediran",
};

export const viewport: Viewport = {
  minimumScale: 1,
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <html lang="en">
        <ReactLenis root options={{ infinite: true, syncTouch: true }}>
          <body>{children}</body>
        </ReactLenis>
      </html>
    </Provider>
  );
}
