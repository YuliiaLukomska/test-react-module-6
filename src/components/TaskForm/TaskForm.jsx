import { useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import { addTask } from "../redux/actions";

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    /*Вводжу в поле нову таску і роблю сабміт форми - в обробнику події(сабміту) відправляю екшн до стору 
    (відбулась ініціалізація відправки екшену).  */
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </form>
  );
};
