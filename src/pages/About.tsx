import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Users, Heart, Target, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Every listing is personally verified. We ensure students find safe, genuine accommodations without scams or fake listings.",
    },
    {
      icon: Users,
      title: "Student-First",
      description: "Built by students who understand the struggle. We prioritize affordability, transparency, and easy access to housing.",
    },
    {
      icon: Heart,
      title: "Community Driven",
      description: "We're building a supportive community where students help students find their perfect home away from home.",
    },
    {
      icon: Target,
      title: "No Broker Policy",
      description: "Direct connections between students and landlords. Zero brokerage fees, zero hidden charges, just honest housing.",
    },
  ];

  const stats = [
    { number: "5,000+", label: "Verified Rooms" },
    { number: "15,000+", label: "Happy Students" },
    { number: "50+", label: "Partner Colleges" },
    { number: "12", label: "Cities Covered" },
  ];

  const team = [
    {
      name: "Priya Sharma",
      role: "Co-Founder & CEO",
      bio: "MIT Pune alumna passionate about solving student housing challenges.",
    },
    {
      name: "Rahul Mehta",
      role: "Co-Founder & CTO",
      bio: "VIT grad with a mission to make housing search hassle-free for students.",
    },
    {
      name: "Anjali Desai",
      role: "Head of Verification",
      bio: "Ensures every listing meets our strict quality and safety standards.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
            We're Making Student Housing{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Simple & Safe</span>
          </h1>
          <p className="font-inter text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Roomify was born from a simple idea: students shouldn't have to struggle with brokers,
            scams, or fake listings to find a safe place to live near their college.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6 text-center">
              Our Story
            </h2>
            <div className="space-y-6 font-inter text-lg text-muted-foreground leading-relaxed">
              <p>
                In 2024, two college students faced the same frustrating problem: finding verified,
                affordable housing near campus without dealing with brokers or scams. After countless
                fake listings, brokerage fees, and wasted time, they decided to build the solution
                themselves.
              </p>
              <p>
                Roomify started as a simple WhatsApp group connecting students with verified rooms.
                Within months, it grew to thousands of students across multiple colleges. Today,
                we're India's fastest-growing student housing platform, trusted by over 15,000
                students.
              </p>
              <p>
                Our mission is simple: make student housing transparent, safe, and affordable. No
                brokers. No scams. Just verified rooms near your campus, listed by real owners who
                care about student welfare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-poppins font-bold text-4xl md:text-5xl text-white mb-2">
                  {stat.number}
                </p>
                <p className="font-inter text-white/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Our Core Values</h2>
            <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every feature we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="font-inter text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Meet Our Team</h2>
            <p className="font-inter text-muted-foreground">
              Students who turned frustration into innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-white font-poppins font-bold text-3xl mx-auto mb-4">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-1">{member.name}</h3>
                <p className="font-inter text-sm text-primary mb-3">{member.role}</p>
                <p className="font-inter text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Get in Touch</h2>
              <p className="font-inter text-muted-foreground">
                Have questions? We'd love to hear from you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-2xl p-6 shadow-card text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-poppins font-semibold mb-2">Email Us</h3>
                <p className="font-inter text-sm text-muted-foreground">support@roomify.in</p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-poppins font-semibold mb-2">Call Us</h3>
                <p className="font-inter text-sm text-muted-foreground">+91 98765 43210</p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-poppins font-semibold mb-2">Visit Us</h3>
                <p className="font-inter text-sm text-muted-foreground">Pune, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            Ready to Find Your Perfect Room?
          </h2>
          <p className="font-inter text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who trust Roomify for safe, verified student housing
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 font-poppins">
              <Link to="/listings">Browse Rooms</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-poppins">
              <Link to="/list-room">List Your Room</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
