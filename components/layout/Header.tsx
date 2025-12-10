
import Link  from "next/link";
const Header = () => {
    return (  
        <header className="bg-white py-4 px-6 shadow-md">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-gray-800">Luxury Properties</h1>
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/properties">
              <h1 className="text-gray-600 hover:text-gray-800">Properties</h1>
            </Link>
          </li>
          <li>
            <Link href="/about">
           <h1 className="text-gray-600 hover:text-gray-800">About</h1>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <h1 className="text-gray-600 hover:text-gray-800">Contact</h1>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    );
}
 
export default Header;