import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import room1 from "@/assets/room1.jpg";
import room2 from "@/assets/room2.jpg";
import room3 from "@/assets/room3.jpg";

const Listings = () => {
  const [budget, setBudget] = useState([5000, 15000]);
  const [sortBy, setSortBy] = useState("nearest");

  const rooms = [
    {
      id: "1",
      image: room1,
      title: "Cozy Single Room Near Sandip University",
      rent: 8500,
      distance: "0.5 km from campus",
      amenities: ["wifi", "ac", "food"],
    },
    {
      id: "2",
      image: room2,
      title: "Shared Room with Study Area - MIT Pune",
      rent: 6000,
      distance: "1.2 km from campus",
      amenities: ["wifi", "food"],
    },
    {
      id: "3",
      image: room3,
      title: "Modern PG with Common Area - VIT Pune",
      rent: 9500,
      distance: "0.8 km from campus",
      amenities: ["wifi", "ac", "food"],
    },
    {
      id: "4",
      image: room1,
      title: "Spacious 1BHK Near COEP",
      rent: 12000,
      distance: "0.3 km from campus",
      amenities: ["wifi", "ac"],
    },
    {
      id: "5",
      image: room2,
      title: "Budget-Friendly Hostel - Sandip University",
      rent: 5500,
      distance: "1.5 km from campus",
      amenities: ["wifi", "food"],
    },
    {
      id: "6",
      image: room3,
      title: "Premium PG with Gym - MIT Pune",
      rent: 14000,
      distance: "0.7 km from campus",
      amenities: ["wifi", "ac", "food"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="font-poppins font-bold text-3xl md:text-4xl mb-8">Find Your Perfect Room</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-card rounded-2xl p-6 shadow-card sticky top-24">
              <h2 className="font-poppins font-semibold text-lg mb-6">Filters</h2>

              {/* Sort By */}
              <div className="mb-6">
                <Label className="font-inter mb-3 block">Sort By</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nearest">Nearest First</SelectItem>
                    <SelectItem value="low-to-high">Price: Low to High</SelectItem>
                    <SelectItem value="high-to-low">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Budget Range */}
              <div className="mb-6">
                <Label className="font-inter mb-3 block">
                  Budget: ₹{budget[0].toLocaleString()} - ₹{budget[1].toLocaleString()}
                </Label>
                <Slider
                  min={3000}
                  max={20000}
                  step={500}
                  value={budget}
                  onValueChange={setBudget}
                  className="mt-2"
                />
              </div>

              {/* Room Type */}
              <div className="mb-6">
                <Label className="font-inter mb-3 block">Room Type</Label>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Checkbox id="single" />
                    <label htmlFor="single" className="font-inter text-sm cursor-pointer">
                      Single Room
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="shared" />
                    <label htmlFor="shared" className="font-inter text-sm cursor-pointer">
                      Shared Room
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="1bhk" />
                    <label htmlFor="1bhk" className="font-inter text-sm cursor-pointer">
                      1BHK
                    </label>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <Label className="font-inter mb-3 block">Amenities</Label>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Checkbox id="wifi" />
                    <label htmlFor="wifi" className="font-inter text-sm cursor-pointer">
                      Wi-Fi
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="ac" />
                    <label htmlFor="ac" className="font-inter text-sm cursor-pointer">
                      AC
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="food" />
                    <label htmlFor="food" className="font-inter text-sm cursor-pointer">
                      Food Included
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="furnished" />
                    <label htmlFor="furnished" className="font-inter text-sm cursor-pointer">
                      Furnished
                    </label>
                  </div>
                </div>
              </div>

              <Button className="w-full" variant="outline">
                Reset Filters
              </Button>
            </div>
          </aside>

          {/* Rooms Grid */}
          <main className="flex-1">
            <div className="mb-6">
              <p className="font-inter text-muted-foreground">
                Showing {rooms.length} verified rooms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {rooms.map((room) => (
                <RoomCard key={room.id} {...room} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              <Button variant="outline" size="sm">Previous</Button>
              <Button size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Listings;
