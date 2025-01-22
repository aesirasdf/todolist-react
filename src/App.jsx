import React, { useEffect, useState } from "react";
import { destroy, index, store } from "./api/todos";
import { Button, TextField } from "@mui/material";

const URL = "http://127.0.0.1:8000/api";

export default function App() {
  const [todos, setTodos] = useState([]);

  const refreshTodo = () => {
    index().then((res) => {
      setTodos(res.data);
    });
  };

  const deleteClicked = (id) => {
    destroy(id)
      .then((res) => {
        console.log(res);
      })
      .finally(refreshTodo);
  };

  const createTodo = (e) => {
    e.preventDefault();
    const title = document.getElementById("inpTitle").value;

    store({ title })
      .then(() => refreshTodo())
      .finally(() => {
        document.getElementById("inpTitle").value = "";
      });
  };

  useEffect(refreshTodo, []);

  return (
    <main className="py-3 text-slate-300 ">
      <div>
        <h1 className="text-5xl text-center">Todos</h1>

        <form
          onSubmit={createTodo}
          action=""
          className="w-[300px] mx-auto bg-slate-300 p-5 mt-3"
        >
          <div className="text-black">Create Todo</div>
          <div>
            <TextField
              id="inpTitle"
              label="Title"
              size="small"
              sx={{ mt: 1 }}
            />
          </div>
          <Button size="small" type="submit" variant="contained" sx={{ mt: 1 }}>
            Create
          </Button>
        </form>
      </div>
      <div className="flex p-5 gap-4 flex-wrap justify-center">
        {todos.map((todo) => (
          <div key={todo.id}>
            <div className="flex w-[200px] gap-2 border border-slate-300 rounded-t-md p-2 items-center">
              <div className="flex-1">
                {todo.title.length > 10
                  ? `${todo.title.substr(0, 7).trim()}...`
                  : todo.title}
              </div>
              <div className="w-5 h-5 border border-slate-300 rounded-full"></div>
              <div className="w-5 h-5 border border-slate-300 rounded-full"></div>
              <div
                className="w-5 h-5 border border-slate-300 rounded-full bg-red-500"
                onClick={() => deleteClicked(todo.id)}
              ></div>
            </div>
            <div className="min-h-[100px] border border-slate-300 rounded-b-md p-1"></div>
          </div>
        ))}
      </div>
    </main>
  );
}
