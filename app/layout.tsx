import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-raleway",
});
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "domu.ai – Automate your sales and debt collection calls with AI",
  description:
    "The easiest way to get sales and debt collection calls with AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.className} ${raleway.variable}`}
      suppressHydrationWarning
    >
      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
