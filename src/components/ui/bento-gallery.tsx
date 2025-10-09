"use client"

import React, { useRef, useState } from "react"
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion"
import { cn } from "@/lib/utils"
import { X, Check, Target, Dumbbell, Sparkles } from "lucide-react"
import { Button } from "./button"

type BentoItem = {
  id: number | string
  title: string
  desc: string
  url: string
  span?: string
  imageHint?: string
  cta?: string
  targetAudience?: string
  equipment?: string[]
  coachTip?: string
}

interface InteractiveImageBentoGalleryProps {
  items: BentoItem[]
  title: string
  description: string
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
}

const DetailModal = ({
  item,
  onClose,
}: {
  item: BentoItem
  onClose: () => void
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, y: 50 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 50, opacity: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="relative flex flex-col md:flex-row bg-card w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl border border-border"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="w-full md:w-1/2 h-64 md:h-auto relative">
        <img
          src={item.url}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="w-full md:w-1/2 p-8 overflow-y-auto">
        <h2 className="text-3xl font-bold text-primary mb-2">{item.title}</h2>
        <p className="text-lg text-muted-foreground mb-6">{item.desc}</p>
        {item.cta && (
          <Button size="lg" className="w-full">
            {item.cta}
          </Button>
        )}
      </div>
    </motion.div>
    <button
      onClick={onClose}
      className="absolute right-4 top-4 text-white/80 hover:text-white transition-colors"
    >
      <X size={26} />
    </button>
  </motion.div>
)

const InteractiveImageBentoGallery: React.FC<
  InteractiveImageBentoGalleryProps
> = ({ items, title, description }) => {
  const [selectedItem, setSelectedItem] = useState<BentoItem | null>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2], [30, 0])

  return (
    <section ref={targetRef} className="relative w-full bg-card py-16 sm:py-24">
      <motion.div style={{ opacity, y }} className="container mx-auto px-4">
        <div className="md:flex md:items-center md:justify-between text-center md:text-left">
          <div>
            <p className="font-semibold text-primary tracking-widest uppercase">
              {title}
            </p>
            <h2 className="font-headline text-5xl md:text-6xl font-extrabold">
              <span className="text-primary">WORLD-CLASS</span> FACILITIES
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        </div>
      </motion.div>

      {/* Responsive uneven grid */}
      <motion.div
        className="container mx-auto mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 auto-rows-[10rem] sm:auto-rows-[12rem] gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((item, i) => {
          // Pattern-based dynamic spans for visual rhythm
          const spanClass =
            i % 7 === 0
              ? "col-span-2 row-span-2"
              : i % 5 === 0
              ? "col-span-2 row-span-1"
              : i % 3 === 0
              ? "col-span-1 row-span-2"
              : "col-span-1 row-span-1"

          return (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={cn(
                "group relative overflow-hidden rounded-2xl border bg-card shadow-md transition-all duration-500 hover:shadow-xl cursor-pointer",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                spanClass
              )}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.url}
                alt={item.title}
                data-ai-hint={item.imageHint}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl" />
              <div className="relative z-10 p-4 sm:p-6 flex flex-col justify-end h-full">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80">{item.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <AnimatePresence>
        {selectedItem && (
          <DetailModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default InteractiveImageBentoGallery
