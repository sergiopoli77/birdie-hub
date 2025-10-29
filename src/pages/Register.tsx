import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { UserPlus } from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    experience: "",
    category: "",
    message: "",
    terms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.terms) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    // Display submitted data
    console.log("Registration Data:", formData);
    
    toast.success("Registration submitted successfully! We'll contact you soon.", {
      duration: 5000,
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      age: "",
      experience: "",
      category: "",
      message: "",
      terms: false,
    });
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              <span className="text-primary">Register</span> Now
            </h1>
            <p className="text-muted-foreground text-xl">
              Join our badminton community and start your journey
            </p>
          </div>

          <Card className="border-border shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl text-foreground flex items-center gap-2">
                <UserPlus className="text-primary" />
                Registration Form
              </CardTitle>
              <CardDescription className="text-muted-foreground text-base">
                Fill in your details to register for tournaments and training sessions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    required
                    className="border-border"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+62 XXX-XXXX-XXXX"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                      className="border-border"
                    />
                  </div>
                </div>

                {/* Age and Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-foreground font-medium">
                      Age *
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="Enter your age"
                      value={formData.age}
                      onChange={(e) => handleChange("age", e.target.value)}
                      required
                      min="10"
                      max="100"
                      className="border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-foreground font-medium">
                      Experience Level *
                    </Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) => handleChange("experience", value)}
                      required
                    >
                      <SelectTrigger className="border-border">
                        <SelectValue placeholder="Select your level" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-foreground font-medium">
                    Preferred Category *
                  </Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => handleChange("category", value)}
                    required
                  >
                    <SelectTrigger className="border-border">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      <SelectItem value="singles">Men's Singles</SelectItem>
                      <SelectItem value="women-singles">Women's Singles</SelectItem>
                      <SelectItem value="doubles">Men's Doubles</SelectItem>
                      <SelectItem value="women-doubles">Women's Doubles</SelectItem>
                      <SelectItem value="mixed">Mixed Doubles</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Additional Information
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your badminton journey or any special requirements..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={4}
                    className="border-border resize-none"
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.terms}
                    onCheckedChange={(checked) => handleChange("terms", checked as boolean)}
                    className="mt-1"
                  />
                  <Label
                    htmlFor="terms"
                    className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                  >
                    I agree to the terms and conditions and understand that my information will be used 
                    for registration purposes. I also consent to receiving updates about tournaments and events.
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Submit Registration
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border">
            <h3 className="font-semibold text-foreground mb-2">What happens next?</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Our team will review your registration within 24-48 hours</li>
              <li>• You'll receive a confirmation email with next steps</li>
              <li>• You'll be added to our community platform</li>
              <li>• You'll get access to training schedules and tournament information</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
