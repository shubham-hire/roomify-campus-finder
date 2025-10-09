import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, Home, CheckCircle, IndianRupee } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ListRoom = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Room Listed Successfully!",
        description: "Our team will verify your listing within 24 hours.",
      });
    }, 1500);
  };

  const amenities = [
    { id: "wifi", label: "Wi-Fi" },
    { id: "ac", label: "Air Conditioning" },
    { id: "food", label: "Food Included" },
    { id: "laundry", label: "Laundry Service" },
    { id: "parking", label: "Parking" },
    { id: "gym", label: "Gym" },
    { id: "study", label: "Study Room" },
    { id: "security", label: "24/7 Security" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins font-bold text-3xl md:text-5xl text-white mb-4">
            List Your Room on Roomify
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-2xl mx-auto">
            Reach thousands of verified students looking for accommodation near their campus.
            Zero commission for the first 3 months!
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 text-center shadow-card">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold mb-2">Verified Students Only</h3>
              <p className="font-inter text-sm text-muted-foreground">
                All students are verified with college emails
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-card">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <IndianRupee className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold mb-2">No Commission</h3>
              <p className="font-inter text-sm text-muted-foreground">
                Free listing for the first 3 months
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-card">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold mb-2">Quick Listing</h3>
              <p className="font-inter text-sm text-muted-foreground">
                Get verified and live within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl shadow-card-hover p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Information */}
                <div>
                  <h2 className="font-poppins font-bold text-2xl mb-6">Basic Information</h2>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="title" className="font-inter">
                        Property Title <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="title"
                        placeholder="e.g., Cozy Single Room Near Sandip University"
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="description" className="font-inter">
                        Description <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your room, facilities, and nearby amenities..."
                        className="mt-2 min-h-32"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="room-type" className="font-inter">
                          Room Type <span className="text-destructive">*</span>
                        </Label>
                        <Select required>
                          <SelectTrigger id="room-type" className="mt-2">
                            <SelectValue placeholder="Select room type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="single">Single Room</SelectItem>
                            <SelectItem value="shared">Shared Room (2-3 people)</SelectItem>
                            <SelectItem value="1bhk">1BHK Apartment</SelectItem>
                            <SelectItem value="2bhk">2BHK Apartment</SelectItem>
                            <SelectItem value="hostel">Hostel Bed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="college" className="font-inter">
                          Nearest College <span className="text-destructive">*</span>
                        </Label>
                        <Select required>
                          <SelectTrigger id="college" className="mt-2">
                            <SelectValue placeholder="Select college" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sandip">Sandip University</SelectItem>
                            <SelectItem value="mit">MIT Pune</SelectItem>
                            <SelectItem value="vit">VIT Pune</SelectItem>
                            <SelectItem value="coep">COEP</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location Details */}
                <div>
                  <h2 className="font-poppins font-bold text-2xl mb-6">Location Details</h2>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="address" className="font-inter">
                        Full Address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="address"
                        placeholder="Street address, area, city"
                        className="mt-2"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="city" className="font-inter">
                          City <span className="text-destructive">*</span>
                        </Label>
                        <Input id="city" placeholder="Pune" className="mt-2" required />
                      </div>
                      <div>
                        <Label htmlFor="state" className="font-inter">
                          State <span className="text-destructive">*</span>
                        </Label>
                        <Input id="state" placeholder="Maharashtra" className="mt-2" required />
                      </div>
                      <div>
                        <Label htmlFor="pincode" className="font-inter">
                          Pincode <span className="text-destructive">*</span>
                        </Label>
                        <Input id="pincode" placeholder="411001" className="mt-2" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="distance" className="font-inter">
                        Distance from Campus (in km) <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="distance"
                        type="number"
                        step="0.1"
                        placeholder="0.5"
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div>
                  <h2 className="font-poppins font-bold text-2xl mb-6">Pricing</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="rent" className="font-inter">
                        Monthly Rent (₹) <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="rent"
                        type="number"
                        placeholder="8500"
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="deposit" className="font-inter">
                        Security Deposit (₹) <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="deposit"
                        type="number"
                        placeholder="8500"
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h2 className="font-poppins font-bold text-2xl mb-6">Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {amenities.map((amenity) => (
                      <div key={amenity.id} className="flex items-center gap-2">
                        <Checkbox id={amenity.id} />
                        <label
                          htmlFor={amenity.id}
                          className="font-inter text-sm cursor-pointer"
                        >
                          {amenity.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Photos */}
                <div>
                  <h2 className="font-poppins font-bold text-2xl mb-6">Photos</h2>
                  <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="font-inter text-muted-foreground mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="font-inter text-sm text-muted-foreground">
                      Upload at least 3 photos (PNG, JPG up to 10MB each)
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="font-poppins font-bold text-2xl mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="owner-name" className="font-inter">
                          Your Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="owner-name"
                          placeholder="John Doe"
                          className="mt-2"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="font-inter">
                          Phone Number <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="mt-2"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-inter">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-2 p-4 bg-muted rounded-xl">
                  <Checkbox id="terms" required />
                  <label htmlFor="terms" className="font-inter text-sm">
                    I confirm that all information provided is accurate and I agree to Roomify's{" "}
                    <a href="#" className="text-primary hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-primary hover:underline">
                      Listing Guidelines
                    </a>
                    .
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary hover:opacity-90 font-poppins font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit for Verification"}
                </Button>

                <p className="font-inter text-sm text-muted-foreground text-center">
                  Your listing will be reviewed and verified within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ListRoom;
