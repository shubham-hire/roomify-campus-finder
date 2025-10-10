import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import RoomCard from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import { Shield, MapPin, UserCheck, Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import room1 from "@/assets/room1.jpg";
import room2 from "@/assets/room2.jpg";
import room3 from "@/assets/room3.jpg";

const Index = () => {
  const featuredRooms = [
    {
      id: "1",
      image: room1,
      title: "Cozy Single Room Near Sandip University",
      rent: 7500,
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
  ];

  //only for commiting purpose

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Verified Listings Only",
      description: "Every room is personally verified by our team. No fake listings, no scams.",
    },
    {
      icon: MapPin,
      title: "Near Your College",
      description: "Find rooms within walking distance of your campus. Save time and money.",
    },
    {
      icon: UserCheck,
      title: "No Brokers. No Hassle.",
      description: "Connect directly with verified landlords. Zero brokerage fees.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      college: "MIT Pune",
      text: "Roomify helped me find my perfect hostel in just 2 days! The verification process made me feel safe.",
      rating: 5,
    },
    {
      name: "Rahul Mehta",
      college: "VIT Pune",
      text: "No broker fees, direct contact with owners, and verified listings. This is exactly what students need!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative bg-gradient-hero py-20 md:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6 text-white">
              Find Your Next Room Near College
            </h1>
            <p className="font-inter text-lg md:text-xl text-white/90 mb-8">
              Discover verified rooms, hostels, and PGs around your campus in seconds. 
              <br className="hidden md:block" />
              No brokers. No scams. Just verified, affordable housing.
            </p>
          </div>
          
          <SearchBar />
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-2">Featured Rooms</h2>
              <p className="font-inter text-muted-foreground">Handpicked verified accommodations near top colleges</p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button variant="outline">
              View All Rooms
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Roomify */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Why Choose Roomify?</h2>
            <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
              We're building the most trusted platform for student housing in India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-card text-center hover:shadow-card-hover transition-shadow">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl mb-3">{item.title}</h3>
                  <p className="font-inter text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">What Students Say</h2>
            <p className="font-inter text-muted-foreground">Join thousands of happy students who found their perfect room</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="font-inter text-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-poppins font-semibold">{testimonial.name}</p>
                  <p className="font-inter text-sm text-muted-foreground">{testimonial.college}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Landlord CTA */}
      <section className="py-16 md:py-24 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
            Own a Property Near Campus?
          </h2>
          <p className="font-inter text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            List your room for free and connect with verified students. No commission fees for the first 3 months!
          </p>
          <Button size="lg" variant="secondary" className="font-poppins font-medium">
            List Your Room Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;





