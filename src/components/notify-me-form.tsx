'use client';
import { useState } from "react";
import { Button } from "./ui/button";

export default function NotifyMeForm() {
    const [email, setEmail] = useState("");
      const [isSubscribed, setIsSubscribed] = useState(false);
    
      const handleNotifyMe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
          setIsSubscribed(true);
          setEmail("");
        }
      };
    return (
        <>
            {/* Notify Me Form */}
          <div className="max-w-md mx-auto mb-16">
            {isSubscribed ? (
              <div className="bg-gradient-primary rounded-lg p-6">
                <h3 className="text-xl font-bold text-brand-dark mb-2">Thank You!</h3>
                <p className="text-brand-dark">We&#39;ll notify you when social media marketing services are available.</p>
              </div>
            ) : (
              <form onSubmit={handleNotifyMe} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-brand-lime"
                  required
                />
                <Button
                  type="submit"
                  className="bg-gradient-primary hover:opacity-90 text-brand-dark font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  Notify Me
                </Button>
              </form>
            )}
            </div>
        </>
    )
}