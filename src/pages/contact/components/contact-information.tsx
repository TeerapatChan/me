import {
  Contact,
  Github,
  Handshake,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { ContactDetail } from '@/components';

export default function ContactInformation() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Contact className="h-5 w-5 text-primary" />
            Contact Information
          </CardTitle>
          <CardDescription>
            Feel free to reach out through any of these channels
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <ContactDetail
            icon={<Mail className="h-5 w-5 text-primary" />}
            title="Email"
            value="teerapat.chtrmn@gmail.com"
            href="mailto:teerapat.chtrmn@gmail.com"
          />
          <ContactDetail
            icon={<Phone className="h-5 w-5 text-primary" />}
            title="Phone"
            value="+66 94 192 3499"
            href="tel:+66941923499"
          />
          <ContactDetail
            icon={<MapPin className="h-5 w-5 text-primary" />}
            title="Location"
            value="Bangkok, Thailand"
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Handshake className="h-5 w-5 text-primary" />
            Connect With Me
          </CardTitle>
          <CardDescription>Find me on these platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary">
              <a
                href="https://github.com/teerapatchan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </Button>
            <Button variant="secondary">
              <a
                href="https://linkedin.com/in/teerapatchan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
