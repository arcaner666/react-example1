import { useState, useEffect } from "react";
import Pet from "./Pet";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  // Bu useState bizim API'den çektiğimiz hayvan dizimizi tutacak ve güncelleyecek. Başlangıç değeri olarak da boş dizi veriyoruz.
  const [pets, setPets] = useState([]);
  const breeds = [];

  // Burada useEffect önce bir kez çalışır, ardından ikinci parametresine bakar. Eğer ikinci parametresi boşsa her hook güncellemesinde yeniden çalışır. Biz ikinci parametreye boş bir dizi ekleyerek useEffect'e yalnızca bir kez çalış demiş oluyoruz. Eğer dizi içerisine bir ya da birden fazla hook değişkenini girseydik. Bu değişkenlerin değerleri değiştiğinde useEffect tekrar çalışacaktı.
  useEffect(() => {
    // Burada requestPets fonksiyonu içerisindeki setPets fonksiyonu bir hook'u değiştirdiği için eğer useEffect'e ikinci parametre verilmezse useEffect sonsuz döngüye girer.
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    console.log(json);
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
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
            <option></option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breed.length}
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option></option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((pet) => (
        <Pet
          key={pet.id}
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
        />
      ))}
    </div>
  );
};

export default SearchParams;
