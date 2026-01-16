import styles from "./TaskItem.module.css";

function TaskItem({ task, onShowDescription }) {
    const isHighPriority = task.prioridade === "Alta";
    const isPending = task.status === "Pendente";

    const liClassName = `
        ${styles.taskItem}
        ${isHighPriority ? styles.highPriority : ""}
    `.trim();

    return(
        <li className = {liClassName}>
            <h3>{task.titulo}</h3>
            <p>Categoria: {task.categoria}</p>
            <p>Prioridade: {task.prioridade}</p>
            <p>Status: {task.status}</p>

            {isHighPriority && isPending && (
                <span className = {styles.urgent}>Urgente!</span>
            )}

            <button className={styles.descriptionButton} onClick={() =>
                onShowDescription(task.descricao)
            }>Ver descrição</button>
        </li>
    );
}
export default TaskItem;