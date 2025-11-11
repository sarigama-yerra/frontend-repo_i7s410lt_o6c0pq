import React from 'react'
import { Brain, Zap, BarChart3, MessageSquare, Shield } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function NavBar() {
  return (
    <div className="w-full flex items-center justify-between py-5">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 via-fuchsia-500 to-amber-400 ring-2 ring-white/10 shadow-lg shadow-blue-500/20" />
        <span className="text-white text-lg font-semibold tracking-tight">OmniAI</span>
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
        <a className="hover:text-white transition" href="#features">Features</a>
        <a className="hover:text-white transition" href="#industries">Industries</a>
        <a className="hover:text-white transition" href="#pricing">Pricing</a>
        <a className="hover:text-white transition" href="#faq">FAQ</a>
      </div>
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 rounded-lg text-white/80 hover:text-white border border-white/15 hover:border-white/30 transition">Sign in</button>
        <button className="px-4 py-2 rounded-lg bg-white text-gray-900 font-medium shadow-lg shadow-white/10 hover:shadow-white/20 transition">Get started</button>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle radial glow */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(56,189,248,0.35),transparent)] blur-2xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(244,63,94,0.35),transparent)] blur-2xl" />
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
            <Zap className="h-4 w-4 text-amber-300" />
            No‑code AI automation for growth
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            One dashboard to launch, automate, and scale with AI
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Pre‑built AI Brains for healthcare, education, fitness, hospitality, real estate, and more.
            Build campaigns, generate content, manage leads, and analyze performance — no code required.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="px-5 py-3 rounded-lg bg-white text-gray-900 font-medium shadow-lg shadow-white/10 hover:shadow-white/20 transition">
              Try it free
            </button>
            <button className="px-5 py-3 rounded-lg border border-white/20 text-white/90 hover:border-white/40 transition">
              See how it works
            </button>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4 text-white/70 text-sm">
            <div>
              <div className="text-2xl font-semibold text-white">10x</div>
              Faster launch
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">70%</div>
              Cost reduction
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">24/7</div>
              AI engagement
            </div>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-900/20 shadow-[0_0_80px_-20px_rgba(56,189,248,0.35)]">
          {/* 3D Brain Spline Scene */}
          <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Soft gradient overlay to blend with dark theme */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition">
      <div className="flex items-start gap-4">
        <div className="mt-1 rounded-lg bg-white/10 p-2 ring-1 ring-white/10">
          <Icon className="h-5 w-5 text-sky-300" />
        </div>
        <div>
          <h3 className="text-white font-medium">{title}</h3>
          <p className="text-white/70 text-sm leading-relaxed mt-1">{desc}</p>
        </div>
      </div>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="mt-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Feature
          icon={Brain}
          title="Industry AI Brains"
          desc="Ready‑to‑use brains for healthcare, education, fitness, hospitality, and real estate — fine‑tuned for each workflow."/>
        <Feature
          icon={MessageSquare}
          title="Omnichannel Comms"
          desc="Automate conversations across email, SMS, chat, and social with consistent tone and context memory."/>
        <Feature
          icon={Zap}
          title="No‑Code Automation"
          desc="Drag‑and‑drop flows powered by Make.com. Launch campaigns, sequences, and handoffs in minutes."/>
        <Feature
          icon={BarChart3}
          title="Revenue Analytics"
          desc="Track funnel performance, conversion rates, and LTV with AI insights and recommendations."/>
        <Feature
          icon={Shield}
          title="Enterprise‑grade"
          desc="Role‑based access, audit logs, and data controls. Built on OpenAI APIs with scalable, low‑cost infra."/>
        <Feature
          icon={MessageSquare}
          title="Lead Capture & CRM"
          desc="Forms and inbox integrated with Airtable. Qualify, route, and nurture leads automatically."/>
      </div>
    </section>
  )
}

function Industries() {
  const items = [
    { name: 'Healthcare', tip: 'Patient intake, reminders, follow‑ups' },
    { name: 'Education', tip: 'Course marketing, student onboarding' },
    { name: 'Fitness', tip: 'Challenges, retention, upsells' },
    { name: 'Hospitality', tip: 'Bookings, concierge, reviews' },
    { name: 'Real Estate', tip: 'Lead nurture, listings, open houses' },
    { name: 'More', tip: 'Custom brains for any niche' },
  ]
  return (
    <section id="industries" className="mt-20">
      <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-tight">Built for your industry</h2>
      <p className="text-white/70 mt-2">Pick a pre‑built brain, connect your tools, and go live.</p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <div key={it.name} className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-white/20 transition">
            <div className="text-white font-medium">{it.name}</div>
            <div className="text-white/60 text-sm mt-1">{it.tip}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <NavBar />
        <Hero />
        <Features />
        <Industries />

        <footer className="mt-24 border-t border-white/10 py-8 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} OmniAI. All rights reserved.
        </footer>
      </div>
    </div>
  )
}
