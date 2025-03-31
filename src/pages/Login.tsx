
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Brain } from "lucide-react";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // This would typically connect to your auth system
    // For now we'll simulate a login with a toast
    toast({
      title: "Login Attempt",
      description: `Attempted login with email: ${values.email}`,
    });
    
    // Simulate successful login after 1 second
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: "Welcome back to MindEase!",
      });
      navigate("/");
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted p-4">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-mindease-primary" />
            <span className="text-2xl font-bold mindease-gradient-text">MindEase</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-mindease-primary hover:bg-mindease-secondary">
              Sign In
            </Button>
          </form>
        </Form>

        <div className="mt-6 flex flex-col space-y-2 text-center text-sm">
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <Button variant="link" className="p-0 text-mindease-primary" onClick={() => navigate("/")}>
              Sign up
            </Button>
          </p>
          <Button variant="link" className="text-muted-foreground" onClick={() => navigate("/")}>
            Forgot your password?
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
