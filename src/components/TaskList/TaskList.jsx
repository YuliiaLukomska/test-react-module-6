import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import { getTasks, getStatusFilter } from "../redux/selectors";
import { statusFilters } from "../redux/constants";

// тут повертаємо таски, які буде відображено в інтерфейсі в залежності від обраного користувачем фільтру(All/Active/Completed).
const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul>
      {visibleTasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
