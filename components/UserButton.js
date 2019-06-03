
const UserButton = (props) => (
  <>
      <button type="button" onClick={() => { props.onClickHandler(props.name) }}>{props.name}</button>
      <style jsx>{`
      button {
        display: block;
        padding: 9px;
    margin-bottom: 3%;
      }
      button:active, button:focus {
        border: 2px solid red;
        outline: none;
    }
    `}</style>
  </>

  )
  export default UserButton;