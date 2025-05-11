"use client"

import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { contactForm as formSchema } from "@/lib/formSchame"
import { useForm as useZodForm } from "react-hook-form"
import { Form, FormControl, FormField, FormLabel, FormItem, FormMessage } from "../ui/form"
const ContactForm = () => {
  const [state, handleSubmit] = useForm("mbloaybp")

  const form = useZodForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    }
  })

  const onSubmit = async (values:z.infer<typeof formSchema>) => {
    handleSubmit(values)
  }

  if(state.succeeded){
    return <p> Merci pour votre message, vous aurez un retour en moins de 24h </p>
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Votre email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Votre message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="entrer au minimum 100 caractère"
                  {...field}
                />
              </FormControl>

              <FormMessage />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </FormItem>
          )}
        />

        <span className="flex justify-end">
          <Button type="submit" disabled={state.submitting}>
            {state.submitting ? (
              <span className="animate-spin p-2 w-6 h-6 border-4 border-b-transparent rounded-full" />
            ) : (
              "Envoyer"
            )}
          </Button>
        </span>
      </form>
    </Form>
  )
}
const Footer = () => {

  return (
    <div className="flex items-center justify-center flex-col space-y-24 py-4 min-h-[70vh] px-4">
        <span className="flex items-center flex-col space-x-1 ">
            <h1 className="text-2xl">Contact & Collaboration</h1>

            <p className="text-center text-muted-foreground text-sm">
                Vous avez une idée ou un projet en tête ? Ensemble, construisons des applications innovantes qui font la différence.
            </p>
        </span>

        <div className="w-full max-w-md"> 
            <ContactForm />
        </div>  
    </div>
  )
}

export default Footer