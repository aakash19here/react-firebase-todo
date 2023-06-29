import { FC } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { RocketIcon, Trash2 } from "lucide-react";
import db from "../config/firebase";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

interface TodoListProps {
  todos: Todo[];
  userId: string | undefined;
}

const TodoList: FC<TodoListProps> = ({ todos, userId }) => {
  return (
    <div>
      {todos.length === 0 && (
        <div className="flex flex-col mx-auto max-w-3xl justify-center items-center mt-[10%] overflow-y-hidden">
          <Alert>
            <AlertTitle className="text-2xl pl-3">No Todo's Found</AlertTitle>
          </Alert>
          <Alert className="mt-2">
            <AlertDescription>Start Creating them today</AlertDescription>
          </Alert>
        </div>
      )}
      {todos.map((todo) => (
        <Card className="mt-4" key={todo.id}>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>{todo.todo}</CardTitle>
              <Button
                variant={"outline"}
                onClick={() => db.collection(userId!).doc(todo.id).delete()}
              >
                <Trash2 />
              </Button>
            </div>
            <CardDescription>{todo.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
