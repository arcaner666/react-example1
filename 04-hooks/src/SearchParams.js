import { useState } from "react";

const SearchParams = () => {
  // useState fonksiyonu React'te Hook adı verilen yapıya ait bir fonksiyondur.
  // İçerisine iki parametre alır. İlk parametresi takip ettiği değişkenin ilk
  // değerini tutar. İkinci parametresi ise değişkeni kullanıcı tarafından
  // yapılan bir değişiklikte güncelleyecek olan fonksiyondur.
  // Burada değişken location, fonksiyon ise setLocation'dır.
  // Alttaki değişken tanımlama şekli ise JSX'e ait bir kısaltmadır.
  const [location, setLocation] = useState("Seattle, WA");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          {/*Bir değişkeni HTML içerisinde kullanmak istiyorsak {} içine 
          alırız.Örneğin alttaki location değişkeni {location} şeklinde HTML 
          özelliğine atanmıştır. {} içerisine sadece değişkenler değil 
          Javascript ifadeleri de yazılabilir ve burada hesap yapılabilir.*/}
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
