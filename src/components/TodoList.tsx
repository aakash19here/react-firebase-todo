import { FC } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import db from "../config/firebase";

interface TodoListProps {
  todos: Todo[];
  userId: string | undefined;
}

const TodoList: FC<TodoListProps> = ({ todos, userId }) => {
  return (
    <div>
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
