import { useState, useEffect } from "react";

// Bu nesne bizim için cache görevini üstlenecek. Eğer bir animal'a ait breed'ler daha önce API'den çağrıldıysa tekrar istek yapılmayıp buradan çekilecek.
const localCache = {};

// Kendimize aşağıdaki gibi custom hook'lar yapabiliriz. Fonksiyonumuzun bir custom hook olduğunu React'in anlaması için fonksiyonun identifier'ının başına use deyimini ekleriz.
export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  // Alttaki hook breedList'in yükleme durumunu göstermek için aslında olmasa da olur.
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    // Burada API'ye gelen istekleri azaltmak için cache yapısı kurduk.
    if (!animal) {
      // Eğer hiç bir animal seçilmediyse hatayı önlemek için boş dizi atıyoruz.
      setBreedList([]);
    } else if (localCache[animal]) {
      // Eğer cache'de bu animal'ın breedList'i varsa ordan çekiyoruz.
      setBreedList(localCache[animal]);
    } else {
      // Cache'de yoksa API'den istiyoruz.
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
