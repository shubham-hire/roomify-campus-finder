import { Link } from "react-router-dom";
import { MapPin, Wifi, Utensils, Wind, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface RoomCardProps {
  id: string;
  image: string;
  title: string;
  rent: number;
  distance: string;
  amenities: string[];
  verified?: boolean;
}

const amenityIcons: Record<string, any> = {
  wifi: Wifi,
  food: Utensils,
  ac: Wind,
};

const RoomCard = ({ id, image, title, rent, distance, amenities, verified = true }: RoomCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-card-hover">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {verified && (
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            Verified
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="font-poppins font-semibold text-lg mb-2 line-clamp-1">{title}</h3>
        
        <div className="flex items-center gap-2 text-muted-foreground mb-3">
          <MapPin className="h-4 w-4" />
          <span className="font-inter text-sm">{distance}</span>
        </div>

        <div className="flex gap-2 mb-3">
          {amenities.slice(0, 3).map((amenity) => {
            const Icon = amenityIcons[amenity.toLowerCase()];
            return Icon ? (
              <div key={amenity} className="p-2 bg-accent rounded-lg">
                <Icon className="h-4 w-4 text-accent-foreground" />
              </div>
            ) : null;
          })}
        </div>

        <div className="flex items-baseline gap-1">
          <span className="font-poppins font-bold text-2xl text-primary">₹{rent.toLocaleString()}</span>
          <span className="text-muted-foreground font-inter text-sm">/month</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full" variant="outline">
          <Link to={`/room/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
