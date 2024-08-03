"use client";

import { signIn } from "next-auth/react";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (result?.ok) {
      router.push("/dashboard");
      toast.success("Login In Successful");
    } else {
      // Handle error
      toast.error("Invalid Credentials");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-screen flex justify-center items-center"
    >
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome back dear Admin</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">User Name</Label>
            <Input
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              type="text"
              placeholder="Jhonwick"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Log In
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
