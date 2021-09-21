const Pet = (props) => {
    // Eğer aynı seviyede birden fazla eleman oluşturulacaksa [] içerisine 
    // componentler yazılabilir. Fakat [] opsiyoneldir.
    return React.createElement("div", {}, [
        React.createElement("h2", {} , props.name),
        React.createElement("h3", {} , props.animal),
        React.createElement("h3", {} , props.breed),
    ]);
}

// React'deki en temel component yapısı alttaki App'dir.
const App = () => {
    // React.createElement fonksiyonu yeni bir HTML bloğu döndürür.
    return React.createElement(
        // İlk parametre HTML etiketini(Tag) alır.
        "div",
        // İkinci parametre HTML özelliklerini(Attribute) alır.
        // Üçüncü parametrenin içindeki fonksiyonun ikinci 
        // parametresinde "my-brand" adına sahip bir id özelliği
        // tanımlanmıştır.
        {},
        // Üçüncü parametre ise yeni bir child HTML bloğu oluşturur.
        // Eğer blokta aynı seviyede birden fazla eleman varsa [] içine yazılır.
        [
            React.createElement("h1", { id: "my-brand"}, "Adopt Me"),
            // React component'leri birbirleri içerisinde bu şekilde çağırılır.
            // Bir component'in içerisine veri göndermek için HTML özellikleri 
            // kullanılır.
            React.createElement(Pet, { 
                name: "Luna", 
                animal: "Dog", 
                breed: "Havanese",
            }),
            React.createElement(Pet, { 
                name: "Pepper", 
                animal: "Bird", 
                breed: "Cockateil",
            }),
            React.createElement(Pet, { 
                name: "Sudo", 
                animal: "Dog", 
                breed: "Weathen Terrier",
            }),
        ]
    );
};
// Buraya kadar App adlı componenti oluşturduk fakat henüz 
// görüntülemedik.

// ReactDOM.render() fonksiyonu ile oluşturduğumuz componentin 
// ekranda gösterilmesini sağlıyoruz.
ReactDOM.render(React.createElement(App), document.getElementById("root"));