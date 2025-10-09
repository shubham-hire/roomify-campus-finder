import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SearchBar = () => {
  const [college, setCollege] = useState("");
  const [budget, setBudget] = useState("");

  return (
    <div className="bg-card rounded-2xl shadow-card p-4 md:p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select value={college} onValueChange={setCollege}>
          <SelectTrigger className="font-inter">
            <SelectValue placeholder="Select your college" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sandip">Sandip University</SelectItem>
            <SelectItem value="mit">MIT Pune</SelectItem>
            <SelectItem value="vit">VIT Pune</SelectItem>
            <SelectItem value="coep">COEP</SelectItem>
          </SelectContent>
        </Select>

        <Select value={budget} onValueChange={setBudget}>
          <SelectTrigger className="font-inter">
            <SelectValue placeholder="Budget (₹/month)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5000">Under ₹5,000</SelectItem>
            <SelectItem value="10000">₹5,000 - ₹10,000</SelectItem>
            <SelectItem value="15000">₹10,000 - ₹15,000</SelectItem>
            <SelectItem value="20000">Above ₹15,000</SelectItem>
          </SelectContent>
        </Select>

        <Button className="bg-gradient-primary hover:opacity-90 font-poppins font-medium">
          <Search className="h-4 w-4 mr-2" />
          Search Rooms
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
