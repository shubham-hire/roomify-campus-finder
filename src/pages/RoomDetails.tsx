import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Wifi,
  Wind,
  Utensils,
  Bed,
  CheckCircle,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import room1 from "@/assets/room1.jpg";
import room2 from "@/assets/room2.jpg";
import room3 from "@/assets/room3.jpg";

const RoomDetails = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);

  const images = [room1, room2, room3];

  const similarRooms = [
    {
      id: "2",
      image: room2,
      title: "Shared Room with Study Area",
      rent: 6000,
      distance: "1.2 km from campus",
      amenities: ["wifi", "food"],
    },
    {
      id: "3",
      image: room3,
      title: "Modern PG with Common Area",
      rent: 9500,
      distance: "0.8 km from campus",
      amenities: ["wifi", "ac", "food"],
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Image Carousel */}
        <div className="relative mb-8 rounded-2xl overflow-hidden">
          <img
            src={images[currentImage]}
            alt="Room"
            className="w-full h-96 md:h-[500px] object-cover"
          />
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2"
            onClick={prevImage}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImage ? "bg-white w-8" : "bg-white/50"
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Details */}
          <div className="lg:col-span-2">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="font-poppins font-bold text-3xl mb-2">
                  Cozy Single Room Near Sandip University
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span className="font-inter">0.5 km from Sandip University</span>
                </div>
              </div>
              <Badge className="bg-primary text-primary-foreground flex items-center gap-1">
                <CheckCircle className="h-4 w-4" />
                Verified
              </Badge>
            </div>

            <div className="flex items-baseline gap-2 mb-8">
              <span className="font-poppins font-bold text-4xl text-primary">₹8,500</span>
              <span className="text-muted-foreground font-inter">/month</span>
            </div>

            {/* Details Grid */}
            <div className="bg-card rounded-2xl p-6 shadow-card mb-8">
              <h2 className="font-poppins font-semibold text-xl mb-4">Room Details</h2>
              <div className="grid grid-cols-2 gap-4 font-inter">
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Room Type</p>
                  <p className="font-medium">Single Room</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Deposit</p>
                  <p className="font-medium">₹8,500</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Availability</p>
                  <p className="font-medium text-green-600">Available Now</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Furnishing</p>
                  <p className="font-medium">Fully Furnished</p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-card rounded-2xl p-6 shadow-card mb-8">
              <h2 className="font-poppins font-semibold text-xl mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <Wifi className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <span className="font-inter">High-Speed Wi-Fi</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <Wind className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <span className="font-inter">AC</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <Utensils className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <span className="font-inter">Food Included</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <Bed className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <span className="font-inter">Furnished</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-card rounded-2xl p-6 shadow-card mb-8">
              <h2 className="font-poppins font-semibold text-xl mb-4">Description</h2>
              <p className="font-inter text-muted-foreground leading-relaxed">
                This cozy single room is perfect for students looking for a comfortable and affordable
                stay near Sandip University. The room comes fully furnished with a study table, chair,
                wardrobe, and a comfortable bed. High-speed Wi-Fi is included, making it ideal for
                online classes and assignments. The property is well-maintained with 24/7 security,
                regular cleaning services, and a friendly environment.
              </p>
            </div>

            {/* Map */}
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <h2 className="font-poppins font-semibold text-xl mb-4">Location</h2>
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <MapPin className="h-12 w-12 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Owner Contact Card */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 shadow-card sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-poppins font-semibold text-xl">
                  RS
                </div>
                <div>
                  <p className="font-poppins font-semibold">Rajesh Singh</p>
                  <p className="font-inter text-sm text-muted-foreground">Property Owner</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span className="font-inter text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span className="font-inter text-sm">rajesh.singh@email.com</span>
                </div>
              </div>

              <Button className="w-full mb-3 bg-gradient-primary hover:opacity-90">
                <Phone className="h-4 w-4 mr-2" />
                Call Owner
              </Button>
              <Button variant="outline" className="w-full">
                <Mail className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </div>
          </div>
        </div>

        {/* Similar Rooms */}
        <section className="mt-16">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl mb-8">Similar Rooms Nearby</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarRooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default RoomDetails;
