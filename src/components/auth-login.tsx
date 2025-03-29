"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import useUserStore from "@/store/useUserStore";
import { z } from "zod";
import { Label } from "./ui/label";

const formSchema = z.object({
  email: z.string().email({
    message: "Email must be a valid email.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

// {
//   setAuthMedium,
// }: {
//   setAuthMedium: (val: "signup" | "login") => void;
// }

function AuthLogin() {
  const { login } = useUserStore();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // console.log(form.control);

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      await login({ email: values.email, password: values.password });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center justify-center py-12"
      >
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input autoFocus={true} placeholder="m@example.com" {...field} />
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
                  <FormLabel className="text-gray-800 flex items-center justify-between text-[15px]">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="reset-password"
                      className="ml-auto inline-block text-sm underline"
                    >
                      Forgot your password?
                    </a>
                  </FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={form.formState.isSubmitting}
              type="submit"
              className="w-full"
            >
              Login
            </Button>
          </div>

          {/* <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <span
              // onClick={() => setAuthMedium("signup")}
              className="cursor-pointer underline"
            >
              Sign up
            </span>
          </div> */}
        </div>
      </form>
    </Form>
  );
}

export default AuthLogin;
