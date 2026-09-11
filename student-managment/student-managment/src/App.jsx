import Navbar from "./components/Navbar";
import Dashbord from "./components/Dashbord";
import Tasks from "./components/Tasks";
import './App.css';
import { Routes, Route } from "react-router-dom";
import TaskDeatiles from "./components/TaskDeatiles";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn DSA", value: "Basics of DSA", status: "Pending" },
    { id: 2, title: "Learn react", value: "Learn React fundamentals", status: "Completed" },
    { id: 3, title: "Build a project", value: "Build a simple React project", status: "Pending" },
    { id: 4, title: "Learn Django", value: "Build a simple Django project", status: "Pending" }
  ]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashbord tasks={tasks} setTasks={setTasks} />} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/Tasks/:id" element={<TaskDeatiles />} />
      </Routes>
    </div>
  );
}

export default App;
