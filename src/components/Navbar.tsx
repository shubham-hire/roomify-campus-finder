import { Link } from "react-router-dom";
import { Home, Search, PlusCircle, Info, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-card border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="font-poppins font-bold text-2xl bg-gradient-primary bg-clip-text text-transparent">
              Roomify
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-inter">
              Home
            </Link>
            <Link to="/listings" className="text-foreground hover:text-primary transition-colors font-inter">
              Explore Rooms
            </Link>
            <Link to="/list-room" className="text-foreground hover:text-primary transition-colors font-inter">
              List Your Room
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-inter">
              About
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button asChild variant="outline" size="sm" className="hidden md:flex">
              <Link to="/auth">
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Link>
            </Button>
            <Button asChild size="sm" className="bg-gradient-primary hover:opacity-90">
              <Link to="/list-room">
                <PlusCircle className="h-4 w-4 mr-2" />
                List Room
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
