import MovieCard from "components/MovieCard";
import MovieScore from "components/MovieScore";
import Pagination from "components/Pagination";

function Listing() {
  return (
    <>
      <Pagination />
      <div className="container">
      <div className="row">
        <div className="col-sm">
          <MovieCard />
        </div>
        <div className="col-sm">
          <MovieCard />
        </div>
        <div className="col-sm">
          <MovieCard />
        </div>
        <div className="col-sm">
          <MovieCard />
        </div>
      </div>
      </div>
    </>
  );
}

export default Listing;
