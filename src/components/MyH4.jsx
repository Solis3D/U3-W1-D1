const MyH4 = function (props) {
  console.log("Props", props);

  return <h4 className={props.customClass}>{props.text}</h4>;
};

export default MyH4;
