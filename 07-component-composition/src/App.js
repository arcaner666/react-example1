import { StrictMode } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

// React'te NODE_ENV adında bir özellik var. Bu özellik production, development gibi çeşitli değerler alabiliyor. Özellikle uygulamamızı geliştirirken kesinlikle bu ayarın development modunda olması öneriliyor. Bize React'in daha fazla geri bildirim yapmasını sağlıyor. Fakat projeyi canlıya alacağımız zaman ise kesinlikle production modunda olmalı. Çünkü development build'inin büyüklüğü fazla ve sitenin yavaş çalışmasına sebep oluyor. Eğer bundler olarak parcel kullanıyorsak bu ayar otomatik olarak ayarlanıyor. Fakat webpack, browserify gibi bundler'lar kullanıyorsak bu ayarı değiştirmeyi unutmamalıyız.
const App = () => {
  return (
    <div>
      <h1 id="my-brand">Adopt Me</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(
  // StrictMode React'in geliştiricileri tarafından önerilen ve component yazarken bizi best practice'lere zorlayan bir geri bildirim sistemidir. Bu mod genelde React'in yeni sürümlerinde silinecek olan özellikleri kullanmamamız için bize çeşitli tavsiyelerde bulunur. Kullanılması şiddetle tavsiye ediliyor.
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
