'use client'

import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

const features = [
  {
    name: 'Schematic Capture',
    description:
      'Design circuits with an intuitive editor. Drag and drop components, draw wires, and annotate your designs with a familiar, powerful interface that runs entirely in your browser.',
    icon: SchematicIcon,
    screen: SchematicScreen,
  },
  {
    name: 'PCB Layout',
    description:
      'Route your boards with precision. Multi-layer support, design rule checks, and interactive routing help you go from schematic to manufacturable board in minutes.',
    icon: PcbIcon,
    screen: PcbScreen,
  },
  {
    name: '3D Mechanical Design',
    description:
      'Model enclosures, brackets, and mechanical assemblies alongside your electronics. See how your PCB fits inside the housing before you send anything to fabrication.',
    icon: MechanicalIcon,
    screen: MechanicalScreen,
  },
]

function SchematicIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        d="M8 16h4l2-4 4 8 2-4h4"
        stroke="#737373"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <rect x={6} y={14} width={4} height={4} rx={1} fill="#737373" />
      <rect x={22} y={14} width={4} height={4} rx={1} fill="#737373" />
    </svg>
  )
}

function PcbIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <rect
        x={7}
        y={7}
        width={18}
        height={18}
        rx={2}
        fill="none"
        stroke="#737373"
        strokeWidth={1.5}
      />
      <circle cx={11} cy={11} r={1.5} fill="#737373" />
      <circle cx={21} cy={11} r={1.5} fill="#737373" />
      <circle cx={11} cy={21} r={1.5} fill="#737373" />
      <circle cx={21} cy={21} r={1.5} fill="#737373" />
      <path
        d="M11 13v3h5v-3M21 13v5h-5v3"
        stroke="#737373"
        strokeWidth={1.5}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

function MechanicalIcon(props) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        d="M10 22l4-10 4 4 4-8"
        stroke={`url(#${id}-gradient)`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12l2-2 2 2M20 10l2-2 2 2M14 24l2-2 2 2"
        stroke="#737373"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={10}
          y1={22}
          x2={22}
          y2={14}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#D4D4D4" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}

function SchematicScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-gray-900 p-4">
      <div className="mb-3 flex items-center gap-2 text-xs text-gray-400">
        <span className="rounded bg-cyan-500/20 px-2 py-0.5 text-cyan-400">
          Schematic
        </span>
        <span>motor-controller.sch</span>
      </div>
      <div className="flex-1 rounded-lg bg-gray-800 p-3">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-14 rounded border border-cyan-500/50 bg-cyan-500/10 text-center text-[10px] leading-6 text-cyan-400">
              MCU
            </div>
            <div className="h-px flex-1 bg-cyan-500/40" />
            <div className="h-6 w-14 rounded border border-emerald-500/50 bg-emerald-500/10 text-center text-[10px] leading-6 text-emerald-400">
              DRV
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-px w-6 bg-gray-600" />
            <div className="h-6 w-10 rounded border border-amber-500/50 bg-amber-500/10 text-center text-[10px] leading-6 text-amber-400">
              R1
            </div>
            <div className="h-px flex-1 bg-gray-600" />
            <div className="h-6 w-10 rounded border border-amber-500/50 bg-amber-500/10 text-center text-[10px] leading-6 text-amber-400">
              C1
            </div>
            <div className="h-px w-6 bg-gray-600" />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-14 rounded border border-violet-500/50 bg-violet-500/10 text-center text-[10px] leading-6 text-violet-400">
              PWR
            </div>
            <div className="h-px flex-1 bg-violet-500/40" />
            <div className="h-6 w-14 rounded border border-cyan-500/50 bg-cyan-500/10 text-center text-[10px] leading-6 text-cyan-400">
              GND
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex gap-2 text-[10px] text-gray-500">
        <span className="rounded bg-gray-800 px-1.5 py-0.5">24 parts</span>
        <span className="rounded bg-gray-800 px-1.5 py-0.5">18 nets</span>
        <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-emerald-400">
          DRC: Pass
        </span>
      </div>
    </div>
  )
}

function PcbScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-gray-900 p-4">
      <div className="mb-3 flex items-center gap-2 text-xs text-gray-400">
        <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-emerald-400">
          PCB
        </span>
        <span>motor-controller.pcb</span>
      </div>
      <div className="flex-1 rounded-lg bg-gray-800 p-3">
        <div className="relative h-full min-h-[120px]">
          <div className="absolute inset-2 rounded border border-emerald-500/30 bg-emerald-500/5">
            <div className="absolute top-2 left-2 h-3 w-3 rounded-full border border-gray-500 bg-gray-700" />
            <div className="absolute top-2 right-2 h-3 w-3 rounded-full border border-gray-500 bg-gray-700" />
            <div className="absolute bottom-2 left-2 h-3 w-3 rounded-full border border-gray-500 bg-gray-700" />
            <div className="absolute bottom-2 right-2 h-3 w-3 rounded-full border border-gray-500 bg-gray-700" />
            <div className="absolute top-6 left-1/4 h-5 w-8 rounded-sm border border-cyan-500/40 bg-cyan-500/10" />
            <div className="absolute top-6 right-1/4 h-4 w-6 rounded-sm border border-amber-500/40 bg-amber-500/10" />
            <div className="absolute bottom-6 left-1/3 h-6 w-10 rounded-sm border border-violet-500/40 bg-violet-500/10" />
            <div className="absolute top-8 left-1/4 h-px w-1/2 bg-red-500/50" />
            <div className="absolute top-12 left-1/3 h-px w-1/3 bg-blue-500/50" />
          </div>
        </div>
      </div>
      <div className="mt-2 flex gap-2 text-[10px] text-gray-500">
        <span className="rounded bg-red-500/20 px-1.5 py-0.5 text-red-400">
          F.Cu
        </span>
        <span className="rounded bg-blue-500/20 px-1.5 py-0.5 text-blue-400">
          B.Cu
        </span>
        <span className="rounded bg-gray-800 px-1.5 py-0.5">2 layers</span>
      </div>
    </div>
  )
}

function MechanicalScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-gray-900 p-4">
      <div className="mb-3 flex items-center gap-2 text-xs text-gray-400">
        <span className="rounded bg-violet-500/20 px-2 py-0.5 text-violet-400">
          3D
        </span>
        <span>enclosure.step</span>
      </div>
      <div className="flex-1 rounded-lg bg-gray-800 p-3">
        <div className="relative h-full min-h-[120px] flex items-center justify-center">
          <div className="relative">
            <div className="h-20 w-28 rounded-md border border-gray-600 bg-gray-700/50 transform-[perspective(400px)_rotateX(15deg)_rotateY(-20deg)]">
              <div className="absolute inset-1 rounded-sm border border-emerald-500/20 bg-emerald-500/5">
                <div className="absolute top-1 left-1 h-2 w-4 rounded-sm bg-cyan-500/20" />
                <div className="absolute top-1 right-1 h-1.5 w-3 rounded-sm bg-amber-500/20" />
                <div className="absolute bottom-1 left-2 h-3 w-5 rounded-sm bg-violet-500/20" />
              </div>
            </div>
            <div className="absolute -top-3 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border border-cyan-500/40 bg-cyan-500/20" />
          </div>
        </div>
      </div>
      <div className="mt-2 flex gap-2 text-[10px] text-gray-500">
        <span className="rounded bg-gray-800 px-1.5 py-0.5">3 bodies</span>
        <span className="rounded bg-gray-800 px-1.5 py-0.5">STEP export</span>
        <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-emerald-400">
          Fits
        </span>
      </div>
    </div>
  )
}

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true },
  )

  return (
    <TabGroup
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <TabList className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gray-800"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 text-lg font-semibold text-white">
                <Tab className="text-left data-selected:not-data-focus:outline-hidden">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </TabList>
      <div className="relative col-span-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#13B5C8" className="animate-spin-slower" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl bg-gray-900 shadow-2xl ring-1 ring-white/10">
          <TabPanels as={Fragment}>
            <AnimatePresence initial={false}>
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <TabPanel
                    static
                    key={feature.name + changeCount}
                    className="col-start-1 row-start-1 flex focus:outline-offset-32 data-selected:not-data-focus:outline-hidden"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="w-full"
                    >
                      <feature.screen />
                    </motion.div>
                  </TabPanel>
                ) : null,
              )}
            </AnimatePresence>
          </TabPanels>
        </div>
      </div>
    </TabGroup>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef(null)
  let slideRefs = useRef([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      },
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => {
              if (ref) {
                slideRefs.current[featureIndex] = ref
              }
            }}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#13B5C8"
                  className={featureIndex % 2 === 1 ? 'rotate-180' : undefined}
                />
              </div>
              <div className="relative mx-auto w-full max-w-[366px] overflow-hidden rounded-xl bg-gray-900 shadow-xl ring-1 ring-white/10">
                <feature.screen />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur-sm sm:p-10">
                <feature.icon className="h-8 w-8" />
                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500',
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for electromechanical design"
      className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            Everything you need to design, all in one tool.
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            OpenNuts brings schematics, PCBs, and 3D mechanical design together
            in a single browser-based workspace. No more jumping between
            disconnected tools.
          </p>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
