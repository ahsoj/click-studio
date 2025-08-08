"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Calculator,
  Check,
  Palette,
  Search,
  Wrench,
  MessageSquare,
} from "lucide-react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const PricingForm = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [projectComplexity, setProjectComplexity] = useState("");
  const [timeline, setTimeline] = useState("");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const services = [
    {
      id: "web-design",
      name: "Web Design",
      icon: <Palette className="w-6 h-6" />,
      basePrice: 10000,
      description: "Modern, responsive website design",
    },
    {
      id: "seo",
      name: "SEO Optimization",
      icon: <Search className="w-6 h-6" />,
      basePrice: 5000,
      description: "Search engine optimization for better visibility",
    },
    {
      id: "maintenance",
      name: "Website Maintenance",
      icon: <Wrench className="w-6 h-6" />,
      basePrice: 7500,
      description: "Monthly website maintenance and updates",
    },
    {
      id: "telegram-bot",
      name: "Telegram Bot",
      icon: <MessageSquare className="w-6 h-6" />,
      basePrice: 10000,
      description: "Custom Telegram bot development",
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US").format(price);
  };

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

  const handleConfirm = () => {
    if (selectedServices.length === 0) {
      toast.error("Please select at least one service");
      return;
    }

    if (!customerInfo.name || !customerInfo.email) {
      toast.error("Please fill in your name and email");
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
      notes: additionalNotes,
    };

    console.log("Quote Details:", quoteDetails);

    setIsDialogOpen(false);
    setSubmitted(true);

    toast.success("Quote request sent successfully!", {
      description:
        "We'll contact you within 24 hours with your custom proposal.",
    });
  };

  const total = calculateTotal();

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-24">
        <div className="bg-gray-900/50 border-gray-700 hover:bg-gray-800/50 rounded-2xl p-10 border">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-green-300/25">
            <Check className="h-12 w-12 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-foreground font-bricolage">
            Thank you!
          </h3>
          <p className="mt-2 text-muted-foreground">
            We’ve received your request and will contact you ASAP.
          </p>
          <Button
            className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => {
              setSubmitted(false);
              setSelectedServices([]);
              setProjectComplexity("");
              setTimeline("");
              setCustomerInfo({ name: "", email: "", phone: "" });
              setAdditionalNotes("");
            }}
          >
            Start a new quote
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <form className="space-y-8">
            {/* Services Selection */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 font-bricolage">
                Select Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <Card
                    key={service.id}
                    className={`cursor-pointer transition-all border-2 ${
                      selectedServices.includes(service.id)
                        ? "border-primary ring-1 ring-primary/40 bg-primary/5"
                        : "cursor-pointer bg-gray-800/50 border-gray-700 rounded-2xl p-6 border"
                    }`}
                    onClick={() => toggleService(service.id)}
                  >
                    <CardHeader className="flex flex-row items-start gap-4 pb-2">
                      <div className="flex-1 flex items-center justify-between">
                        <CardTitle className="text-lg font-semibold text-foreground">
                          <p className="text-xl font-semibold text-primary mt-2">
                            Starting at {formatPrice(service.basePrice)} ETB
                          </p>
                        </CardTitle>
                        {selectedServices.includes(service.id) && (
                          <Check className="w-5 h-5 text-primary" />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription>
                        <div className="flex items-center text-lg gap-x-2">
                          <div
                            className={`${
                              selectedServices.includes(service.id)
                                ? "text-primary"
                                : "text-muted-foreground"
                            }`}
                          >
                            {service.icon}
                          </div>
                          {service.name}
                        </div>
                        <p className="text-base">{service.description}</p>
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
              {/* Project Complexity */}
              <div className="flex-1/2">
                <h3 className="text-xl font-bold text-foreground mb-4 font-bricolage">
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
              <div className="flex-1/2">
                <h3 className="text-xl font-bold text-foreground mb-4 font-bricolage">
                  Project Timeline
                </h3>
                <Select value={timeline} onValueChange={setTimeline}>
                  <SelectTrigger className="w-full">
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
            </div>

            <Button
              type="button"
              size="lg"
              onClick={() => {
                if (selectedServices.length === 0) {
                  toast.error("Please select at least one service");
                  return;
                }
                setIsDialogOpen(true);
              }}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bricolage"
            >
              Review & Continue
            </Button>
          </form>
        </div>

        {/* Quote Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-gray-900/50 border-gray-700 rounded-2xl p-8 border">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground font-bricolage">
                  Quote Summary
                </h3>
              </div>

              {selectedServices.length > 0 ? (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Selected Services:
                    </h4>
                    <ul className="space-y-3">
                      {selectedServices.map((serviceId) => {
                        const service = services.find(
                          (s) => s.id === serviceId
                        );
                        return service ? (
                          <li
                            key={serviceId}
                            className="flex justify-between text-base"
                          >
                            <span>{service.name}</span>
                            <span>{formatPrice(service.basePrice)} ETB</span>
                          </li>
                        ) : null;
                      })}
                    </ul>
                  </div>

                  {projectComplexity && (
                    <div className="text-base">
                      <span className="text-muted-foreground">
                        Complexity:{" "}
                      </span>
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
                    <div className="text-base">
                      <span className="text-muted-foreground">Timeline: </span>
                      <span className="font-medium">
                        {
                          timelineMultipliers[
                            timeline as keyof typeof timelineMultipliers
                          ].label
                        }
                      </span>
                    </div>
                  )}

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-base md:text-lg font-bold text-foreground">
                        Estimated Total:
                      </span>
                      <span className="text-lg md:text-2xl font-bold text-primary">
                        {formatPrice(total)} ETB
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      *Final price may vary based on specific requirements
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-8">
                  Select services to see your quote
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader className="px-4">
            <DialogTitle>Confirm your package</DialogTitle>
            <DialogDescription>
              Review your selections and provide your contact details. We&#39;ll
              reach out ASAP.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 p-4">
            <div>
              <h4 className="font-semibold text-foreground">
                Selected Services
              </h4>
              <ul className="mt-2 space-y-2 text-base">
                {selectedServices.map((serviceId) => {
                  const service = services.find((s) => s.id === serviceId);
                  return service ? (
                    <li key={serviceId} className="flex justify-between">
                      <span>{service.name}</span>
                      <span>${service.basePrice}</span>
                    </li>
                  ) : null;
                })}
              </ul>
            </div>

            {projectComplexity && (
              <div className="text-base">
                <span className="text-muted-foreground">Complexity: </span>
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
              <div className="text-base">
                <span className="text-muted-foreground">Timeline: </span>
                <span className="font-medium">
                  {
                    timelineMultipliers[
                      timeline as keyof typeof timelineMultipliers
                    ].label
                  }
                </span>
              </div>
            )}

            <div className="flex justify-between items-center border-t pt-3">
              <span className="text-lg font-bold text-foreground">
                Estimated Total:
              </span>
              <span className="text-2xl font-bold text-primary">${total}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="spcae-y-3">
                <Label htmlFor="modal-name">Name *</Label>
                <Input
                  id="modal-name"
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
              <div className="spcae-y-3">
                <Label htmlFor="modal-email">Email *</Label>
                <Input
                  id="modal-email"
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
              <div className="md:col-span-2 space-y-3">
                <Label htmlFor="modal-phone">Phone Number</Label>
                <Input
                  id="modal-phone"
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
              <div className="md:col-span-2 space-y-3">
                <Label htmlFor="requirements">Additional requirements</Label>
                <Textarea
                  id="requirements"
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  placeholder="Tell us more about your project goals, scope, and requirements..."
                  className="max-h-60"
                  rows={4}
                />
              </div>
            </div>
          </div>

          <DialogFooter className="px-6">
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Back
            </Button>
            <Button
              onClick={handleConfirm}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Confirm & Send
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PricingForm;

// interface Package {
//   id: string;
//   name: string;
//   price: number;
//   features: string[];
//   popular?: boolean;
// }

// const packages: Package[] = [
//   {
//     id: "basic",
//     name: "Basic Website",
//     price: 15000,
//     features: [
//       "5-page responsive website",
//       "Modern design",
//       "Mobile optimization",
//       "Basic SEO setup",
//       "Contact form",
//       "3 months support",
//     ],
//   },
//   {
//     id: "premium",
//     name: "Business Website",
//     price: 25000,
//     popular: true,
//     features: [
//       "10-page responsive website",
//       "Custom design",
//       "E-commerce ready",
//       "Advanced SEO",
//       "Analytics integration",
//       "Social media integration",
//       "6 months support",
//       "Content management system",
//     ],
//   },
//   {
//     id: "enterprise",
//     name: "Enterprise Solution",
//     price: 50000,
//     features: [
//       "Unlimited pages",
//       "Custom functionality",
//       "Advanced e-commerce",
//       "Multi-language support",
//       "Third-party integrations",
//       "Performance optimization",
//       "12 months support",
//       "Training included",
//     ],
//   },
//   {
//     id: "telegram-bot",
//     name: "Telegram Bot",
//     price: 10000,
//     features: [
//       "Custom bot development",
//       "User interaction features",
//       "Database integration",
//       "Admin panel",
//       "Analytics dashboard",
//       "3 months maintenance",
//     ],
//   },
// ];
