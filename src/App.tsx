import { useEffect, useState } from "react";
import db from "./config/firebase";
import firebase from "firebase";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import TodoList from "./components/TodoList";
import Navbar from "./components/navbar";
import { SignedIn, useUser } from "@clerk/clerk-react";
import { ListPlus } from "lucide-react";

const App = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      db.collection(user.id)
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot.docs.map((doc) => doc.data().todo));
          setTodos(snapshot.docs.map((doc) => doc.data().todo));
        });
    }
  }, [isLoaded, isSignedIn]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    db.collection(user?.id!).add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <>
      <Navbar />
      <div className="mt-32 h-auto max-w-7xl mx-auto">
        <form typeof="submit">
          <div className="flex gap-3">
            <Input
              type="text"
              value={input}
              required
              onChange={(e) => setInput(e.target.value)}
            />
            <Button type="submit" className="w-32" onClick={addTodo}>
              <ListPlus />
            </Button>
          </div>
        </form>
        <SignedIn>
          <TodoList todos={todos} />
        </SignedIn>
      </div>
    </>
  );
};

const AppWrapper = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded || !isSignedIn) {
    return (
      <div>
        <Navbar />
      </div>
    );
  }

  return <App />;
};

export default AppWrapper;
