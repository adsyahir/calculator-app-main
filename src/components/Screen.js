const Screen = ({result}) => {
    
    return ( 
       <div className="calc-screen">
           <input type="text" value={result} placeholder="0" readOnly></input>
       </div>
     );
}
 
export default Screen;