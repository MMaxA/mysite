import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, editTask, deleteTask, changeTaskStatus } from '../store/store';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './TaskManager.css'; // Import CSS for TaskManager component

const TaskManager = () => {
  const [taskText, setTaskText] = useState('');
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    dispatch(changeTaskStatus({
      id: parseInt(result.draggableId),
      newStatus: destination.droppableId
    }));
  };

  return (
    <div className="container taskManager-wrapper">
      <h2>Task Manager</h2>
      <div className="task-manager">
        <div className="task-input">
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter a new task"
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="task-groups">
            {Object.keys(tasks).map((status) => (
              <Droppable key={status} droppableId={status}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="task-group"
                  >
                    <h3>{status.charAt(0).toUpperCase() + status.slice(1)}</h3>
                    {tasks[status].map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="task-card"
                          >
                            <textarea
                              type="text"
                              value={task.text}
                              onChange={(e) => dispatch(editTask({ id: task.id, newText: e.target.value }))}
                            />
                            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default TaskManager;
