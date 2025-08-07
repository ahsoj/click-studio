"use client";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (args: { url: string }) => void;
      // You can add more Calendly methods here if needed
    };
  }
}

export default function CalendlyEmbedComponent() {
  const triggerPopup = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/dev4josh/30min?background_color=000000&text_color=ffffff",
    });
    return false;
  };
  return (
    <Button onClick={triggerPopup} variant="hero" size="lg">
      Book Your Call Now
      <CalendarDays className="ml-2 h-5 w-5" />
    </Button>
  );
}
