import { Link } from "react-router-dom";

const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = `http://pets-images.dev-apis.com/pets/none.jpg`;
  if (images.length) {
    hero = images[0];
  }
  return (
    // React Router'da a HTML etiketi yerine Link component'i kullanılır. href özelliği yerine ise to özelliği kullanılır. Bu sayede başka bir sayfaya geçilmek istendiğinde tarayıcının sayfayı yenilemesi engellenir.
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
