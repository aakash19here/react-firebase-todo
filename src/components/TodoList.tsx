import { FC } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

interface TodoListProps {
  todos: string[];
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, id) => (
        <Card className="mt-4" key={id}>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>{todo}</CardTitle>
              <Button variant={"outline"}>
                <Trash2 />
              </Button>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
