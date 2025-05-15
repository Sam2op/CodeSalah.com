// Dummy landing page content (replace with actual UI from earlier code)
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="p-4 md:p-10 max-w-6xl mx-auto space-y-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to IlmForge</h1>
        <p className="text-lg text-muted-foreground">
          Your one-stop solution for high-quality academic & client software projects.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <a href="https://wa.me/your-group-link" target="_blank">
              Join WhatsApp <Send className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://instagram.com/your_insta_page" target="_blank">
              Follow on Instagram <Instagram className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </motion.div>

      {/* About Us */}
      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Sami</h2>
            <p>Frontend Developer | Flutter | Python | Data Analytics</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Faruq</h2>
            <p>Backend Developer | PHP | JavaScript | Firebase | Data Science</p>
          </CardContent>
        </Card>
      </section>

      {/* Skills & Services */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">What We Offer</h2>
        <ul className="grid md:grid-cols-3 gap-4 list-disc pl-5">
          <li>HTML, CSS, JS Websites</li>
          <li>Flutter Apps</li>
          <li>PHP & MySQL Projects</li>
          <li>Python Data Analytics</li>
          <li>Final Year Project Support</li>
          <li>Custom Dashboards & Admin Panels</li>
        </ul>
      </section>

      {/* Projects Showcase */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Our Work</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <img src="/projects/project1.png" alt="Project 1" className="rounded-xl" />
              <p className="mt-2">E-commerce Website (HTML/CSS/JS)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <img src="/projects/project2.png" alt="Project 2" className="rounded-xl" />
              <p className="mt-2">Student Attendance App (Flutter + FastAPI)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <img src="/projects/project3.png" alt="Project 3" className="rounded-xl" />
              <p className="mt-2">Weather Forecast Dashboard (Python + Streamlit)</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Pricing</h2>
        <ul className="list-disc pl-5">
          <li><strong>Basic Projects:</strong> ₹3000 (static websites, scripts)</li>
          <li><strong>Intermediate:</strong> ₹5000–₹8000 (CRUD apps, analytics)</li>
          <li><strong>Advanced:</strong> ₹10,000+ (apps, dashboards, backend logic)</li>
        </ul>
      </section>

      {/* Google Form Link */}
      <section className="text-center">
        <Button asChild size="lg">
          <a href="https://forms.gle/your-google-form-link" target="_blank">
            Submit Your Project Request
          </a>
        </Button>
      </section>
    </main>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to IlmForge</h1>
      <p className="text-lg">Projects on Demand by Sami & Faruq</p>
    </main>
  );
}
