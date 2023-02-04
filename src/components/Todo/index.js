import { useState } from "react";

const defaultItmes = [
  {
    name: "Item A",
  },
  {
    name: "Item B",
  },
  {
    name: "Item C",
  },
];

const Todo = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState(defaultItmes);

  const addItem = () => {
    setItems((prev) => [...prev, { name: text }]);
    setText("");
  };
  return (
    <div>
      <label>
      Text
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <button onClick={addItem}>Add</button>

      <br />
      {items.map((item, key) => (
        <div key={key}>{item.name}</div>
      ))}
    </div>
  );
};

export default Todo;
