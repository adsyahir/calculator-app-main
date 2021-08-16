
const Keypad = ({handleClick, clear, backspace ,calculate}) => {
  
  return (
    <div className="inner-box">
      <button name="7" onClick={handleClick} class="calc-button">
        7
      </button>
      <button name="8" onClick={handleClick}  class="calc-button">
        8
      </button>
      <button  name="9" onClick={handleClick}   class="calc-button">
        9
      </button>
      <button  id="backspace" onClick={backspace}   class="keypad-color-blue calc-button-blue">
        DEL
      </button>
      <button  name="4" onClick={handleClick}  class="calc-button">
        4
      </button>
      <button name="5" onClick={handleClick}   class="calc-button">
        5
      </button>
      <button  name="6" onClick={handleClick}   class="calc-button">
        6
      </button>
      <button  name="+" onClick={handleClick}  class="calc-button">
        +
      </button>
      <button  name="1" onClick={handleClick}   class="calc-button">
        1
      </button>
      <button name="2" onClick={handleClick}   class="calc-button">
        2
      </button>
      <button  name="3" onClick={handleClick}  class="calc-button">
        3
      </button>
      <button  name="-" onClick={handleClick}  class="calc-button">
        -
      </button>
      <button  name="." onClick={handleClick} class="calc-button">
        .
      </button>
      <button  name="0" onClick={handleClick} class="calc-button">
        0
      </button>
      <button  name="/" onClick={handleClick} class="calc-button">
        /
      </button>
      <button style={{fontSize:'23px'}} name="*" onClick={handleClick} class="calc-button">
        x
      </button>
      <button id="clear" onClick={clear} class="keypad-color-blue two-col">
        Reset
      </button>
      <button  name="=" onClick={calculate} class="keypad-color-red  two-col">
        =
      </button>
    </div>
  );
};

export default Keypad;
