import { useState } from "react";

function AddTask({ onAddTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!title.trim() || !description.trim()) {
            return;
        }

        const task = {
            id: Date.now(),
            title: title.trim(),
            value: description.trim(),
            description: description.trim(),
            status: "Pending"
        };

        onAddTask(task);
        setTitle("");
        setDescription("");
    }

    return (
        <div>
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <label>Add Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Add Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}

export default AddTask;
