import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import { ListTodo } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 fixed top-0 z-10 w-full flex justify-between text-white px-8 py-6">
      <div className="flex gap-3">
        <ListTodo />
        <h1>RealistTodo</h1>
      </div>

      <SignedIn>
        <div className="flex gap-3">
          <UserButton />
          <SignOutButton />
        </div>
      </SignedIn>
      <SignedOut>
        <Button variant={"outline"}>
          <SignInButton />
        </Button>
      </SignedOut>
    </nav>
  );
}
