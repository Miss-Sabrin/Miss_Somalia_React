import styles from "./Competitor.module.scss"
import { MdHowToVote } from "react-icons/md";
import { useDispatch } from "react-redux";
import { handleModal } from "../../Feature/Modal/ModalSlice";
import { setCurrentCompetitor } from "../../Feature/Competitors/competitor.Slice";

const Competitor = ({competitor}) => {
    
    const backgroundStyle={
        with:"100%",
        background:`linear-gradient(0deg,#128b4841,rgba(0,0,0,0)60%,rgba(0,0,0,0)),url(${competitor.Photo})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
    }
    const dispatch=useDispatch();


    const voteNow=()=>{
        dispatch(setCurrentCompetitor(competitor))
        dispatch(handleModal())

    }
  return (
    <div className={styles.competitor}style={backgroundStyle}>
        <div className={styles.info}>
            <span className={styles.name}>
                {competitor.FirstName+" "+competitor.LastName}
                
            </span>
            <span className={styles.state}>{competitor.RepresentingState}</span>
            <span className={styles.vote_count}
            >Total votes :{ competitor.NumberofVotes}</span>

        </div>
        <div className={styles.vote} onClick={voteNow}>
            <MdHowToVote className={styles.vote_icons}/>
        </div>
    </div>
  )
}

export default Competitor;