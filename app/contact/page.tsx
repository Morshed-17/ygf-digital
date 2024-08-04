import React from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, content }) => {
  return (
    <div className="flex items-start mb-6">
      {icon}
      <div className="ml-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

const ContactUsPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Get in Touch</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
          We're here to help you elevate your digital presence. Reach out to us
          for a free consultation or to discuss your project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your full name" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="your@email.com"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="project">
                          Project Discussion
                        </SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </CardFooter>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Reach out to us directly or visit our office.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactInfo
                icon={<MapPin className="w-6 h-6 text-blue-500" />}
                title="Our Office"
                content="123 Digital Avenue, Tech City, 12345"
              />
              <ContactInfo
                icon={<Phone className="w-6 h-6 text-blue-500" />}
                title="Phone"
                content="+1 (555) 123-4567"
              />
              <ContactInfo
                icon={<Mail className="w-6 h-6 text-blue-500" />}
                title="Email"
                content="hello@youragency.com"
              />
              <ContactInfo
                icon={<Clock className="w-6 h-6 text-blue-500" />}
                title="Business Hours"
                content="Monday - Friday: 9am - 5pm"
              />

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {["facebook", "twitter", "linkedin", "instagram"].map(
                    (social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        asChild
                      >
                        <a
                          href={`https://${social}.com`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={`/api/placeholder/24/24`}
                            alt={`${social} icon`}
                            className="w-5 h-5"
                          />
                        </a>
                      </Button>
                    )
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <Card className="mt-16">
          <CardHeader>
            <CardTitle>Find Us</CardTitle>
            <CardDescription>
              Visit our office or send us mail to this address.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
              {/* Replace this div with an actual map component or embed */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.492798505562!2d90.41169497602323!3d23.76545978819667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7804d8961fd%3A0x6b758bf9a6df3f1f!2sRd%204%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1722594962139!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                ></iframe>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactUsPage;
