import { useState } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeSimple, MapPin, PaperPlaneTilt } from '@phosphor-icons/react'
import { SectionHeader, Button, Input, TextArea } from '@/components/ui'
import { useScrollReveal } from '@/hooks'

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { ref, animate, initial, variants, transition } = useScrollReveal()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })
      setIsSubmitted(true)
      form.reset()
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section bg-surface">
      <div className="container">
        <SectionHeader
          title="Get in Touch"
          subtitle="Have a project in mind? Let's work together."
        />

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Contact Form */}
          <motion.div
            ref={ref}
            initial={initial}
            animate={animate}
            variants={variants}
            transition={transition}
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-raised bg-raised/50 p-12 text-center">
                <div className="mb-4 inline-flex rounded-full bg-syntax-green/10 p-4 text-syntax-green">
                  <PaperPlaneTilt size={32} weight="duotone" />
                </div>
                <h3 className="font-serif text-xl text-primary">Message Sent!</h3>
                <p className="mt-2 text-secondary">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <Input
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
                <TextArea
                  label="Message"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                />
                <Button type="submit" className="w-full">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="font-serif text-xl text-primary">Let&apos;s build something great</h3>
              <p className="mt-2 text-secondary">
                I&apos;m currently available for freelance work and interesting projects.
                If you have an idea you&apos;d like to discuss, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:gavin.pase.develops@gmail.com"
                className="flex items-center gap-3 text-secondary transition-colors hover:text-amber-400"
              >
                <EnvelopeSimple size={20} weight="duotone" />
                gavin.pase.develops@gmail.com
              </a>
              <div className="flex items-center gap-3 text-secondary">
                <MapPin size={20} weight="duotone" />
                Available Worldwide
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
