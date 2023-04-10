const Step = (props) => {
  return (
    <div className='step'>
      <span className={props.class} id={props.id}>
        {props.values.num}
      </span>
      <div>
        <p>{props.values.step}</p>
        <p>{props.values.text}</p>
      </div>
    </div>
  );
};

export default Step;
