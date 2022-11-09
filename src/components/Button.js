import React from "react";
import '../styles/Button.css'

function Button({ text, clickButton, clickManage }) {
  return (
    <button
      className={ clickButton ? 'click-button' : 'reset-button' }
      onClick={clickManage}
      >
      {text}
    </button>
  );
}

export default Button;