function App() {
  const [expression, setExpression] = React.useState("");
  const [ans, setAns] = React.useState(0);

  const display = symbol => {
    setExpression(prev => prev + symbol);
  };

  const calculate = symbol => {
    setAns(eval(expression));
  };

  const allClear = () => {
    setExpression("0");
    setAns(0);
  };

  const clear = () => {
    setAns(0);
    setExpression(prev => prev.split("").slice(0, prev.length - 1).join(""));
  };

  return /*#__PURE__*/(

    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "grid" }, /*#__PURE__*/
    React.createElement("div", { id: "display", className: "dis" }, /*#__PURE__*/
    React.createElement("input", { type: "text", value: expression, placeholder: "0", disabled: true }), /*#__PURE__*/
    React.createElement("div", { className: "total" }, ans)), /*#__PURE__*/

    React.createElement("div", { onClick: allClear, className: "padButton AC red" }, "AC"), /*#__PURE__*/
    React.createElement("div", { id: "clear", onClick: clear, className: "padButton C red" }, "C"), /*#__PURE__*/
    React.createElement("div", { id: "divide", onClick: () => display("/"), className: "padButton div orange" }, "/"), /*#__PURE__*/
    React.createElement("div", { id: "multiply", onClick: () => display("*"), className: "padButton times orange" }, "x"), /*#__PURE__*/
    React.createElement("div", { id: "seven", onClick: () => display("7"), className: "padButton seven dark-grey" }, "7"), /*#__PURE__*/
    React.createElement("div", { id: "eight", onClick: () => display("8"), className: "padButton eight dark-grey" }, "8"), /*#__PURE__*/
    React.createElement("div", { id: "nine", onClick: () => display("9"), className: "padButton nine dark-grey" }, "9"), /*#__PURE__*/
    React.createElement("div", { id: "subtract", onClick: () => display("-"), className: "padButton minus orange" }, "-"), /*#__PURE__*/
    React.createElement("div", { id: "four", onClick: () => display("4"), className: "padButton four dark-grey" }, "4"), /*#__PURE__*/
    React.createElement("div", { id: "five", onClick: () => display("5"), className: "padButton five dark-grey" }, "5"), /*#__PURE__*/
    React.createElement("div", { id: "six", onClick: () => display("6"), className: "padButton six dark-grey" }, "6"), /*#__PURE__*/
    React.createElement("div", { id: "add", onClick: () => display("+"), className: "padButton plus orange" }, "+"), /*#__PURE__*/
    React.createElement("div", { id: "one", onClick: () => display("1"), className: "padButton one dark-grey" }, "1"), /*#__PURE__*/
    React.createElement("div", { id: "two", onClick: () => display("2"), className: "padButton two dark-grey" }, "2"), /*#__PURE__*/
    React.createElement("div", { id: "three", onClick: () => display("3"), className: "padButton three dark-grey" }, "3"), /*#__PURE__*/
    React.createElement("div", { id: "equals", onClick: calculate, className: "padButton equals orange" }, "="), /*#__PURE__*/
    React.createElement("div", { id: "zero", onClick: () => display("0"), className: "padButton zero dark-grey" }, "0"), /*#__PURE__*/
    React.createElement("div", { id: "decimal", onClick: () => display("."), className: "padButton decimal blue" }, "."))));



}



const root = ReactDOM.createRoot(document.getElementById("app"));
root.render( /*#__PURE__*/React.createElement(App, null));