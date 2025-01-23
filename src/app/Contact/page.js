"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    city: "",
    zip: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium mb-2">
              City
            </label>
            <Input
              id="city"
              name="city"
              type="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="zip" className="block text-sm font-medium mb-2">
              Zip
            </label>
            <Input
              id="zip"
              name="zip"
              type="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
            />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
        <Card>
          <CardContent className="p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.6625139803735!2d-87.96111548451425!3d43.016654379147876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8805177af1530aa9%3A0x9c8f9e3c3c3c3c3c!2s3400%20S%2043rd%20St%2C%20Milwaukee%2C%20WI%2053234!5e0!3m2!1sen!2sus!4v1625589876543!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p>3400 S. 43rd St.</p>
                <p>Milwaukee, WI 53234</p>
              </div>
              <div className="space-y-1">
                <p>
                  <a
                    href="tel:414-382-6000"
                    className="text-primary hover:underline"
                  >
                    414-382-6000
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:admissions@alverno.edu"
                    className="text-primary hover:underline"
                  >
                    admissions@alverno.edu
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
