import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Is OpenNuts really free?',
      answer:
        'Yes. The Community plan is free forever and includes everything you need for personal projects — schematic capture, PCB layout, 3D viewing, and manufacturing exports. No credit card required.',
    },
    {
      question: 'What file formats does OpenNuts support?',
      answer:
        'OpenNuts can import KiCad, Eagle, and Altium projects. It exports Gerber, Excellon drill, pick-and-place CSV, BOM spreadsheets, STEP, IGES, and PDF for documentation.',
    },
    {
      question: 'Can I use OpenNuts offline?',
      answer:
        'OpenNuts is primarily browser-based and requires an internet connection. However, we offer a PWA mode that caches your recent projects for limited offline editing, with full sync when you reconnect.',
    },
  ],
  [
    {
      question: 'How does OpenNuts compare to KiCad or Altium?',
      answer:
        'OpenNuts combines electronic and mechanical design in one tool, runs in the browser with zero installation, and includes real-time collaboration. Think of it as KiCad + FreeCAD + Google Docs, unified into a single experience.',
    },
    {
      question: 'Is my design data safe?',
      answer:
        'Your designs are encrypted at rest and in transit. Projects are stored in your account and are never shared without your permission. You can export and delete all your data at any time.',
    },
    {
      question: 'Can I self-host OpenNuts?',
      answer:
        'Yes. OpenNuts is open source under the MIT license. You can clone the repository and run the entire platform on your own infrastructure. Documentation for self-hosting is available on our GitHub.',
    },
  ],
  [
    {
      question: 'What does "electromechanical" mean?',
      answer:
        'Electromechanical design involves both electronic circuits and mechanical structures — things like a motor controller in a custom enclosure, or a sensor PCB mounted in a bracket. OpenNuts lets you design both in the same workspace.',
    },
    {
      question: 'How do I contribute to OpenNuts?',
      answer:
        'Head to our GitHub repository. We welcome contributions of all kinds — bug reports, feature requests, documentation improvements, component libraries, and code. Check the CONTRIBUTING.md for guidelines.',
    },
    {
      question: 'Do you offer educational or non-profit discounts?',
      answer:
        'Yes. Educational institutions and registered non-profits get the Team plan free for qualifying members. Contact us at edu@opennuts.com to apply.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:hello@opennuts.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg/6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
