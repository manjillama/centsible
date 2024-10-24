import AuthProvider from "@/context/auth-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import Navbar from "@/components/navbar";
import { TransactionProvider } from "@/context/transaction-provider";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);

  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>centsible. The budget app that you always wanted.</title>
      <body className={`${inter.className} bg-neutral-900  text-white`}>
        <TransactionProvider>
          <AuthProvider session={session}>
            <Navbar />
            <div className="py-10 max-w-screen-xl	mx-auto">{children}</div>
            <footer className="py-8 text-neutral-600 text-center border-t-[1px] border-neutral-700">
              centsible. &copy; The budget app that you always wanted.
            </footer>
          </AuthProvider>
        </TransactionProvider>
      </body>
    </html>
  );
}
