"use client"


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { subjects } from "@/constants"

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  topic: z.string().min(1, { message: "Topic is required" }),
  voice: z.string().min(1, { message: "Voice is required" }),
  style: z.string().min(1, { message: "Style is required" }),
  duration: z.number().min(1, { message: "Duration is required" }),
})

const CompanionsForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      topic: "",
      voice: "",
      style: "",
      duration: 15,
    },
  })
 
  // 2. Define a submit handler.
 const onSubmit = (values: z.infer<typeof formSchema>)=> {
   
    console.log(values)
  }

  return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Companion's Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Companion's Name" {...field} className="input"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject Name</FormLabel>
                <FormControl>
                <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
  <SelectTrigger className="input capitalize">
    <SelectValue placeholder="select subject" />
  </SelectTrigger>
  <SelectContent>
                 {subjects.map((subject) => (
                  <SelectItem key={subject} value={subject} className="capitalize">{subject}</SelectItem>
                 ))}
  </SelectContent>
</Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Topic Name</FormLabel>
                <FormControl>
                  <Input placeholder="topic name" {...field} className="input"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="voice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Voice Name</FormLabel>
                <FormControl>
                <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
  <SelectTrigger className="input ">
    <SelectValue placeholder="select voice" />
  </SelectTrigger>
  <SelectContent>
                 <SelectItem value="male" className="capitalize">male</SelectItem>
                 <SelectItem value="female" className="capitalize">female</SelectItem>
                 
  </SelectContent>
</Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="style"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Style Name</FormLabel>
                <FormControl>
                <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
  <SelectTrigger className="input ">
    <SelectValue placeholder="select style" />
  </SelectTrigger>
  <SelectContent>
                 <SelectItem value="casual" className="capitalize">casual</SelectItem>
                 <SelectItem value="formal" className="capitalize">formal</SelectItem>
                 
  </SelectContent>
</Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="15" {...field} className="input"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        <Button type="submit" className="w-full cursor-pointer">build companion</Button>
      </form>
    </Form>
  )
}

export default CompanionsForm