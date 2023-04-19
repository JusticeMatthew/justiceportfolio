import type { FC } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { IconSend } from '@tabler/icons-react';
import { Button } from '@/components';
import { contactFormValidator } from '@/utils/contactFormValidator';

type FormData = z.infer<typeof contactFormValidator>;

type emailjsError = Error & { text: string };

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactFormValidator),
  });

  const sendEmail = async ({ name, email, message }: FormData) => {
    try {
      const validatedForm = contactFormValidator.parse({
        name,
        email,
        message,
      });

      await toast.promise(
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
          validatedForm,
          process.env.NEXT_PUBLIC_EMAILJS_USER,
        ),
        {
          loading: 'Sending...',
          success: <b>Message Sent</b>,
          error: (err: emailjsError) => <b>{err.text}</b>,
        },
      );
      reset();
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError('name', { message: error.message });
        setError('email', { message: error.message });
        setError('message', { message: error.message });
        return;
      }
    }
  };

  const inputStyles =
    'text-sm bg-zinc-900 rounded-lg focus:ring-2 border-none focus:ring-green focus:outline-none focus:border-none peer w-full placeholder-transparent';

  const labelStyles =
    'transition-all cursor-text font-roboto uppercase absolute left-3 -top-5 text-label text-zinc-200 peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-5 peer-placeholder-shown:capitalize peer-focus:text-label peer-focus:text-zinc-200 peer-focus:uppercase';

  const inputErrorStyles =
    'text-sm bg-zinc-900 rounded-lg focus:ring-2 border-none ring-2 ring-red-500 focus:ring-red-500 focus:outline-none focus:border-none peer w-full placeholder-transparent';

  const errorMessageStyles =
    'absolute -top-5 right-3 font-robotoCondensed text-formError uppercase text-red-500';

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(sendEmail)}
      className="z-10 flex h-auto w-72 flex-col gap-6 text-white md:w-96"
    >
      <div className="flex flex-col gap-6 md:flex-row md:gap-4">
        <div className="relative">
          <input
            id="name"
            type="text"
            placeholder="Name"
            {...register('name')}
            className={twMerge(
              errors.name ? inputErrorStyles : inputStyles,
              'h-10',
            )}
          />
          <label htmlFor="name" className={labelStyles}>
            Name
          </label>
          {errors.name && <span className={errorMessageStyles}>required</span>}
        </div>
        <div className="relative">
          <input
            id="email"
            type="text"
            placeholder="Email"
            {...register('email')}
            className={twMerge(
              errors.email ? inputErrorStyles : inputStyles,
              'h-10',
            )}
          />
          <label htmlFor="email" className={labelStyles}>
            Email
          </label>
          {errors.email && (
            <span className={errorMessageStyles}>Valid email required</span>
          )}
        </div>
      </div>
      <div className="relative">
        <textarea
          id="message"
          placeholder="Message"
          {...register('message')}
          className={twMerge(
            errors.message ? inputErrorStyles : inputStyles,
            'h-40 resize-none',
          )}
        />
        <label htmlFor="message" className={labelStyles}>
          Message
        </label>
        {errors.message && <span className={errorMessageStyles}>required</span>}
      </div>
      <Button
        variant="primary"
        size="small"
        className="mx-auto h-10 bg-zinc-950"
      >
        Send
        <IconSend
          size={16}
          stroke={2.5}
          className="ml-1 inline -translate-y-[1px]"
        />
      </Button>
    </form>
  );
};

export default ContactForm;
