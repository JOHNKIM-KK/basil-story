import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 text-green-800 ">
      <Link href="/">
        <h1 className="text-3xl font-bold">{"Basil Story"}</h1>
      </Link>

      <nav className="flex gap-4">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/story">story</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}
