const RenderCountLabel = ({
  count,
  label,
}: {
  count: number;
  label: string;
}) => {
  console.log("RenderCountLabel");

  return (
    <div>
      {label} renders: <span style={{ color: "red" }}>{count}</span>
    </div>
  );
};

export default RenderCountLabel;
