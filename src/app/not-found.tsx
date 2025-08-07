import Link from "next/link";

export default function NotFound () {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-4">Oops! Page not found</p>
        <Link href="/" className="text-brand-blue/80 hover:text-brand-blue underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
};