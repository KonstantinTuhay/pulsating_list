import { useState } from "react";

const ListItem = ({
  item,
  onRemove,
}: {
  item: string;
  onRemove: (item: string) => void;
}) => {
  console.log("ListItem");

  const [isAnimating, setIsAnimating] = useState(false);

  const onClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };
  return (
    <li onClick={onClick} className={`li-item ${isAnimating ? "pulse" : ""}`}>
      {item}
      <button className="btn-remove" onClick={() => onRemove(item)}>
        x
      </button>
    </li>
  );
};

export default ListItem;
