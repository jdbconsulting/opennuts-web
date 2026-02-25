'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    title: 'Finally, one tool for everything.',
    body: 'I used to switch between KiCad, FreeCAD, and a spreadsheet for BOMs. OpenNuts replaced all three and I can do it from any computer.',
    author: 'MechatronicsEng',
    rating: 5,
  },
  {
    title: 'Game changer for our startup.',
    body: 'Our hardware team is spread across three countries. Real-time collaboration on schematics and mechanical designs has cut our iteration time in half.',
    author: 'HardwareFounder',
    rating: 5,
  },
  {
    title: 'The browser-based approach works.',
    body: "I was skeptical about CAD in a browser, but the performance is genuinely impressive. My students can start designing without wrestling with installations.",
    author: 'ProfChen',
    rating: 5,
  },
  {
    title: 'Open source done right.',
    body: "I needed a custom DRC rule for high-voltage creepage. Forked the repo, added it in a weekend, and submitted a PR. Can't do that with Altium.",
    author: 'PowerElectronicsGuy',
    rating: 5,
  },
  {
    title: 'Perfect for teaching.',
    body: 'My students just open a link and start designing. No more wasting the first two weeks of every semester on software installation and licensing.',
    author: 'DrRobotics',
    rating: 5,
  },
  {
    title: 'Replaced our entire toolchain.',
    body: 'We went from schematic capture to Gerber files to STEP export for the enclosure — all in one tool. Our BOM even updates automatically.',
    author: 'ProductDesigner42',
    rating: 5,
  },
  {
    title: 'Love the version control.',
    body: 'Being able to branch a design, try a different component layout, and visually diff the results is incredibly powerful. Every CAD tool should work this way.',
    author: 'PCBartist',
    rating: 5,
  },
  {
    title: 'Hobbyist approved.',
    body: "I'm building a custom robot controller and OpenNuts has been perfect. Schematic to PCB to enclosure in a single free tool. Incredible.",
    author: 'MakerMike',
    rating: 5,
  },
  {
    title: 'Mechanical + electrical = magic.',
    body: 'Designing the PCB and the enclosure in the same tool means I can see immediately when a connector interferes with a mounting post. Saved me from three respins already.',
    author: 'MechEbyDay',
    rating: 5,
  },
  {
    title: 'Better than expected.',
    body: "Downloaded? No, I didn't download anything. That's the beauty of it. Opened a tab, logged in, and my project from yesterday was right there.",
    author: 'EmbeddedSara',
    rating: 5,
  },
  {
    title: 'Contributing was easy.',
    body: 'The codebase is clean and well-documented. I added SPICE simulation support as a plugin in about a month. The maintainers were super helpful.',
    author: 'OpenSourceHero',
    rating: 5,
  },
  {
    title: 'Our go-to for prototyping.',
    body: "We use OpenNuts for all our rapid prototyping. From concept to PCB order in under a day — that's the kind of speed our clients expect.",
    author: 'DesignHouseRick',
    rating: 5,
  },
  {
    title: 'Runs everywhere.',
    body: 'I started a design on my desktop at work, refined it on my laptop at home, and showed the 3D preview to our investor on my iPad at coffee. Same project, no sync issues.',
    author: 'NomadEngineer',
    rating: 5,
  },
  {
    title: 'Freemium model is fair.',
    body: "The free tier has everything a hobbyist needs. We upgraded to Pro for the team features and it's a fraction of what we paid for commercial ECAD licenses.",
    author: 'SmallBatchHW',
    rating: 5,
  },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-cyan-500' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg/6 font-semibold before:content-['\u201C'] after:content-['\u201D']">
          {title}
        </p>
        <p className="mt-3 text-base/7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['\u2013\u00A0']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({ reviews, className, reviewClassName, msPerPixel = 0 }) {
  let columnRef = useRef(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-196 max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Engineers are building with OpenNuts.
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          From hobbyists to hardware startups, thousands of engineers design
          with OpenNuts every day.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
