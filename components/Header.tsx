import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between p-5 items-center text-white">
      {/* logo */}
      <h1 className="text-4xl font-bold">Travel App</h1>

      {/* nav menu */}
      <div className="flex space-x-10">
        {/* nav link */}
        <nav className="flex space-x-5">
          <Link href="">Home</Link> <Link href="">Destinations</Link>{" "}
          <Link href="">Tour</Link> <Link href="">Contact</Link>{" "}
        </nav>
        {/* user profile */}
        <p>clerk</p>
      </div>
    </header>
  );
}
export default Header;
