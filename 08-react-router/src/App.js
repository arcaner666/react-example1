import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <div>
      {/* React Router path içerisine atanan URL'e bakarak kullanıcıyı sayfalar arasında yönlendirirken URL'i incelemeye soldan sağa doğru başlar. Yani   /teacher/jem/young adresi ile /, /teacher, /teacher/jem ve                /teacher/jem/young eşleşirler. Fakat eşleştirme sağdan sola doğru ilerlemez. Yani /teacher/jem/young adresi ile /young, /teacher/young ve   /jem/young eşleşmezler. Bu sebeple eğer alttaki Router içerisindeki Route'lar Swicth içerisinde olmasaydı ana sayfa yani / path'indeyken bir hayvanın detayına tıklandığında hem ana sayfa / hem de detay sayfası /details/:id görüntülenirdi. */}
      <Router>
        <header>
          <Link to="/">
            <h1 id="my-brand">Adopt Me</h1>
          </Link>
        </header>
        {/* Switch component'i ise path'ler eşleşse bile yalnızca ilk eşleşenin görüntülenmesini sağlar. */}
        <Switch>
          {/* Burada Route componenti kullanıcıyı başka bir sayfaya yönlendirmemizi sağlar. :id yapısı sayesinde ise Details component'ine id değeri gönderilerek istenen verilerin yüklenmesi sağlanır. Değişkenler route'lara bu şekilde gönderilir. */}
          <Route path="/details/:id">
            <Details />
          </Route>
          {/* Bu şekilde tek / ise ana sayfamızın görüntülenmesini sağlar. */}
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
