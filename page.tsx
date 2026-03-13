"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"
import { GlassCard } from "@/components/glass-card"
import {
  Sparkles,
  Dumbbell,
  Brain,
  TrendingUp,
  Apple,
  Calculator,
  MessageSquare,
  ChevronRight,
  Star,
  Zap,
  Heart,
  Target,
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Workouts",
    description: "Get personalized 7-day workout plans tailored to your fitness level, goals, and preferences using advanced AI.",
  },
  {
    icon: MessageSquare,
    title: "AI Fitness Coach",
    description: "Chat with your personal AI trainer for exercise guidance, diet advice, supplement suggestions, and injury prevention tips.",
  },
  {
    icon: Apple,
    title: "Smart Diet Planning",
    description: "Generate customized meal plans based on your fitness goals, budget, and food preferences with macro breakdowns.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Track your daily workouts, diet completion, and water intake. View weekly progress charts and fitness scores.",
  },
  {
    icon: Calculator,
    title: "Fitness Calculators",
    description: "Calculate BMI, daily calories, macros (protein, carbs, fats), and get personalized nutrition recommendations.",
  },
  {
    icon: Zap,
    title: "Image Analysis",
    description: "Upload food images for calorie estimation or workout posture photos for form correction and improvement tips.",
  },
]

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "500K+", label: "Workouts Generated" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24/7", label: "AI Availability" },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <header className="relative z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Sparkles className="h-8 w-8 text-primary" />
                <div className="absolute inset-0 blur-lg bg-primary/30 group-hover:bg-primary/50 transition-colors" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                FitBuddy AI
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost" className="hidden sm:inline-flex">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Star className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Powered by Google Gemini AI</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Your Personal</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                AI Fitness Coach
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Transform your fitness journey with intelligent workout plans, personalized diet advice, 
              and 24/7 AI coaching. Built for all fitness levels.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-8 py-6">
                  Start Your Journey
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6">
                  I Have an Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="relative z-10 py-16 border-y border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Succeed
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive AI-powered tools designed to help you achieve your fitness goals faster and smarter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <GlassCard key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-8 sm:p-12 text-center bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/20">
                <Heart className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Life?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of users who have already achieved their fitness goals with FitBuddy AI.
              Start your free journey today.
            </p>
            <Link href="/register">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-10 py-6">
                <Target className="mr-2 h-5 w-5" />
                Get Started Free
              </Button>
            </Link>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                FitBuddy AI
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/login" className="hover:text-foreground transition-colors">
                Login
              </Link>
              <Link href="/register" className="hover:text-foreground transition-colors">
                Register
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Powered by Google Gemini
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
