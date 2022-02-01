import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Article from "./Article";
import "./index.css";

const App = () => {
  
  const [articles, setArticles] = useState([
    {title: "Bezdek 1.2 HTP", body: "Hovno to pojede", author: "Ablaham", id: 0},
    {title: "Tilus nautilus", body: "sus mus amongus", author: "Fíla", id: 1},
    {title: "50 odstinu sodomy", body: "Za 20 let praxe jsem se s takovejma praxema jeste nesetkala", author: "Bohata", id: 2},
  ]);

  return(
    <div className="container">
        <Article articles={articles}/>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById("root"));