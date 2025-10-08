
"use client"

import React, { useRef, useState, useEffect } from "react"
import {
  motion,
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
  span: string
  imageHint: string
  features?: string[]
  cta?: string
  targetAudience?: string;
  equipment?: string[];
  coachTip?: string;
}

interface InteractiveImageBentoGalleryProps {
  items: BentoItem[]
  title: string
  description: string
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
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
}) => {
  return (
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
        className="relative flex flex-col md:flex-row bg-card w-full max-w-4xl max-h-[90vh] rounded-lg overflow-hidden shadow-2xl border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
            <img
                src={item.url}
                alt={item.title}
                data-ai-hint={item.imageHint}
                className="absolute inset-0 h-full w-full object-cover"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="w-full md:w-1/2 p-8 overflow-y-auto">
            <h2 className="text-3xl font-bold font-headline text-primary mb-2">{item.title}</h2>
            <p className="text-lg text-muted-foreground mb-6">{item.desc}</p>
            
            {item.targetAudience && (
                 <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Target className="w-5 h-5 text-primary" /> Who It's For</h3>
                    <p className="text-muted-foreground">{item.targetAudience}</p>
                </div>
            )}

            {item.equipment && item.equipment.length > 0 && (
                <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Dumbbell className="w-5 h-5 text-primary" /> Key Equipment</h3>
                    <ul className="space-y-2">
                        {item.equipment.map((equip, index) => (
                             <li key={index} className="flex items-start gap-3">
                                <Check className="h-4 w-4 flex-shrink-0 text-green-500 mt-1" />
                                <span className="text-muted-foreground text-sm">{equip}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {item.coachTip && (
                 <div className="mb-8 p-4 bg-secondary rounded-lg border border-border">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Sparkles className="w-5 h-5 text-primary" /> Coach's Tip</h3>
                    <p className="text-muted-foreground italic text-sm">"{item.coachTip}"</p>
                </div>
            )}
            
            {item.cta && (
                 <Button size="lg" className="w-full">
                    {item.cta}
                </Button>
            )}
        </div>
      </motion.div>
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-white/80 transition-colors hover:text-white"
        aria-label="Close detail view"
      >
        <X size={24} />
      </button>
    </motion.div>
  )
}

const InteractiveImageBentoGallery: React.FC<
  InteractiveImageBentoGalleryProps
> = ({ items, title, description }) => {
  const [selectedItem, setSelectedItem] = useState<BentoItem | null>(null)
  const [dragConstraint, setDragConstraint] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const calculateConstraints = () => {
      if (gridRef.current && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const gridWidth = gridRef.current.scrollWidth
        const newConstraint = Math.min(0, containerWidth - gridWidth - 32) 
        setDragConstraint(newConstraint)
      }
    }

    calculateConstraints()
    window.addEventListener("resize", calculateConstraints)
    return () => window.removeEventListener("resize", calculateConstraints)
  }, [items])

  return (
    <section
      ref={targetRef}
      className="relative w-full overflow-hidden bg-background py-16 sm:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between md:items-end text-center md:text-left">
          <div>
            <p className="font-semibold text-primary tracking-widest uppercase">
              Discover Our Spaces
            </p>
            <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="text-primary">WORLD-CLASS</span> FACILITIES
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-2xl md:max-w-xs md:text-right text-lg text-muted-foreground mx-auto md:mx-0">
            {description}
          </p>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative mt-12 w-full cursor-grab active:cursor-grabbing"
      >
        <motion.div
          className="w-max"
          drag="x"
          dragConstraints={{ left: dragConstraint, right: 0 }}
          dragElastic={0.1}
        >
          <motion.div
            ref={gridRef}
            className="grid auto-cols-[minmax(15rem,1fr)] grid-flow-col gap-4 px-4 md:px-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {items.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={cn(
                  "group relative flex h-full min-h-[15rem] w-full min-w-[15rem] cursor-pointer items-end overflow-hidden rounded-xl border bg-card p-4 shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  item.span,
                )}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setSelectedItem(item)}
                onKeyDown={(e) => e.key === "Enter" && setSelectedItem(item)}
                tabIndex={0}
                aria-label={`View ${item.title}`}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  data-ai-hint={item.imageHint}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <DetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default InteractiveImageBentoGallery
