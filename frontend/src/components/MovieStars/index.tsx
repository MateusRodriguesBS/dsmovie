import { ReactComponent as Starfull } from 'assests/img/star-full.svg';
import { ReactComponent as Starempty } from 'assests/img/star-empty.svg';
import { ReactComponent as Starhalf } from 'assests/img/star-half.svg';
import './styles.css';

type Props={
    score : number;
}

type StarProps ={
    fill: number;
}

// EX:
// getFills(3.5) => [1, 1, 1, 0.5, 0]
// getFills(4.1) => [1, 1, 1, 1, 0.5]
function getFills(score: number) {

    const fills = [0, 0, 0, 0, 0];
  
    const integerPart = Math.floor(score);
  
    for (let i = 0; i < integerPart; i++) {
      fills[i] = 1;
    }
  
    const diff = score - integerPart;
    if (diff > 0) {
      fills[integerPart] = 0.5;
    }
  
    return fills;
  }

  function Star({fill}: StarProps){
      if (fill === 0){
          return <Starempty/>;
      }else if(fill === 1){
        return <Starfull/>
      }else{
        return <Starhalf/>
      }
  }


function MovieStars({score} : Props) {
    const fills = getFills(score);

    return (
        <div className="dsmovie-stars-container">
            <Star fill = {fills[0]} />
            <Star fill = {fills[1]} />
            <Star fill = {fills[2]} />
            <Star fill = {fills[3]} />
            <Star fill = {fills[4]} />
        </div>
    );
}

export default MovieStars;