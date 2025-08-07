"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import {toast} from "sonner"
import { useState } from "react";

interface Package {
  id: string;
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

const packages: Package[] = [
  {
    id: "basic",
    name: "Basic Website",
    price: 25000,
    features: [
      "5-page responsive website",
      "Modern design",
      "Mobile optimization",
      "Basic SEO setup",
      "Contact form",
      "3 months support"
    ]
  },
  {
    id: "premium",
    name: "Business Website",
    price: 45000,
    popular: true,
    features: [
      "10-page responsive website",
      "Custom design",
      "E-commerce ready",
      "Advanced SEO",
      "Analytics integration",
      "Social media integration",
      "6 months support",
      "Content management system"
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise Solution",
    price: 75000,
    features: [
      "Unlimited pages",
      "Custom functionality",
      "Advanced e-commerce",
      "Multi-language support",
      "Third-party integrations",
      "Performance optimization",
      "12 months support",
      "Training included"
    ]
  },
  {
    id: "telegram-bot",
    name: "Telegram Bot",
    price: 15000,
    features: [
      "Custom bot development",
      "User interaction features",
      "Database integration",
      "Admin panel",
      "Analytics dashboard",
      "3 months maintenance"
    ]
  }
];


export default function PackageSelector () {
      const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handlePackageSelect = (pkg: Package) => {
    setSelectedPackage(pkg);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPackage) {
      toast.error("Package Required",{
        description: "Please select a package before submitting.",
      });
      return;
    }

    // Log the order data (in a real app, this would be sent to backend)
    console.log("Package Order:", {
      package: {
        id: selectedPackage.id,
        name: selectedPackage.name,
        price: selectedPackage.price
      },
      contact: contactData,
      currency: "ETB"
    });

    toast.success("Order Submitted!",{
      description: "We've received your package order. Our team will contact you within 24 hours.",
    });

    // Reset form
    setContactData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
    setSelectedPackage(null);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price);
  };
    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id}
              className={`relative cursor-pointer bg-[url(/678892d67628c8a8e25ccada_Hero-BG.webp)] bg-brand-dark bg-cover border-gray-700 transition-all duration-200 hover:scale-105 ${
                selectedPackage?.id === pkg.id 
                  ? 'ring-2 ring-brand-blue border-brand-blue' 
                  : 'border-border hover:border-brand-blue/50'
              } ${pkg.popular ? 'border-primary' : ''}`}
              onClick={() => handlePackageSelect(pkg)}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-bold text-foreground">{pkg.name}</CardTitle>
                <div className="text-3xl font-bold text-gradient">
                  {formatPrice(pkg.price)} ETB
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-lime mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {selectedPackage?.id === pkg.id && (
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <p className="text-primary font-medium text-center">Selected</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        {selectedPackage && (
          <Card className="max-w-2xl mx-auto bg-brand-dark bg-cover border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Order {selectedPackage.name}
              </CardTitle>
              <p className="text-center text-muted-foreground">
                Total: <span className="text-2xl font-bold text-gradient">
                  {formatPrice(selectedPackage.price)} ETB
                </span>
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-foreground text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      autoComplete="full-name"
                      value={contactData.name}
                      onChange={handleContactChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-foreground text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={contactData.email}
                      onChange={handleContactChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-foreground text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      autoComplete="phone-number"
                      value={contactData.phone}
                      onChange={handleContactChange}
                      required
                      placeholder="+251 9XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-foreground text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <Input
                      type="text"
                      name="company"
                      autoComplete="company"
                      value={contactData.company}
                      onChange={handleContactChange}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground text-sm font-medium mb-2">
                    Additional Requirements
                  </label>
                  <Textarea
                    name="message"
                    value={contactData.message}
                    onChange={handleContactChange}
                    rows={6}
                    className="max-h-96"
                    placeholder="Tell us about any specific requirements or questions..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-medium"
                >
                  Submit Order Request
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {!selectedPackage && (
          <div className="text-center">
            <p className="text-muted-foreground text-lg">
              Select a package above to continue with your order
            </p>
          </div>
        )}
        </>
    )
}