const PlanComponent = (props) => {
  return (
    <div
      id={props.title}
      className={"plan-component " + props.class}
      onClick={props.onclick}
    >
      <span
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img alt={"image of " + props.title} src={props.img} />
      </span>
      <p
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {props.title}
      </p>
      <p
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {props.price}
      </p>
      {props.type === "yearly" && <p>{props.text}</p>}
    </div>
  );
};

export default PlanComponent;
