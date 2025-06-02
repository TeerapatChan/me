import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Label,
  Textarea,
} from '@/components/ui'

function ContactPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
  })
  const [formStatus, setFormStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      consent: checked,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Form validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.consent
    ) {
      alert('Please fill in all required fields and accept the privacy policy')
      return
    }

    setFormStatus('submitting')

    try {
      // This would be replaced with actual API call in production
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setFormStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        consent: false,
      })

      // Reset form status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000)
    } catch (error) {
      console.error('Error sending message:', error)
      setFormStatus('error')

      // Reset form status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000)
    }
  }

  if (isLoading) {
    return (
      <div className="container py-12 px-4 md:px-6 mx-auto">
        <div className="space-y-2 text-center mb-16">
          <Skeleton className="h-12 w-64 mx-auto" />
          <Skeleton className="h-6 w-1/2 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Skeleton className="h-96 w-full" />
          </div>
          <div className="space-y-6">
            <Skeleton className="h-96 w-full" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12 px-4 md:px-6 mx-auto">
      <div className="space-y-2 text-center mb-16">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Get In Touch
        </h1>
        <p className="text-muted-foreground md:text-xl max-w-[700px] mx-auto">
          I'm always interested in hearing about new projects and opportunities.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Feel free to reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">
                    San Francisco, California
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media Links */}
          <Card>
            <CardHeader>
              <CardTitle>Connect With Me</CardTitle>
              <CardDescription>Find me on these platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
                {/* Add more social media links as needed */}
              </div>
            </CardContent>
          </Card>

          {/* Availability Notice */}
          <Card>
            <CardHeader>
              <CardTitle>Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I'm currently{' '}
                <span className="text-green-500 font-medium">available</span>{' '}
                for freelance work or full-time positions. My typical response
                time is within 24-48 hours.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>
                I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    className="min-h-[150px] resize-y"
                    required
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={handleCheckboxChange}
                    required
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="consent"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the privacy policy
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Your information will never be shared with any third
                      party.
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'idle' && (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                  {formStatus === 'submitting' && 'Sending...'}
                  {formStatus === 'success' && 'Message Sent!'}
                  {formStatus === 'error' && 'Error! Try Again'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                What services do you offer?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I specialize in full-stack web development, including custom
                website development, web applications, e-commerce solutions, and
                API integrations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                What is your typical project timeline?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Project timelines vary based on complexity. A simple website
                might take 2-4 weeks, while complex applications can take 2-3
                months or more.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Do you offer maintenance services?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes, I offer ongoing maintenance and support packages to keep
                your website secure, up-to-date, and running smoothly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                What is your preferred tech stack?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I primarily work with React, Node.js, and MongoDB/PostgreSQL,
                but I'm adaptable and can work with various technologies based
                on project requirements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
