import { Frown } from "lucide-react";
import Navbar from "../navbar";
import { SignInButton } from "@clerk/clerk-react";
import { Button } from "../ui/button";

export default function UserNotFound() {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl flex items-center">
          <Frown className="" />
          You were not found
        </h1>
        <Button variant={"secondary"} className="my-4">
          <SignInButton />
        </Button>
      </div>
    </div>
  );
}
