import { Cpu, Cog, Brain, ShieldCheck, Globe, Smartphone } from 'lucide-react'
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline'

const domainTimelineData = [
  {
    id: 1,
    title: 'Electrical',
    date: 'Core Domain',
    content:
      'Power systems, embedded electronics, and robotics control. Our electrical team designs circuits, builds PCBs, and programs microcontrollers that bring robots to life.',
    category: 'Hardware',
    icon: Cpu,
    relatedIds: [2, 3],
    status: 'completed',
    energy: 95,
  },
  {
    id: 2,
    title: 'Mechanical',
    date: 'Core Domain',
    content:
      'CAD modelling, 3D-printing, fabrication, and durable robot mechanisms. From combat bots to spider bots, every frame is designed and manufactured in-house.',
    category: 'Hardware',
    icon: Cog,
    relatedIds: [1, 3],
    status: 'completed',
    energy: 90,
  },
  {
    id: 3,
    title: 'ML & AI',
    date: 'Intelligence',
    content:
      'Computer vision, perception pipelines, and intelligent autonomy. Our AI team builds the brains that let robots see, decide, and act on their own.',
    category: 'Software',
    icon: Brain,
    relatedIds: [1, 4],
    status: 'in-progress',
    energy: 80,
  },
  {
    id: 4,
    title: 'Cybersecurity',
    date: 'Defense',
    content:
      'Secure systems, IoT hardening, and threat awareness. Protecting connected robots and club infrastructure from digital threats.',
    category: 'Security',
    icon: ShieldCheck,
    relatedIds: [3, 5],
    status: 'in-progress',
    energy: 70,
  },
  {
    id: 5,
    title: 'Web Dev',
    date: 'Digital',
    content:
      'Frontend and backend products for club and community tools. Building the digital presence that connects RoboVITics with the world.',
    category: 'Software',
    icon: Globe,
    relatedIds: [4, 6],
    status: 'completed',
    energy: 85,
  },
  {
    id: 6,
    title: 'App Dev',
    date: 'Mobile',
    content:
      'Mobile-first experiences that extend robotics workflows. Native apps for robot control, event management, and team collaboration.',
    category: 'Software',
    icon: Smartphone,
    relatedIds: [5, 3],
    status: 'in-progress',
    energy: 65,
  },
]

export default function Domains() {
  return (
    <section id="domains" className="relative py-12 sm:py-16">
      {/* Section heading */}
      <div className="section-shell mb-4">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-100">
          Domains
        </p>
        <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
          Built across the full robotics stack.
        </h2>
        <p className="mt-2 text-sm text-slate-300/80">
          Click a node to explore each domain. Connected nodes show related disciplines.
        </p>
      </div>

      {/* Orbital Timeline */}
      <div className="relative w-full" style={{ height: '600px' }}>
        <RadialOrbitalTimeline timelineData={domainTimelineData} />
      </div>
    </section>
  )
}
