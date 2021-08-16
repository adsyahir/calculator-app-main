const Switcher = ({theme,themeWhite,themeBlue,themePurple}) => {
    return ( 
    <div className="row align-center space-between">
        <label>calc</label>
        <div className="theme">
        <label>Theme</label>
        <div className="col" style={{marginLeft:'10px'}}>
        
         <div className="row label-ul space-evenly ">
          <label>1</label>
          <label>2</label>
          <label>3</label>
         </div>
        <ul>
            <li>
                <input type="radio" name="theme" value="blue" onClick={theme} checked={themeBlue} ></input>
            </li>
            <li>
                <input type="radio" name="theme"  value="white" onClick={theme} checked={themeWhite}></input>
            </li>
            <li>
                <input type="radio" name="theme"  value="purple" onClick={theme} checked={themePurple} ></input>
            </li>
        </ul>
        </div>
        </div>
    </div>
     );
}
 
export default Switcher
;