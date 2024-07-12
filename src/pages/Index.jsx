import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          <img src="/placeholder.svg" alt="Logo" className="mx-auto object-cover w-10 h-10" />
          <span className="ml-2 text-xl font-bold">MyApp</span>
        </div>
        <nav className="flex space-x-4">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:underline">
            About
          </NavLink>
          <NavLink to="/contact" className="hover:underline">
            Contact
          </NavLink>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to MyApp</h1>
          <p className="text-lg">Your journey to excellence starts here.</p>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="p-4 bg-gray-800 text-white text-center">
        <p>&copy; 2023 MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;