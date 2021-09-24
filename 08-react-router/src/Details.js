import { useParams } from "react-router-dom";

// React Route içerisine yazılan ve path özelliğiyle gönderilen parametrelere component içerisinde useParams fonksiyonuyla erişilir.
const Details = () => {
  const { id } = useParams();
  return <h2>{id}</h2>;
};

export default Details;
