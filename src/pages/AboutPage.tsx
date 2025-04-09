
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { HeartHandshake, Globe, Utensils, RecycleIcon } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Rescue_Bites</h1>
          <p className="text-xl text-muted-foreground">
            Connecting surplus food with those who need it most
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg">
            Rescue_Bites was born from a simple but powerful idea: every day, tons of perfectly edible food goes to waste while people in our communities go hungry. We knew technology could help bridge this gap.
          </p>
          
          <p className="text-lg">
            Our platform connects food businesses with surplus food to local shelters, food banks, and families in need. We use smart matching algorithms to ensure food is rescued efficiently and goes where it's needed most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6">
            <RecycleIcon className="h-12 w-12 mx-auto mb-4 text-rescue-green" />
            <h3 className="text-xl font-semibold mb-2">Reduce Food Waste</h3>
            <p className="text-muted-foreground">
              We help prevent perfectly good food from ending up in landfills
            </p>
          </Card>
          
          <Card className="text-center p-6">
            <HeartHandshake className="h-12 w-12 mx-auto mb-4 text-rescue-orange" />
            <h3 className="text-xl font-semibold mb-2">Feed Communities</h3>
            <p className="text-muted-foreground">
              We connect surplus food with people who need it most
            </p>
          </Card>
          
          <Card className="text-center p-6">
            <Globe className="h-12 w-12 mx-auto mb-4 text-rescue-green" />
            <h3 className="text-xl font-semibold mb-2">Environmental Impact</h3>
            <p className="text-muted-foreground">
              We reduce carbon emissions by keeping food out of landfills
            </p>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg mb-8">
          At Rescue_Bites, we believe that no good food should go to waste while people go hungry. Our mission is to create an efficient, community-driven ecosystem where surplus food is quickly and easily redirected to those who can use it, reducing food waste and addressing hunger in communities across the country.
        </p>

        <h2 className="text-2xl font-bold mb-6">Our Team</h2>
        <p className="text-lg mb-8">
          Rescue_Bites was founded by a team of food industry veterans, technologists, and community activists who saw firsthand the disconnect between food waste and hunger. Together, we're working to create a more sustainable and equitable food system.
        </p>

        <div className="bg-rescue-green/10 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Join the Movement</h2>
          <p className="text-lg mb-6">
            Whether you're a restaurant with leftover food, a food bank looking for donations, or simply someone who cares about reducing waste and hunger, you can make a difference with Rescue_Bites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-rescue-green text-white hover:bg-rescue-green-dark"
              asChild
            >
              <Link to="/register?type=provider">Become a Donor</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-rescue-orange text-rescue-orange hover:bg-rescue-orange/10"
              asChild
            >
              <Link to="/register?type=recipient">Become a Recipient</Link>
            </Button>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg mb-4">
          Have questions or suggestions? We'd love to hear from you!
        </p>
        <p className="mb-8">
          <strong>Email:</strong> contact@rescuebites.org<br />
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
