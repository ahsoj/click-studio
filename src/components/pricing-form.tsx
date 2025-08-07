"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calculator,
  Check,
  Palette,
  Search,
  Wrench,
  MessageSquare,
  User,
  Mail,
  Phone,
} from "lucide-react";
import { toast } from "sonner";

export default function PricingForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [projectComplexity, setProjectComplexity] = useState("");
  const [timeline, setTimeline] = useState("");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const services = [
    {
      id: "web-design",
      name: "Web Design",
      icon: <Palette className="w-6 h-6 text-primary" />,
      basePrice: 1200,
      description: "Modern, responsive website design",
    },
    {
      id: "seo",
      name: "SEO Optimization",
      icon: <Search className="w-6 h-6 text-primary" />,
      basePrice: 800,
      description: "Search engine optimization for better visibility",
    },
    {
      id: "maintenance",
      name: "Website Maintenance",
      icon: <Wrench className="w-6 h-6 text-primary" />,
      basePrice: 150,
      description: "Monthly website maintenance and updates",
    },
    {
      id: "telegram-bot",
      name: "Telegram Bot Development",
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      basePrice: 600,
      description: "Custom Telegram bot development",
    },
  ];

  const complexityMultipliers = {
    simple: { label: "Simple", multiplier: 1 },
    moderate: { label: "Moderate", multiplier: 1.3 },
    complex: { label: "Complex", multiplier: 1.7 },
  };

  const timelineMultipliers = {
    "4-weeks": { label: "4+ weeks", multiplier: 1 },
    "2-weeks": { label: "2-3 weeks", multiplier: 1.2 },
    "1-week": { label: "Rush (1 week)", multiplier: 1.5 },
  };

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTotal = () => {
    let total = 0;

    selectedServices.forEach((serviceId) => {
      const service = services.find((s) => s.id === serviceId);
      if (service) {
        total += service.basePrice;
      }
    });

    if (
      projectComplexity &&
      complexityMultipliers[
        projectComplexity as keyof typeof complexityMultipliers
      ]
    ) {
      total *=
        complexityMultipliers[
          projectComplexity as keyof typeof complexityMultipliers
        ].multiplier;
    }

    if (
      timeline &&
      timelineMultipliers[timeline as keyof typeof timelineMultipliers]
    ) {
      total *=
        timelineMultipliers[timeline as keyof typeof timelineMultipliers]
          .multiplier;
    }

    return Math.round(total);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      toast.info("Please select at least one service");
      return;
    }

    if (!customerInfo.name || !customerInfo.email) {
      toast.info("Please fill in your name and email");
      return;
    }

    const selectedServiceNames = selectedServices
      .map((id) => services.find((s) => s.id === id)?.name)
      .join(", ");

    const quoteDetails = {
      services: selectedServiceNames,
      complexity: projectComplexity
        ? complexityMultipliers[
            projectComplexity as keyof typeof complexityMultipliers
          ].label
        : "Not specified",
      timeline: timeline
        ? timelineMultipliers[timeline as keyof typeof timelineMultipliers]
            .label
        : "Not specified",
      total: calculateTotal(),
      customer: customerInfo,
    };

    console.log("Quote Details:", quoteDetails);

    toast.success("Quote request sent successfully!", {
      description:
        "We'll contact you within 24 hours with your custom proposal.",
    });

    // Reset form
    setSelectedServices([]);
    setProjectComplexity("");
    setTimeline("");
    setCustomerInfo({ name: "", email: "", phone: "" });
  };

  const total = calculateTotal();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Services Selection */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-bricolage">
                Select Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedServices.includes(service.id)
                        ? "border-primary bg-secondary"
                        : "border-primary/10 hover:border-primary/30"
                    }`}
                    onClick={() => toggleService(service.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`${
                          selectedServices.includes(service.id)
                            ? "text-primary"
                            : "text-secondary-foreground/60"
                        }`}
                      >
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-900">
                            {service.name}
                          </h4>
                          {selectedServices.includes(service.id) && (
                            <Check className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <p className="text-sm text-secondary-foreground mt-1">
                          {service.description}
                        </p>
                        <p className="text-sm font-semibold text-primary mt-2">
                          Starting at ${service.basePrice}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Complexity */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-bricolage">
                Project Complexity
              </h3>
              <RadioGroup
                value={projectComplexity}
                onValueChange={setProjectComplexity}
              >
                {Object.entries(complexityMultipliers).map(
                  ([key, { label, multiplier }]) => (
                    <div key={key} className="flex items-center space-x-2">
                      <RadioGroupItem value={key} id={key} />
                      <Label htmlFor={key} className="flex-1 cursor-pointer">
                        {label}{" "}
                        {multiplier > 1 &&
                          `(+${Math.round((multiplier - 1) * 100)}%)`}
                      </Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-bricolage">
                Project Timeline
              </h3>
              <Select value={timeline} onValueChange={setTimeline}>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(timelineMultipliers).map(
                    ([key, { label, multiplier }]) => (
                      <SelectItem key={key} value={key}>
                        {label}{" "}
                        {multiplier > 1 &&
                          `(+${Math.round((multiplier - 1) * 100)}%)`}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            </div>

            {/* Customer Information */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-bricolage">
                Your Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={customerInfo.name}
                    onChange={(e) =>
                      setCustomerInfo((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) =>
                      setCustomerInfo((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) =>
                      setCustomerInfo((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary/90 hover:bg-primary text-white font-bricolage"
            >
              Send Quote Request
            </Button>
          </form>
        </div>

        {/* Quote Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-gray-900 font-bricolage">
                  Quote Summary
                </h3>
              </div>

              {selectedServices.length > 0 ? (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Selected Services:
                    </h4>
                    <ul className="space-y-2">
                      {selectedServices.map((serviceId) => {
                        const service = services.find(
                          (s) => s.id === serviceId
                        );
                        return service ? (
                          <li
                            key={serviceId}
                            className="flex justify-between text-sm"
                          >
                            <span>{service.name}</span>
                            <span>${service.basePrice}</span>
                          </li>
                        ) : null;
                      })}
                      {projectComplexity && (
                        <div className="text-sm">
                          <span className="text-secondary-foreground">Complexity: </span>
                          <span className="font-medium">
                            {
                              complexityMultipliers[
                                projectComplexity as keyof typeof complexityMultipliers
                              ].label
                            }
                          </span>
                        </div>
                      )}

                      {timeline && (
                        <div className="text-sm">
                          <span className="text-secondary-foreground">Timeline: </span>
                          <span className="font-medium">
                            {
                              timelineMultipliers[
                                timeline as keyof typeof timelineMultipliers
                              ].label
                            }
                          </span>
                        </div>
                      )}
                    </ul>
                  </div>

                  {/* Contact Information Display */}
                  {(customerInfo.name ||
                    customerInfo.email ||
                    customerInfo.phone) && (
                    <div className="border-t border-gray-300 pt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Contact Information:
                      </h4>
                      <div className="space-y-2 text-sm">
                        {customerInfo.name && (
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-secondary-foreground/80" />
                            <span>{customerInfo.name}</span>
                          </div>
                        )}
                        {customerInfo.email && (
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-secondary-foreground/80" />
                            <span>{customerInfo.email}</span>
                          </div>
                        )}
                        {customerInfo.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-secondary-foreground/80" />
                            <span>{customerInfo.phone}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="border-t border-gray-300 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">
                        Estimated Total:
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        ${total}
                      </span>
                    </div>
                    <p className="text-xs text-secondary-foreground/80 mt-2">
                      *Final price may vary based on specific requirements
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-secondary-foreground text-center py-8">
                  Select services to see your quote
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}