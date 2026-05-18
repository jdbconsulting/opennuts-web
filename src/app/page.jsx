import { Logomark } from '@/components/Logo'

export const metadata = {
  title: 'OpenNuts — Coming soon',
  description:
    'Open-source electromechanical CAD for the browser. Schematic capture, PCB layout, and 3D mechanical design — all in one place. Coming soon.',
}

export default function ComingSoon() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      <div className="mb-12 inline-flex items-center gap-3">
        <Logomark className="h-12 w-12 fill-cyan-500" />
        <span className="text-2xl font-semibold tracking-tight text-gray-900">
          OpenNuts
        </span>
      </div>

      <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        Coming soon.
      </h1>

      <p className="mt-6 max-w-2xl text-lg/8 text-gray-600">
        Open-source electromechanical CAD for the browser. Schematic
        capture, PCB layout, and 3D mechanical design — all in one place.
      </p>
    </div>
  )
}
