import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import aboutVitImage from '../assets/about_vit.jpg'
import aboutUsImage from '../assets/about_us.jpg'

const cards = [
  {
    title: 'About VIT',
    subtitle: 'About VIT',
    description:
      'Vellore Institute of Technology (VIT) is a private deemed university founded by G. Viswanathan in 1984. Its mission is to improve students\' lives through excellence in education and research.\n\nThe Department of Student Welfare plays an irreplaceable role in creating a lively, fun, and resourceful community for students. Every year they join hands with VIT\'s Clubs and Chapters so that every student finds an environment where they can learn and grow together.',
    image: aboutVitImage,
    imageAlt: 'VIT campus engineering laboratory.',
  },
  {
    title: 'About Us',
    subtitle: 'About Us',
    description:
      'RoboVITics is a group of ardent tech enthusiasts with the zeal to learn, to build, and a thirst to be the best. What started as a small group of passionate techies exploring different domains of technology has blossomed into the official Robotics Club of VIT, Vellore.',
    image: aboutUsImage,
    imageAlt: 'RoboVITics glowing cybernetic core.',
  },
]

function AnimatedCard({ title, subtitle, description, image, imageAlt }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [100, 0, 0, -100])
  const rotateX = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [18, 0, 0, -12])
  const rotateZ = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [6, 0, 0, -6])
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.18, 0.82, 0.92, 1], [0, 1, 1, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.95, 1, 1, 0.95])

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        rotateX,
        rotateZ,
        opacity,
        scale,
        transformPerspective: 1200,
        transformOrigin: 'center bottom',
      }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#040611] px-6 pt-12 pb-32 shadow-[0_28px_100px_rgba(15,23,42,0.45)] flex flex-col items-center text-center h-[560px] sm:h-[620px] justify-start z-10"
    >
      {/* Text Elements */}
      <div className="relative z-10 flex flex-col items-center">
        <h3 className="text-3xl sm:text-[2.6rem] font-serif font-light text-white leading-[1.15] max-w-md mb-5 tracking-wide text-wrap-balance">
          {subtitle}
        </h3>
        <p className="text-sm leading-relaxed text-slate-300/80 max-w-sm font-light mb-8 text-wrap-pretty whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* Atmospheric Image Background */}
      <div className="absolute bottom-0 left-0 right-0 h-[45%] w-full overflow-hidden pointer-events-none select-none z-0">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover object-center scale-[1.05] group-hover:scale-100 transition-transform duration-[1200ms] ease-out"
        />
        {/* Smooth mask gradient that fades from opaque card background color to transparent */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#040611]/60 to-[#040611]" />
      </div>

      {/* Brand stamp at the bottom */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-[10px] tracking-[0.45em] font-medium text-white/35 uppercase select-none pointer-events-none z-10">
        RoboVITics®
      </div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-shell py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2">
          {cards.map((card, idx) => (
            <AnimatedCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

