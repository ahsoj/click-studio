import PackageSelector from "@/components/package-selector";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PackageCalculator() {

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-muted-foreground" />
              <span className="text-lg font-bold text-gradient">Click</span>
            </Link>
            <h1 className="text-xl font-semibold text-foreground">Package Calculator</h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium mb-4">
            <span className="text-foreground">Choose Your </span>
            <span className="text-gradient">Perfect Package</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing for professional web solutions. All prices in Ethiopian Birr (ETB).
          </p>
        </div>

        {/* Package Selection */}
        <PackageSelector />
        
      </div>
    </div>
  );
};
