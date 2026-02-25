import { Button } from '@/components/Button'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Start designing today
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            No downloads, no license keys, no credit card. Open your browser,
            sign up in seconds, and start building your next project right now.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="https://app.opennuts.com" color="white">
              Launch App
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
