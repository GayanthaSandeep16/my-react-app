import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React", done: false, priority: "high" },
    { id: 2, task: "Practice coding", done: false, priority: "low" },
  ]);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("high");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  // Priority order for sorting
  const priorityOrder = { high: 1, medium: 2, low: 3 };

  //add task function
  const addTask = () => {
    if (newTask.trim() === "") return;

    const taskExists = todos.some(
      (todo) => todo.task.toLowerCase() === newTask.trim().toLowerCase()
    );

    if (taskExists) {
      alert("This task already exists!");
      return;
    }

    const newTodo = {
      id: Date.now(),
      task: newTask,
      done: false,
      priority: priority,
    };

    setTodos([...todos, newTodo]);
    setNewTask("");
    setPriority("high");
  };

  const clearAll = () => {
    setTodos([]);
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const editTask = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditingId(id);
    setEditingText(todoToEdit.task);
  };

  const saveEdit = (id) => {
    if (editingText.trim() === "") {
      alert("Task name cannot be empty!");
      return;
    }

    // Check if the edited task name already exists (excluding current task)
    const taskExists = todos.some(
      (todo) =>
        todo.id !== id &&
        todo.task.toLowerCase() === editingText.trim().toLowerCase()
    );

    if (taskExists) {
      alert("This task already exists!");
      return;
    }

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: editingText.trim() } : todo
      )
    );
    setEditingId(null);
    setEditingText("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  const completedTasks = todos.filter((todo) => todo.done === true);
  const inCompletedTasks = todos.filter((todo) => todo.done === false);

  return (
    <div>
      <h2>Todo List 📝</h2>
      <input
        type="text"
        placeholder="New task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <label htmlFor="priority">Priority:</label>
      <select
        id="priority"
        name="priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <button onClick={addTask}>Add</button>

      {todos.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <ul>
          {[...todos]
            .sort(
              (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
            )
            .map((todo) => (
              <li key={todo.id}>
                {editingId === todo.id ? (
                  // Edit mode
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <input
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      style={{ flex: 1 }}
                      autoFocus
                    />
                    <button
                      onClick={() => saveEdit(todo.id)}
                      style={{ backgroundColor: "#4CAF50", color: "white" }}
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      style={{ backgroundColor: "#f44336", color: "white" }}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  // Normal view mode
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      onClick={() => toggleDone(todo.id)}
                      style={{
                        textDecoration: todo.done ? "line-through" : "none",
                        cursor: "pointer",
                        color: todo.done ? "green" : "black",
                        flex: 1,
                      }}
                    >
                      {todo.task}{" "}
                      <span style={{ fontSize: "0.8em", color: "#666" }}>
                        ({todo.priority})
                      </span>
                    </span>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button
                        onClick={() => editTask(todo.id)}
                        style={{ backgroundColor: "#2196F3", color: "white" }}
                      >
                        ✏️ Edit
                      </button>
                      <button onClick={() => deleteTask(todo.id)}>🗑</button>
                    </div>
                  </div>
                )}
              </li>
            ))}
        </ul>
      )}

      <button onClick={clearAll}> clearAll</button>

      <div>
        {todos.length > 0 && (
          <div style={{ marginTop: "20px" }}>
            <h3>📊 Task Summary</h3>

            <div style={{ marginBottom: "15px" }}>
              <h4>✅ Completed Tasks ({completedTasks.length}):</h4>
              {completedTasks.length > 0 ? (
                <ul>
                  {completedTasks.map((todo) => (
                    <li style={{ color: "green" }}>
                      {todo.task} ({todo.priority})
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No completed tasks yet</p>
              )}
            </div>

            <div>
              <h4>🔄 In Progress Tasks ({inCompletedTasks.length}):</h4>
              {inCompletedTasks.length > 0 ? (
                <ul>
                  {inCompletedTasks.map((todo) => (
                    <li key={todo.id} style={{ color: "#333" }}>
                      {todo.task} ({todo.priority})
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No pending tasks</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoList;
