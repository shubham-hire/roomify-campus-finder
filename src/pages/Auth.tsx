import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Mail, Lock, User } from "lucide-react";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle login logic here
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle signup logic here
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Illustration/Info */}
        <div className="hidden lg:flex flex-col justify-center">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <Home className="h-8 w-8 text-primary" />
            <span className="font-poppins font-bold text-3xl bg-gradient-primary bg-clip-text text-transparent">
              Roomify
            </span>
          </Link>
          <h2 className="font-poppins font-bold text-4xl mb-4">
            Your Perfect Student Room Awaits
          </h2>
          <p className="font-inter text-lg text-muted-foreground mb-8">
            Join thousands of students who found their ideal accommodation near campus.
            Verified listings, no brokers, just hassle-free housing.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Home className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-poppins font-semibold">Verified Listings</p>
                <p className="font-inter text-sm text-muted-foreground">
                  Every room personally verified by our team
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-poppins font-semibold">Direct Contact</p>
                <p className="font-inter text-sm text-muted-foreground">
                  Connect directly with property owners
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="bg-card rounded-2xl shadow-card-hover p-8">
          <div className="lg:hidden mb-6">
            <Link to="/" className="flex items-center gap-2 justify-center">
              <Home className="h-6 w-6 text-primary" />
              <span className="font-poppins font-bold text-2xl bg-gradient-primary bg-clip-text text-transparent">
                Roomify
              </span>
            </Link>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            {/* Login Form */}
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <h3 className="font-poppins font-bold text-2xl mb-2">Welcome Back</h3>
                  <p className="font-inter text-muted-foreground">
                    Sign in to continue your room search
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="login-email" className="font-inter">Email</Label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="your.email@college.edu"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="login-password" className="font-inter">Password</Label>
                    <div className="relative mt-2">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="font-inter text-sm">Remember me</span>
                    </label>
                    <a href="#" className="font-inter text-sm text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 font-poppins"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </TabsContent>

            {/* Signup Form */}
            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-6">
                <div>
                  <h3 className="font-poppins font-bold text-2xl mb-2">Create Account</h3>
                  <p className="font-inter text-muted-foreground">
                    Join Roomify with your college email
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="signup-name" className="font-inter">Full Name</Label>
                    <div className="relative mt-2">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-name"
                        type="text"
                        placeholder="John Doe"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="signup-email" className="font-inter">College Email</Label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="your.email@college.edu"
                        className="pl-10"
                        required
                      />
                    </div>
                    <p className="font-inter text-xs text-muted-foreground mt-1">
                      Use your college email for instant verification
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="signup-password" className="font-inter">Password</Label>
                    <div className="relative mt-2">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="terms" className="mt-1 rounded" required />
                    <label htmlFor="terms" className="font-inter text-sm text-muted-foreground">
                      I agree to the{" "}
                      <a href="#" className="text-primary hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-primary hover:underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 font-poppins"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Auth;
