import { MessageCircle, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Form,
  FormInput,
  FormTextarea,
} from '@/components/ui';

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const formContext = useForm<ContactForm>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });
  const [buttonText, setButtonText] = useState('Send Message');

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    formContext.reset();
  };

  useEffect(() => {
    if (formContext.formState.isSubmitting) {
      setButtonText('Sending...');
    }
    if (formContext.formState.isSubmitSuccessful) {
      setButtonText('Message Sent!');
      setTimeout(() => {
        setButtonText('Send Message');
      }, 1000);
    }
  }, [formContext.formState]);

  return (
    <div className="h-full">
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary" />
            Send Me a Message
          </CardTitle>
          <CardDescription>
            I'll get back to you as soon as possible
          </CardDescription>
        </CardHeader>
        <CardContent className="h-full">
          <Form {...formContext} handleSubmit={formContext.handleSubmit}>
            <form
              onSubmit={formContext.handleSubmit(onSubmit)}
              className="h-full"
            >
              <div className="flex flex-col h-full gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <FormInput
                      control={formContext.control}
                      name="name"
                      placeholder="Your name"
                      label="Name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <FormInput
                      control={formContext.control}
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      label="Email"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <FormInput
                    control={formContext.control}
                    name="subject"
                    placeholder="What is this regarding?"
                    label="Subject"
                    required
                  />
                </div>
                <FormTextarea
                  control={formContext.control}
                  name="message"
                  placeholder="Your message"
                  label="Message"
                  required
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={formContext.formState.isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {buttonText}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
