import styles from "./competitors.module.scss";
//import competitors from "../../assets/competitors.json";
import Competitor from "../Competitor/Competitor";
import { useSelector } from "react-redux";

const Competitors = () => {
    const{competitors} = useSelector((stor)=>stor.competitor);
  return (
    <div className={styles.Competitors_container}>
        <div className={styles.Competitors_header}>
            <span>MissSomalia</span>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magnam praesentium unde fugiat veritatis omnis, iste est velit maiores sapiente quas rem, maxime iusto libero perspiciatis, quae ex doloremque veniam!
            </p>
        </div>
        <div className={styles.Competitors}>
            {competitors.map ((competitor)=>(
                <Competitor key={competitor.id} competitor={competitor}/>
            ))}
        </div>
    </div>
  )
}

export default Competitors