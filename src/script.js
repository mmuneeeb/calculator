function App() {
  const[expression, setExpression] = React.useState("");
  const[ans, setAns] = React.useState(0);
  
  const display = (symbol) => {
      setExpression((prev) => prev + symbol);
    };
  
  const calculate = (symbol) => {
      setAns(eval(expression));
    };  
  
  const allClear = () => {
    setExpression("0");
    setAns(0);
  };
  
  const clear = () => {
    setAns(0);
    setExpression((prev) => prev.split("").slice(0,prev.length-1).join(""));
  };
  
    return(
        
      <div className="container"> 
        <div className="grid">
            <div id="display" className="dis">
              <input type="text" value={expression} placeholder ="0" disabled></input>
              <div className="total">{ans}</div>
            </div>
          <div onClick={allClear} className="padButton AC red">AC</div>
          <div id="clear" onClick={clear} className="padButton C red">C</div>
          <div id="divide" onClick={() => display("/")} className="padButton div orange">/</div>
          <div id="multiply" onClick={() => display("*")} className="padButton times orange">x</div>
          <div id="seven" onClick={() => display("7")} className="padButton seven dark-grey">7</div>
          <div id="eight" onClick={() => display("8")} className="padButton eight dark-grey">8</div>
          <div id="nine" onClick={() => display("9")} className="padButton nine dark-grey">9</div>
          <div id="subtract" onClick={() => display("-")} className="padButton minus orange">-</div>
          <div id="four" onClick={() => display("4")} className="padButton four dark-grey">4</div>
          <div id="five" onClick={() => display("5")} className="padButton five dark-grey">5</div>
          <div id="six" onClick={() => display("6")} className="padButton six dark-grey">6</div>
          <div id="add" onClick={() => display("+")} className="padButton plus orange">+</div>
          <div id="one" onClick={() => display("1")} className="padButton one dark-grey">1</div>
          <div id="two" onClick={() => display("2")} className="padButton two dark-grey">2</div>
          <div id="three" onClick={() => display("3")} className="padButton three dark-grey">3</div>
          <div id="equals" onClick={calculate} className="padButton equals orange">=</div>
          <div id="zero" onClick={() => display("0")} className="padButton zero dark-grey">0</div>
          <div id="decimal" onClick={() => display(".")} className="padButton decimal blue">.</div>
        </div>
      </div>     
      )
    }
  


const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);