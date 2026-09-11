import StatCard from "./StatCard";
import TaskCard from "./TaskCard";
import AddTask from "./AddTask";

function Dashboard({ tasks, setTasks }) {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.status === "Completed").length;
    const pendingTasks = totalTasks - completedTasks;

    function toggleTask(id) {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id
                    ? { ...task, status: task.status === "Completed" ? "Pending" : "Completed" }
                    : task
            )
        );
    }

    function deleteTask(id) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }

    function addTask(newTask) {
        setTasks((prevTasks) => [
            ...prevTasks,
            {
                ...newTask,
                value: newTask.value || newTask.description,
                status: newTask.status || "Pending"
            }
        ]);
    }

    return (
        <main className="Dashboard">
            <header className="dashboard-header"></header>

            <div className="stats-grid">
                <StatCard title={"total tasks"} value={String(totalTasks)} />
                <StatCard title={"completed tasks"} value={String(completedTasks)} />
                <StatCard title={"pending tasks"} value={String(pendingTasks)} />
            </div>

            <section className="task-section">
                <AddTask onAddTask={addTask} />

                <h2>Recent Tasks</h2>
                <div className="task-list">
                    {tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            value={task.value}
                            status={task.status}
                            onToggle={() => toggleTask(task.id)}
                            onDelete={() => deleteTask(task.id)}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Dashboard;
