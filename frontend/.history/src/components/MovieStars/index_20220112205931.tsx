import {ReactComponet as StarFull} from 'assets/img/star-full.svg';
import {ReactComponet as StarHalf} from 'assets/img/star-half.svg';
import {ReactComponet as StarEmpty} from 'assets/img/star-full.svg';

function MovieStars() {
  return (
    <div className="dsmovie-stars-container">
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  );
}
