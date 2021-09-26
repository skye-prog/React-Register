import "./Errors.css";
const Errors = (props) => {
  return (
    <div className='ErrorsForm'>
      <div className='Backdrop' onClick={props.onConfirm}></div>
      <div className='Modal'>
        <h4>{props.title}</h4>
        <p>{props.message} </p>
        <button
          className='Error-button'
          type='button'
          onClick={props.onConfirm}
        >
          okay
        </button>
      </div>
    </div>
  );
};
export default Errors;
