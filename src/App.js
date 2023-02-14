import { useEffect, useState } from "react";
import "./App.css";
import Document from "./Document";

function App() {
  const [text, setText] = useState(null);

  useEffect(() => {
    fetch(`https://jaspervdj.be/lorem-markdownum/markdown.txt`)
      .then((response) => response.text())
      .then((data) => {
        
        setText(data)
      })
  }, [])

  let data = {
    title: "Terms and Conditions",
    content: text
  }
  return (
    <div className="App">
      <Document {...data}></Document>
    </div>
  );
}

export default App;
