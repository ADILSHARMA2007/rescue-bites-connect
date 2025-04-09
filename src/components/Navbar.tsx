
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X, Apple } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Donate Food", path: "/donate" },
    { name: "Find Food", path: "/find" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => navigate("/")}
        >
          <div className="bg-rescue-green p-1.5 rounded-lg">
            <Apple className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-xl text-rescue-green-dark hidden sm:inline-block">Rescue_Bites</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="text-foreground hover:text-primary hover:bg-primary/10"
              onClick={() => handleNavigate(item.path)}
            >
              {item.name}
            </Button>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => handleNavigate("/login")}
          >
            Log in
          </Button>
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => handleNavigate("/register")}
          >
            Sign up
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="px-0">
              <div className="px-6">
                <div className="mt-6 space-y-4">
                  {navItems.map((item) => (
                    <Button
                      key={item.name}
                      variant="ghost"
                      className="w-full justify-start text-lg"
                      onClick={() => handleNavigate(item.path)}
                    >
                      {item.name}
                    </Button>
                  ))}
                  <div className="pt-4 space-y-2">
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary"
                      onClick={() => handleNavigate("/login")}
                    >
                      Log in
                    </Button>
                    <Button
                      className="w-full bg-primary text-primary-foreground"
                      onClick={() => handleNavigate("/register")}
                    >
                      Sign up
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
