import TaskItem from "./TaskItem";

function TaskList({ tasks,
    onShowDescription }) {
        return(
            <ul>
                {tasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onShowDescription = {onShowDescription} 
                    />
                ))}
            </ul>
        );
    }
export default TaskList;