import type {Metadata} from "next";
import {Kanit} from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/providers";
import Navbar from "@/components/navbar/Navbar";

const kanit = Kanit({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal"],
});

export const metadata: Metadata = {
    title: "Filmoteka",
    description: "Next.js Movie App",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={kanit.className}>
                <Providers>
                    <Navbar/>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
