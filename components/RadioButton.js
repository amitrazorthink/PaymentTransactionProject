const RadioButton = (props) => (
    <div>     <input type="radio" value="option1"  onClick={() => { props.onClickHandler(props.name) }}/> {props.name}
    </div>
  )
  export default RadioButton;