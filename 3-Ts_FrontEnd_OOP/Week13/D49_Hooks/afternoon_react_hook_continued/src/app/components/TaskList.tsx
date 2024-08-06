const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.completed ? "Completed" : "Not Completed"}</p>
          <p>-------------------</p>
        </div>
      ))}
    </>
  );
};

export default TaskList;
