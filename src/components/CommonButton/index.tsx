import { useRenderCounter } from "../../services/renderCounter";
import RenderCountLabel from "../RenderCountLabel";

const CommonButton = ({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) => {
  console.log("CommonButton");

  const counter = useRenderCounter();
  return (
    <div className="button">
      <button onClick={onClick}>{label}</button>
      <RenderCountLabel label="Button" count={counter} />
    </div>
  );
};
export default CommonButton;
