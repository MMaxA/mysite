import { configureStore, createSlice } from '@reduxjs/toolkit';

const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (e) {
    // Ignore write errors
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: 'maximmedvedev',
    email: 'maxim@example.com',
    password: 'password123',
    name: 'Maxim Medvedev',
  },
  reducers: {},
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: loadState('todos') || [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: loadState('tasks') || {
    new: [],
    inProgress: [],
    done: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.new.push({ id: Date.now(), text: action.payload, status: 'new' });
    },
    editTask: (state, action) => {
      const { id, newText } = action.payload;
      const task = [...state.new, ...state.inProgress, ...state.done].find(task => task.id === id);
      if (task) {
        task.text = newText;
      }
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      state.new = state.new.filter(task => task.id !== id);
      state.inProgress = state.inProgress.filter(task => task.id !== id);
      state.done = state.done.filter(task => task.id !== id);
    },
    changeTaskStatus: (state, action) => {
      const { id, newStatus } = action.payload;
      let task;
      ['new', 'inProgress', 'done'].forEach(status => {
        state[status] = state[status].filter(t => {
          if (t.id === id) {
            task = { ...t, status: newStatus };
            return false;
          }
          return true;
        });
      });
      if (task) {
        state[newStatus].push(task);
      }
    },
    reorderTask: (state, action) => {
      const { source, destination } = action.payload;
      const [removed] = state[source.droppableId].splice(source.index, 1);
      state[destination.droppableId].splice(destination.index, 0, removed);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export const { addTask, editTask, deleteTask, changeTaskStatus, reorderTask } = tasksSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    todos: todosSlice.reducer,
    tasks: tasksSlice.reducer,
  },
});

store.subscribe(() => {
  saveState('todos', store.getState().todos);
  saveState('tasks', store.getState().tasks);
});

export default store;
