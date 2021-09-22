import Pet from "./Pet";

// Burada normalde Results içerisine parametre olarak props girmemiz gerekirdi fakat props.pets yerine pets yazmak kodumuzu daha okunabilir yapacağı için{pets} şeklinde destructuring uygulayabiliriz.
const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            id={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            location={`${pet.city}, ${pet.state}`}
            images={pet.images}
          />
        ))
      )}
    </div>
  );
};

export default Results;
