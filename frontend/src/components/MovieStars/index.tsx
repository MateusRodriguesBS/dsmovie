import { ReactComponent as Starfull } from 'assests/img/star-full.svg';
import { ReactComponent as Starempty } from 'assests/img/star-empty.svg';
import { ReactComponent as Starhalf } from 'assests/img/star-half.svg';
import './styles.css';
function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <Starfull />
            <Starfull />
            <Starfull />
            <Starhalf />
            <Starempty />
        </div>
    );
}

export default MovieStars;