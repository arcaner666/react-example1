import ReactDOM from "react-dom";
import Pet from "./Pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "my-brand" }, "Adopt Me"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockateil",
//     }),
//     React.createElement(Pet, {
//       name: "Sudo",
//       animal: "Dog",
//       breed: "Weathen Terrier",
//     }),
//   ]);
// };

// Burada JSX, bizim yerimize React.createElement() fonksiyonunu arka planda
// yazıyor. Üstteki Pet componenti JSX olmadan alttaki ise JSX ile yazılmıştır.

const App = () => {
  return (
    <div>
      <h1 id="my-brand">Adopt Me</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockateil" />
      <Pet name="Sudo" animal="Dog" breed="Weathen Terrier" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
