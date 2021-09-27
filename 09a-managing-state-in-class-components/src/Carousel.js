import { Component } from "react";
import { withRouter } from "react-router-dom";

class Carousel extends Component {
  state = {
    active: 0,
  };

  // Burada eğer parent'dan bir resim gönderilmediyse varsayılan olarak bu resmi göstermesini istiyoruz. static kullanmamızın sebebi ise sadece new ile oluşturulan nesnelerden yani carousel'den değil abstract sınıftan yani Carousel'den de defaultProps'u çağırabilmek.
  static defaultProps = {
    images: [`http://pets-images.dev-apis.com/pets/none.jpg`],
  };

  // Burada, kullanıcı resimlerden birine tıkladığında bu resmin active state'ine atanmasını sağlıyoruz.
  handleIndexClick = (event) => {
    this.setState({
      // Burada event.target HTML DOM'a eriştiği için bize string döndürür. + operatörüyle dönen string'i sayıya çeviriyoruz.
      active: +event.target.dataset.index,
    });
  };

  render() {
    // Component'in state'ine active adıyla destructing uyguluyoruz. State'ler component'e özeldir ve değişebilirler. Bir state yalnızca kendi component'i tarafından değiştirilebilir.
    const { active } = this.state;
    // Parent'tan gelen props'u ise images adıyla destructing uyguluyoruz. props'lar ise parent'lardan gelirler ve değişemezler yani readonly'dirler. Sadece parent props'ı değiştirebilir.
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            //eslint-disable-next-line
            <img
              // Burada her fotoğrafın URL'i unique olduğu için key olarak kullanabiliriz.
              key={photo}
              src={photo}
              // Alttaki ternary, seçili resime özel bir CSS uygulanmasını sağlar.
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              // Bu satır tıklanan resmin index'ini HTML özelliğine atar. data-herhangiBirİsim yapısı bir HTML elementine ekranda gösterilmeyecek bir bilgiyi atamamızı sağlar.
              data-index={index}
              // Burada, kullanıcı resimlerden birine tıkladığında bu resmin active state'ine atanmasını sağlıyoruz.
              onClick={this.handleIndexClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Carousel);
