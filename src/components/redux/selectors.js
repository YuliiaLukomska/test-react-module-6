// тут state - це весь поточний стан. Ми хочемо отримати доступ до частини стану: до тасок і до значення статусу фільтра
export const getTasks = (state) => state.tasks;

export const getStatusFilter = (state) => state.filters.status;
