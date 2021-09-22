import { useState } from "react";

// Bir değişkeni bu şekilde büyük harflerle yazmak bu değişkenin bir daha
// değiştirilmeyeceğini gösterir.
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const BREEDS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  // useState fonksiyonu React'te Hook adı verilen yapıya ait bir fonksiyondur.
  // İçerisine iki parametre alır. İlk parametresi takip ettiği değişkenin ilk
  // değerini tutar. İkinci parametresi ise değişkeni kullanıcı tarafından
  // yapılan bir değişiklikte güncelleyecek olan fonksiyondur.
  // Burada değişken location, fonksiyon ise setLocation'dır.
  // Alttaki değişken tanımlama şekli ise JSX'e ait bir kısaltmadır.
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  // Hook'ların izlediği değişkenlerde herhangi bir değişiklik olduğunda React
  // re-render cycle'a en üstten başlayarak sırayla alta doğru ilerler. Bu
  // sebeple hiçbir zaman hook'ları if ya da for içine almamalıyız. Aksi
  // takdirde sıra bozulur ve değişkenlerin değerlerinde sıkıntılar yaşanır.
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          {/*Bir değişkeni HTML içerisinde kullanmak istiyorsak {} içine alırız.Örneğin alttaki location değişkeni {location} şeklinde HTML özelliğine atanmıştır. {} içerisine sadece değişkenler değil Javascript ifadeleri de yazılabilir ve burada hesap yapılabilir.*/}
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            {/*Alttaki option, select ilk görüntülendiğinde ekranda görünecek boş option'dır. İstersek varsayılan olarak da içine bir şeyler yazabiliriz.*/}
            <option></option>
            {/*Burada ANIMAL dizisindeki elemanların her birini bir option'a doldurarak bir option dizisi şeklinde geri döndürdük. React, dizi içerisine atılmış HTML elemanlarını görüntüleyebilir. React'in liste şeklindeki elemanları görüntülerken elemanların yerlerinin değiştiğini anlayabilmesi için her bir elemana unique olmak bir key atarız. Burada dizideki her bir hayvan farklı olduğu için animal'ı atadık. Key'e id'de atanabilirdi. Önemli olan nokta key'in eşsiz olması. Fakat kesinlikle dizinin index'ini key'e atamamalıyız.*/}
            {ANIMALS.map((animal) => {
              return (
                <option value={animal} key={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option></option>
            {BREEDS.map((breed) => {
              return (
                <option value={breed} key={breed}>
                  {breed}
                </option>
              );
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
