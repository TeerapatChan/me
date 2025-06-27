import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { ContactDetail } from '@/components';

export default function ResumeContact() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-lg">Contact</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <ContactDetail
          icon={<Mail className="h-4 w-4" />}
          title="Email"
          value="teerapat.chtrmn@gmail.com"
          href="mailto:teerapat.chtrmn@gmail.com"
          size="sm"
        />
        <ContactDetail
          icon={<Phone className="h-4 w-4" />}
          title="Phone"
          value="+66 94 192 3499"
          href="tel:+66941923499"
          size="sm"
        />
        <ContactDetail
          icon={<MapPin className="h-4 w-4" />}
          title="Location"
          value="Bangkok, Thailand"
          size="sm"
        />
        <ContactDetail
          icon={<Linkedin className="h-4 w-4" />}
          title="LinkedIn"
          value="Teerapat Chantaramanee"
          href="https://linkedin.com/in/teerapatchan"
          size="sm"
        />
        <ContactDetail
          icon={<Github className="h-4 w-4" />}
          title="GitHub"
          value="TeerapatChan"
          href="https://github.com/teerapatchan"
          size="sm"
        />
      </CardContent>
    </Card>
  );
}
