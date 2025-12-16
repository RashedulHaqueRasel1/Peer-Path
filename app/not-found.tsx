// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 px-4">
      <div className="relative max-w-md w-full rounded-2xl bg-white p-10 text-center shadow-xl">
        {/* Development Badge */}
        {process.env.NODE_ENV === "development" && (
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-800 shadow animate-pulse ">
            ⚠ Development Mode
          </span>
        )}

        {/* 404 Text */}
        <h1 className="text-8xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent animate-pulse">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Extra Dev Info */}
        {process.env.NODE_ENV === "development" && (
          <p className="mt-3 text-sm text-red-500">
            This page is currently shown in <strong>development</strong>{" "}
            environment.
          </p>
        )}

        {/* Button */}
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-white font-medium shadow-md transition hover:bg-red-700 hover:shadow-lg"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
