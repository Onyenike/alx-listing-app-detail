const Footer = () => {
    return (  
        <footer className="bg-gray-800 py-4 px-6 text-white">
      <div className="container mx-auto">
        <p>&copy; 2025 Luxury Properties. All rights reserved.</p>
        <ul className="flex space-x-4 mt-2">
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
    );
}
 
export default Footer;