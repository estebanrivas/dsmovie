import FormCard from "components/FormCard";
import { Link, useParams } from "react-router-dom";
import { Movie } from "types/movies";


function Form() {

const params = useParams();

  return (
<FormCard />
  );
}

export default Form;
