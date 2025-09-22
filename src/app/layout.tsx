"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<html lang="en">
			<Script src="https://cookiecdn.com/cwc.js" strategy="beforeInteractive" />
			<Script
				id="cookieWow"
				src="https://cookiecdn.com/configs/L3S3wprYGfSyuaCXPh1xrAKz"
				data-cwcid="L3S3wprYGfSyuaCXPh1xrAKz"
				strategy="beforeInteractive"
				/>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
