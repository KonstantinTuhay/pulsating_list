import { Mode } from "../List";
import { useRenderCounter } from "../../services/renderCounter";
import RenderCountLabel from "../RenderCountLabel";

const ChangeModeButton = ({
  action,
  onClick,
}: {
  action: Mode;
  onClick: () => void;
}) => {
  console.log("ChangeModeButton");

  const counter = useRenderCounter();
  return (
    <div>
      <button onClick={onClick}>change mode: {action}</button>
      <RenderCountLabel label="Button" count={counter} />
    </div>
  );
};
export default ChangeModeButton;
