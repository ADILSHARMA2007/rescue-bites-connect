
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  Calendar, 
  Users,
  ShoppingBag,
  Utensils
} from "lucide-react";

// Mock food donation data
const MOCK_DONATIONS = [
  {
    id: "1",
    name: "Fresh Bakery Items",
    description: "Assorted bread, pastries, and baked goods from our daily bake",
    category: "Bakery & Pastries",
    quantity: "15 items",
    expiryDate: "2025-04-10",
    pickupTime: "Today, 5-7pm",
    distance: "0.8 miles",
    location: "Downtown Bakery",
    imageUrl: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyZWFkfGVufDB8fDB8fHww"
  },
  {
    id: "2",
    name: "Restaurant Meal Surplus",
    description: "Fully prepared meals from our daily menu. Includes vegetarian options.",
    category: "Prepared Meals",
    quantity: "8 meals",
    expiryDate: "2025-04-09",
    pickupTime: "Today, 8-9pm",
    distance: "1.2 miles",
    location: "Green Table Restaurant",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: "3",
    name: "Fresh Produce Box",
    description: "Mixed vegetables and fruits, all in good condition but won't be sold tomorrow",
    category: "Fruits & Vegetables",
    quantity: "5 kg",
    expiryDate: "2025-04-12",
    pickupTime: "Tomorrow, 9-11am",
    distance: "1.5 miles",
    location: "Market Fresh Grocers",
    imageUrl: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: "4",
    name: "Dairy Products",
    description: "Assorted yogurt, milk and cheese approaching best-by date",
    category: "Dairy Products",
    quantity: "12 items",
    expiryDate: "2025-04-11",
    pickupTime: "Today, 3-6pm",
    distance: "2.1 miles",
    location: "City Supermarket",
    imageUrl: "https://images.unsplash.com/photo-1628689469838-524a4a973b8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFpcnl8ZW58MHx8MHx8fDA%3D"
  }
];

interface FoodDonationCardProps {
  donation: typeof MOCK_DONATIONS[0];
  onReserve: (id: string) => void;
}

const FoodDonationCard: React.FC<FoodDonationCardProps> = ({ donation, onReserve }) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="relative h-48">
        <img 
          src={donation.imageUrl} 
          alt={donation.name} 
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-2 right-2 bg-rescue-green">
          {donation.category}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{donation.name}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{donation.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm">
            <ShoppingBag className="h-4 w-4 mr-2 text-rescue-green" />
            <span>{donation.quantity}</span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-rescue-green" />
            <span>Expires: {new Date(donation.expiryDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2 text-rescue-green" />
            <span>{donation.pickupTime}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-rescue-green" />
            <span>{donation.location} ({donation.distance})</span>
          </div>
        </div>
        
        <Button 
          className="w-full bg-rescue-orange hover:bg-rescue-orange-dark"
          onClick={() => onReserve(donation.id)}
        >
          Reserve
        </Button>
      </CardContent>
    </Card>
  );
};

const FindFoodPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [maxDistance, setMaxDistance] = useState([5]);
  const [showFilters, setShowFilters] = useState(false);
  
  const handleReserve = (id: string) => {
    // This would connect to your backend to process the reservation
    console.log("Reserved food item:", id);
    alert(`You've reserved the food item ${id}. The donor will be notified.`);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Available Food Near You</h1>
        
        {/* Search and filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for food items, categories, or locations..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              className="flex items-center gap-1"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </Button>
            
            <div className="text-sm text-muted-foreground">
              Showing {MOCK_DONATIONS.length} results
            </div>
          </div>
          
          {showFilters && (
            <Card className="p-4">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Maximum Distance: {maxDistance}mi
                  </label>
                  <Slider
                    defaultValue={maxDistance}
                    max={10}
                    step={0.5}
                    onValueChange={setMaxDistance}
                    className="py-4"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <div className="flex flex-wrap gap-1">
                    {["All", "Prepared Meals", "Bakery", "Produce", "Dairy", "Canned"].map((cat) => (
                      <Badge 
                        key={cat} 
                        variant={cat === "All" ? "default" : "outline"}
                        className="cursor-pointer"
                      >
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mr-2"
                    onClick={() => setShowFilters(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    size="sm"
                    onClick={() => setShowFilters(false)}
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
        
        {/* View toggle - Map / List */}
        <div className="flex justify-center mb-6">
          <div className="bg-muted rounded-lg p-1 inline-flex">
            <Button variant="ghost" className="rounded-r-none bg-background">
              <Utensils className="h-4 w-4 mr-2" />
              List View
            </Button>
            <Button variant="ghost" className="rounded-l-none">
              <MapPin className="h-4 w-4 mr-2" />
              Map View
            </Button>
          </div>
        </div>
        
        {/* Food listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {MOCK_DONATIONS.map((donation) => (
            <FoodDonationCard
              key={donation.id}
              donation={donation}
              onReserve={handleReserve}
            />
          ))}
        </div>
        
        {/* Community info */}
        <Card className="bg-rescue-green/10 border-rescue-green/30 mb-8">
          <CardContent className="p-6">
            <div className="flex items-start">
              <Users className="h-10 w-10 text-rescue-green mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Join our Food Recovery Community</h3>
                <p className="text-muted-foreground">
                  Create a recipient account to get notified when new food is available in your area.
                  You'll be able to reserve items before they're visible to the general public.
                </p>
                <Button 
                  className="mt-4 bg-rescue-green hover:bg-rescue-green-dark"
                  onClick={() => window.location.href = '/register?type=recipient'}
                >
                  Create an Account
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FindFoodPage;
