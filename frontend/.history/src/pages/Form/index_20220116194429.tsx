import { Link, useParams } from "react-router-dom";
import { Movie } from "types/movies";
import "./styles.css";

type Props = {
  movie : Movie;
}

function Form({movie} : Props) {

const params = useParams();

  return (
    
  );
}

export default Form;
