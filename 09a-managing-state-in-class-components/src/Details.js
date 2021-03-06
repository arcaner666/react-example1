import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";

class Details extends Component {
  // constructor() {
  //   super();
  //   this.state = { loading: true };
  // }
  // Üstteki şekilde constructor tanımlamak yerine kursta ilgili bölümde gösterilen bazı pluginleri kurduktan sonra alttaki gibi daha kısa bir şekilde state'i tanımlayabiliriz.
  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState({
      loading: false,
      name: json.pets[0].name,
      animal: json.pets[0].animal,
      breed: json.pets[0].breed,
      city: json.pets[0].city,
      state: json.pets[0].state,
      description: json.pets[0].description,
      images: json.pets[0].images,
    });
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }
    const { animal, breed, city, state, description, name, images } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
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

export default withRouter(Details);
