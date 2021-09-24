import { Component } from "react";
import { withRouter } from "react-router-dom";

// React'de fonksiyon şeklinde oluşturulan component'lerin yanında bir de class componentler vardır. import { Component } from "react"; satırında bunları entegre ediyoruz.
// Bu şekilde componentler ile React yazımı aslında React'in orijinal yazım şeklidir. React With Hooks yani fonksiyon şeklinde yazım çok yeni bir yöntemdir.
class Details extends Component {
  constructor() {
    // React'de class component'ların constructor'larında super fonksiyonu olması zorunludur.
    super();
    // Burada Details component'inden her bir kopya oluşturulduğunda varsayılan state'i loading olarak ayarlıyoruz.
    this.state = { loading: true };
  }

  // React'de class component'lerin life-cycle method adında fonksiyonları vardır. componentDidMount fonksiyonu React bir component'i ilk kez görüntülediğinde çalışır.
  async componentDidMount() {
    // Bu URL'de this Details component'ine işaret eder. props ise component'e parent'dan gelecek olan parametreleri tutan property'dir. match ve params ise React Router'dan gelir. id ise gelen parametredir.
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    // React class component'lerinde state, setState metoduyla atanır. Alttaki yorumda Object.assign kullanılmasının sebebi deneme API'mizden gelen verinin formatıdır. Normalde Object.assign kullanmadan da veriyi atayabilirdik.
    //this.setState(Object.assign({ loading: false }, json.pets[0]));
    // Üstteki yapı yerine alttaki şekilde de atama yapabilirdik.
    this.setState({
      loading: false,
      name: json.pets[0].name,
      animal: json.pets[0].animal,
      breed: json.pets[0].breed,
      city: json.pets[0].city,
      state: json.pets[0].state,
      description: json.pets[0].description,
    });
  }

  render() {
    // Eğer bir component yüklenirken bir spinner ya da bir animasyon vermek istersek bu şekilde kendi oluşturduğumuz loading property'sini kullanabiliriz.
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }
    const { animal, breed, city, state, description, name } = this.state;
    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

// Varsayılan olarak React parent component'lerden gelen parametreleri child component içerisine geçirmez. Bunu sağlamak için alttaki yapıyı kullanmalıyız. Bu şekildeki component'lara "High Order Component" denir.
export default withRouter(Details);
