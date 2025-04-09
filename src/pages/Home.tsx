
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Car,
  Utensils,
  Warehouse,
  Users,
  ArrowRight,
  Leaf,
  Heart,
  MapPin,
  ShoppingBag,
} from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Rescue Food, Reduce Waste, Feed People
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
              A smart, community-driven platform connecting surplus food from restaurants 
              and stores with local shelters, food banks, and families in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link to="/donate">Donate Food</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/find">Find Food</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-rescue-neutral-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <p className="text-4xl font-bold text-rescue-green mb-2">1.3B</p>
              <p className="text-rescue-neutral-dark">Tons of food wasted yearly worldwide</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <p className="text-4xl font-bold text-rescue-orange mb-2">820M</p>
              <p className="text-rescue-neutral-dark">People suffering from hunger</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <p className="text-4xl font-bold text-rescue-green mb-2">100%</p>
              <p className="text-rescue-neutral-dark">Preventable with community action</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How Rescue_Bites Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-rescue-green/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-rescue-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">List Surplus Food</h3>
              <p className="text-rescue-neutral-dark">
                Restaurants, grocery stores, and individuals list their surplus food that would otherwise go to waste.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-rescue-green/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-rescue-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Match Nearby Needs</h3>
              <p className="text-rescue-neutral-dark">
                Our system matches food donations with nearby shelters, food banks, and families in need.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-rescue-green/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-rescue-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Distribute & Impact</h3>
              <p className="text-rescue-neutral-dark">
                Food is picked up and distributed to those who need it most, reducing waste and hunger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Types */}
      <section className="py-16 bg-rescue-green/5 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Who Can Join Rescue_Bites?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm card-hover">
              <div className="flex items-start mb-4">
                <div className="bg-rescue-green/10 p-3 rounded-lg mr-4">
                  <Utensils className="h-6 w-6 text-rescue-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Food Providers</h3>
                  <p className="text-rescue-neutral-dark mb-4">
                    Restaurants, cafes, grocery stores, bakeries, and individuals with surplus food.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-rescue-green text-rescue-green hover:bg-rescue-green/10"
                    asChild
                  >
                    <Link to="/register?type=provider">
                      Join as Provider <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm card-hover">
              <div className="flex items-start mb-4">
                <div className="bg-rescue-orange/10 p-3 rounded-lg mr-4">
                  <Warehouse className="h-6 w-6 text-rescue-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Food Recipients</h3>
                  <p className="text-rescue-neutral-dark mb-4">
                    Shelters, food banks, community organizations, and families in need.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-rescue-orange text-rescue-orange hover:bg-rescue-orange/10"
                    asChild
                  >
                    <Link to="/register?type=recipient">
                      Join as Recipient <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Leaf className="h-12 w-12 text-rescue-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Make an Impact Today</h2>
            <p className="text-lg mb-8 text-rescue-neutral-dark">
              Join our community and be part of the solution. Whether you have food to share or
              need assistance, Rescue_Bites connects you with your community.
            </p>
            <Button 
              size="lg" 
              className="bg-rescue-green text-white hover:bg-rescue-green-dark"
              asChild
            >
              <Link to="/register">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rescue-neutral-dark py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Rescue_Bites</h3>
              <p className="text-rescue-neutral-light text-sm">
                A smart, community-driven platform connecting surplus food with those in need.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-rescue-neutral-light hover:text-white">Home</Link></li>
                <li><Link to="/donate" className="text-rescue-neutral-light hover:text-white">Donate Food</Link></li>
                <li><Link to="/find" className="text-rescue-neutral-light hover:text-white">Find Food</Link></li>
                <li><Link to="/about" className="text-rescue-neutral-light hover:text-white">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-rescue-neutral-light">
                <li>contact@rescuebites.org</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
              <p className="text-rescue-neutral-light text-sm mb-2">
                Stay updated with our newsletter
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 rounded-l-md text-black w-full"
                />
                <Button className="bg-rescue-green rounded-l-none hover:bg-rescue-green-dark">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-rescue-neutral-light text-sm">
            <p>© {new Date().getFullYear()} Rescue_Bites. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
