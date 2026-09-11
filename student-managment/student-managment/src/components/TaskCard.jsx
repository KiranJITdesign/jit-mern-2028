import { Link } from "react-router-dom";

function TaskCard({ title, value, status, onToggle, onDelete, id }) {
  return (
    <article className="task-card">
      <h3>{title}</h3>
      <p>{value}</p>
      <p>{status}</p>
      <button onClick={onToggle}>Change Status</button>
      <button onClick={onDelete}>Delete Task</button>
      <Link to={`/Tasks/${id}`}>View details</Link>
    </article>
  );
}

export default TaskCard;
