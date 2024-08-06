import logo from "./logo.svg";
import "./App.css";
import { client } from "./client";

function App() {
  const todo1 = {
    _id: "111222333",
    _type: "todo",
    name: "todo3name",
  };
  const CreateTodo = () => {
    console.log("createTodo");
    client.createIfNotExists(todo1).then(() => {
      console.log("todo3 created");
    });
  };
  const UpdateTodo = () => {
    console.log("UpdateTodo");
    client
      .patch(todo1._id)
      .set({ name: "todo3nameupdated" })
      .commit()
      .then(() => {
        console.log("todo1 updated");
      })
      .catch((error) => {
        console.error("Error updating todo1:", error);
      });
  };
  const DeleteTodo = () => {
    console.log("UpdateTodo");
    client.delete(todo1._id).then(() => {
      console.log("DeleteTodo1 created");
    });
  };
  return (
    <div className="App">
      App
      <button onClick={CreateTodo}>Create Todo</button>
      <button onClick={UpdateTodo}>Update Todo</button>
      <button onClick={DeleteTodo}>Delete Todo</button>
    </div>
  );
}

export default App;
