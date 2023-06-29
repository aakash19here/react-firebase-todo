import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { Toaster } from "./components/ui/toaster.tsx";

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ClerkProvider publishableKey={clerkPubKey}>
    <Toaster />
    <App />
  </ClerkProvider>
);
