import { useId } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              Design electronics and mechanics in one place.
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              OpenNuts is a free, open-source browser-based CAD tool that unifies
              schematic capture, PCB layout, and 3D mechanical design. No
              installs, no license keys — just open your browser and start
              designing.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <Button
                href="https://github.com/opennuts"
                color="gray"
              >
                <GitHubIcon className="h-5 w-5 flex-none" />
                <span className="ml-2.5">View on GitHub</span>
              </Button>
              <Button href="https://app.opennuts.com" color="cyan">
                Launch App
              </Button>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute top-4 left-1/2 h-[1026px] w-[1026px] -translate-x-1/3 mask-[linear-gradient(to_bottom,white_20%,transparent_75%)] stroke-gray-300/70 sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] mask-[linear-gradient(to_bottom,white_60%,transparent)] px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <div className="mx-auto max-w-[500px] rounded-2xl bg-gray-900 p-6 shadow-2xl ring-1 ring-gray-800">
                <div className="flex items-center gap-2 border-b border-gray-700 pb-3">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-gray-400">
                    app.opennuts.com
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-cyan-500/20 p-1.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-full w-full text-cyan-400"
                      >
                        <path
                          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-300">
                      Schematic Editor
                    </div>
                    <div className="ml-auto text-xs text-gray-500">
                      motor-controller.sch
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-800 p-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-12 rounded bg-cyan-500/30" />
                        <div className="h-px flex-1 bg-cyan-500/40" />
                        <div className="h-4 w-16 rounded bg-emerald-500/30" />
                        <div className="h-px flex-1 bg-emerald-500/40" />
                        <div className="h-4 w-10 rounded bg-cyan-500/30" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-px w-8 bg-gray-600" />
                        <div className="h-6 w-14 rounded border border-amber-500/40 bg-amber-500/10" />
                        <div className="h-px flex-1 bg-gray-600" />
                        <div className="h-6 w-14 rounded border border-violet-500/40 bg-violet-500/10" />
                        <div className="h-px w-8 bg-gray-600" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-10 rounded bg-emerald-500/30" />
                        <div className="h-px flex-1 bg-emerald-500/40" />
                        <div className="h-4 w-16 rounded bg-cyan-500/30" />
                        <div className="h-px flex-1 bg-cyan-500/40" />
                        <div className="h-4 w-12 rounded bg-emerald-500/30" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 text-xs text-gray-500">
                    <span className="rounded bg-gray-800 px-2 py-0.5">
                      Components: 24
                    </span>
                    <span className="rounded bg-gray-800 px-2 py-0.5">
                      Nets: 18
                    </span>
                    <span className="rounded bg-gray-800 px-2 py-0.5">
                      DRC: Pass
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
              Trusted by engineers and makers worldwide
            </p>
            <div className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:mx-0 lg:justify-start">
              <div className="flex items-center gap-1.5 text-gray-500">
                <GitHubIcon className="h-5 w-5" />
                <span className="text-sm font-medium">Open Source</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm font-medium">Browser-Based</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm font-medium">Free to Use</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M18.364 5.636a9 9 0 11-12.728 0M12 2v10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm font-medium">Works Offline</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm font-medium">Entirely Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
