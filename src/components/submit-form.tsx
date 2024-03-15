'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { FormControl, FormField, FormItem, FormMessage } from './ui/form'

const formSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: "Whoops, make sure it's an email" })
})

type FormData = z.infer<typeof formSchema>

const SubmitForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ''
    }
  })

  function onSubmit(data: FormData) {
    console.log(data)
  }

  const { errors } = form.formState

  return (
    <FormProvider {...form}>
      <form
        className='grid gap-4 md:flex md:w-[450px] md:items-start md:mx-auto'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem error={!!errors.email} className='md:flex-1'>
              <FormControl>
                <Input placeholder='Enter your email address' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' variant='accent' className='capitalize'>
          Contact us
        </Button>
      </form>
    </FormProvider>
  )
}

export default SubmitForm
