function Nav() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
                <li className="hover:underline">Home</li>
                <li className="hover:underline">Articles</li>
                <li className="hover:underline">About</li>
                <li className="hover:underline">Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;