import "./globals.css";
import type { Metadata } from "next";
import { Archivo_Black, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { RouteLoader } from "@/components/route-loader";
import { FloatingWhatsAppButton } from "@/components/ui/floating-whatsapp-button";

const display = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://andres-agudelo.dev"),
  title: {
    default: "Andrés Agudelo | AI Builder",
    template: "%s | Andrés Agudelo",
  },
  description:
    "AI Builder y desarrollador de producto. Diseño agentes de IA, sistemas escalables y experiencias frontend con SDD y Clean Architecture.",
  keywords: [
    "AI Builder",
    "Agentes de IA",
    "Arquitectura de software",
    "Clean Architecture",
    "Spec-Driven Development",
    "React",
    "Next.js",
    "React Native",
    "JavaScript",
    "TypeScript",
    "Desarrollo Web",
    "UI/UX",
    "Manizales",
    "Colombia",
    "Andrés Agudelo",
  ],
  authors: [{ name: "Andrés Agudelo" }],
  creator: "Andrés Agudelo",
  publisher: "Andrés Agudelo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://andres-agudelo.dev",
    siteName: "Andrés Agudelo - AI Builder",
    title: "Andrés Agudelo | AI Builder",
    description:
      "Agentes de IA, sistemas de producto y arquitectura de software para construir productos escalables.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Andrés Agudelo - AI Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrés Agudelo | AI Builder",
    description:
      "Agentes de IA, sistemas de producto y arquitectura de software para construir productos escalables.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "tu-codigo-de-verificacion-de-google", // Necesitarás agregar tu código de verificación de Google Search Console
  },
  alternates: {
    canonical: "https://andres-agudelo.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0B111D" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body className={`${display.variable} ${body.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RouteLoader />
          <div className="flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
          </div>
          <Toaster />
          <FloatingWhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
