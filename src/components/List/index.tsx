import { useCallback, useEffect, useRef, useState } from "react";

import { useRenderCounter } from "../../services/renderCounter";
import ListItem from "../ListItem";

import RenderCountLabel from "../RenderCountLabel";
import CommonButton from "../CommonButton";

export type Mode = "add" | "remove";

const List = () => {
  console.log("List");

  let index = useRef(0);

  const counter = useRenderCounter();
  const [items, setItems] = useState<string[]>([]);
  const [action, setAction] = useState<Mode>("add");

  const handleChangeAction = useCallback(() => {
    setAction((prev) => (prev === "add" ? "remove" : "add"));
  }, []);

  const handlRemoveItems = () => {
    setItems((prev) => prev.slice(0, prev.length - 1));
  };

  const handleRemoveItem = useCallback((currItem: string) => {
    console.log("handleRemoveItem");

    console.log(currItem);
    setItems((prevItems) => prevItems.filter((item) => item !== currItem));
  }, []);

  const handleAddItem = useCallback(() => {
    console.log("handleAddItem");

    index.current++;
    setItems((prev) => [...prev, `${index.current}-item`]);
  }, []);

  const handleAddToStart = useCallback(() => {
    console.log("handleAddToStart");

    index.current++;
    setItems((prev) => [`${index.current}-item`, ...prev]);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      action === "add" ? handleAddItem() : handlRemoveItems();
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <ul className="list">
      <RenderCountLabel label="List" count={counter} />
      <br />
      <CommonButton
        label={`change mode: ${action}`}
        onClick={handleChangeAction}
      />
      <br />
      <div className="btn-actions">
        <CommonButton onClick={handleAddToStart} label={`Add to start`} />
        <CommonButton onClick={handleAddItem} label={`Add to end`} />
      </div>
      {items.map((item) => (
        <ListItem
          key={crypto.randomUUID()}
          item={item}
          onRemove={handleRemoveItem}
        />
      ))}
    </ul>
  );
};

export default List;
