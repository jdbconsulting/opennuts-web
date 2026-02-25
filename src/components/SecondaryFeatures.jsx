import { useId } from 'react'

import { Container } from '@/components/Container'

const features = [
  {
    name: 'Real-time Collaboration',
    description:
      'Work on designs with your team simultaneously. See cursors, edits, and comments in real time — no file conflicts, no merging headaches.',
    icon: CollaborationIcon,
  },
  {
    name: 'Component Library',
    description:
      'Access thousands of verified components with accurate footprints and 3D models. Create and share custom libraries with your team.',
    icon: LibraryIcon,
  },
  {
    name: 'Design Rule Checks',
    description:
      'Catch errors before they cost you. Automated DRC for schematics, PCB clearance, and mechanical interference keeps your designs manufacturable.',
    icon: DrcIcon,
  },
  {
    name: 'Version Control',
    description:
      'Built-in design history with branching and diffing. Review changes visually and roll back to any previous version with a single click.',
    icon: VersionControlIcon,
  },
  {
    name: 'Export to Manufacturing',
    description:
      'Generate Gerbers, drill files, BOMs, pick-and-place, and STEP files. One-click export in the formats your manufacturer needs.',
    icon: ExportIcon,
  },
  {
    name: 'Open Source',
    description:
      'Inspect the code, extend the functionality, and contribute back. OpenNuts is MIT-licensed — your designs belong to you.',
    icon: OpenSourceIcon,
  },
]

function CollaborationIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        d="M11 14a3 3 0 100-6 3 3 0 000 6zm10 0a3 3 0 100-6 3 3 0 000 6zm-10 2c-3 0-5 2-5 4v2h10v-2c0-2-2-4-5-4zm10 0c-1 0-2 .3-2.8.8A5.5 5.5 0 0126 22v2H16v-2c0-2 2-4 5-4z"
        fill="#737373"
      />
    </svg>
  )
}

function LibraryIcon(props) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 8h4v16H8V8zm6 0h4v16h-4V8zm6 0h4v16h-4V8z"
        fill={`url(#${id}-gradient)`}
      />
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={16}
          y1={8}
          x2={16}
          y2={24}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#737373" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}

function DrcIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        d="M16 6l10 5v7c0 5.25-4.25 10.25-10 11.5C10.25 28.25 6 23.25 6 18v-7l10-5z"
        fill="none"
        stroke="#737373"
        strokeWidth={1.5}
      />
      <path
        d="M12 16l3 3 5-6"
        stroke="#171717"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

function VersionControlIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <circle cx={12} cy={10} r={2} fill="#737373" />
      <circle cx={12} cy={22} r={2} fill="#737373" />
      <circle cx={22} cy={16} r={2} fill="#171717" />
      <path
        d="M12 12v8M14 10h4a2 2 0 012 2v2M14 22h4a2 2 0 002-2v-2"
        stroke="#737373"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}

function ExportIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        d="M16 7v12m0 0l-4-4m4 4l4-4"
        stroke="#737373"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M8 23h16v2H8v-2z"
        fill="#171717"
      />
    </svg>
  )
}

function OpenSourceIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        d="M16 6a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.6 9.6 0 015 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0016 6z"
        fill="#737373"
      />
    </svg>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for productive design"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Built for how engineers actually work.
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            OpenNuts isn't just a viewer — it's a complete design environment
            with collaboration, version control, and manufacturing-ready exports
            built in.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
