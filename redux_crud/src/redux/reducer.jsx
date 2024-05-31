import { ADD_TASK, DELETE_TASK, EDIT_TASK } from './actions';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('List')) || []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTasks = [...state.tasks, action.payload];
      localStorage.setItem('List', JSON.stringify(newTasks));
      return {
        ...state,
        tasks: newTasks
      };
    case DELETE_TASK:
      const filteredTasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('List', JSON.stringify(filteredTasks));
      return {
        ...state,
        tasks: filteredTasks
      };
    case EDIT_TASK:
      const editedTasks = state.tasks.map(task =>
        task.id === action.payload.id ? action.payload : task
      );
      localStorage.setItem('List', JSON.stringify(editedTasks));
      return {
        ...state,
        tasks: editedTasks
      };
    default:
      return state;
  }
};

export default todoReducer;
