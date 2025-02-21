import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-emerald-950 shadow-sm min-h-25 -mb-25">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center font-secondary">
          © {(new Date).getFullYear()} <Link href="/" className="hover:underline font-primary">frutify™</Link>. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  )
}