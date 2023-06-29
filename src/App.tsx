import { useEffect, useState } from "react";
import db from "./config/firebase";
import firebase from "firebase";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import TodoList from "./components/TodoList";
import Navbar from "./components/navbar";
import { SignedIn, useUser } from "@clerk/clerk-react";
import { ListPlus } from "lucide-react";
import { useToast } from "./hooks/use-toast";
import UserNotFound from "./components/layout/user-not-found";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");
  const { isLoaded, isSignedIn, user } = useUser();
  const { toast } = useToast();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      db.collection(user.id)
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          // setTodos(snapshot.docs.map((doc) => doc.data().todo));
          console.log(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              timestamp: doc.data().timestamp,
              todo: doc.data().todo,
              description: doc.data().description,
            }))
          );
          setTodos(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              todo: doc.data().todo,
              description: doc.data().description,
            }))
          );
        });
    }
  }, [isLoaded, isSignedIn]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.length === 0) {
      toast({
        description: "Please type the title",
        variant: "destructive",
      });
      return;
    }
    db.collection(user?.id!).add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <>
      <Navbar />
      <div className="mt-32 mb-10 h-auto max-w-7xl mx-auto">
        <form typeof="submit">
          <div className="flex gap-3">
            <Input
              type="text"
              className="p-4"
              value={input}
              required
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter the Todo"
            />
            <Button type="submit" className="w-32" onClick={addTodo}>
              <ListPlus />
            </Button>
          </div>
        </form>
        <SignedIn>
          <TodoList todos={todos} userId={user?.id} />
        </SignedIn>
      </div>
    </>
  );
};

const AppWrapper = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded || !isSignedIn) {
    return <UserNotFound />;
  }

  return <App />;
};

export default AppWrapper;
