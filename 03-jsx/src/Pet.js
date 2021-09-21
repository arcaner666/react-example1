// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("h3", {}, props.animal),
//     React.createElement("h3", {}, props.breed),
//   ]);
// };

// Burada JSX, bizim yerimize React.createElement() fonksiyonunu arka planda
// yazıyor. ÜstteKİ Pet componenti JSX olmadan alttaki ise JSX ile yazılmıştır.

const Pet = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.animal}</h3>
      <h3>{props.breed}</h3>
    </div>
  );
};

// JSX aslında bizim için sadece syntax'ı biraz değiştiriyor fakat arka planda
// Babel ve Parcel bunu yine React.createElement'li haline çeviriyor.

// Bir componenti dışarıya bu şekilde yayınlıyoruz.
export default Pet;
