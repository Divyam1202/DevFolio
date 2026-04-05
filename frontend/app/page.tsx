"use client";

import Link from "next/link";
import { ArrowRight, Award, GraduationCap, Moon, Sun, Users } from "lucide-react";

import { useTheme } from "@/app/providers/theme-providers";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Expert Learning",
    description: "Join guided courses built to help students, instructors, and creators keep growing.",
    icon: GraduationCap,
  },
  {
    title: "Portfolio Publishing",
    description: "Turn projects, skills, and achievements into a clean public portfolio you can share anywhere.",
    icon: Users,
  },
  {
    title: "Career Proof",
    description: "Show certificates, completed work, and practical outcomes in one place recruiters can review fast.",
    icon: Award,
  },
];

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_40%),linear-gradient(180deg,_rgba(14,165,233,0.08),_transparent_35%)]" />

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-300">
              DevFolio
            </p>
            <h1 className="mt-2 text-lg font-semibold sm:text-xl">
              Learn, build, and publish from one workspace.
            </h1>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-border bg-background/80 p-3 transition hover:bg-muted"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        <section className="flex flex-1 items-center py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-200">
                Course platform plus portfolio builder
              </div>

              <h2 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Build skills in public and give your work a homepage that feels finished.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                DevFolio brings together learning paths, creator portfolios, and role-based dashboards so students and
                instructors can move from coursework to visible outcomes without switching platforms.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/portfolio">
                  <Button size="lg" className="w-full bg-blue-600 text-white hover:bg-blue-700 sm:w-auto">
                    Explore Portfolios
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <Link href="/login">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Start Learning
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur">
                <p className="text-sm font-medium text-muted-foreground">Why teams use it</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  <div>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-300">1</p>
                    <p className="mt-2 text-sm text-muted-foreground">One place for courses, portfolios, and creator identity.</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-300">3</p>
                    <p className="mt-2 text-sm text-muted-foreground">Role-based experiences for students, instructors, and admins.</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-300">24/7</p>
                    <p className="mt-2 text-sm text-muted-foreground">Access to published work and learning progress from anywhere.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-10 sm:pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-3xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur">
                <div className="inline-flex rounded-2xl bg-blue-500/10 p-3 text-blue-600 dark:text-blue-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
