import { useState } from 'react';
import Modal from 'react-modal';
import styles from "./Vote.modal.scss"
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import {useSelector,useDispatch} from "react-redux";
import { handleModal } from '../../Feature/Modal/ModalSlice';
import { addVoteToCompetitor, decreaseVote, inCreaseVote, resetState } from '../../Feature/Competitors/competitor.Slice';


 export const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  // setting up the main element
  Modal.setAppElement('#root');


const VotaModal = () => {
	const [phone, setPhone] = useState();
  const dispatch=useDispatch();


  
  function closeModal() {
	dispatch(handleModal())
	}


 

    const { isOpen}=useSelector((store)=>store.modal);
    const { currentCompetitor, voteCount}=useSelector((store)=>store.competitor);
   

      
  





      if(!currentCompetitor)return;


      

    
      const backgroundStyle = {
          width: "100%",
          height: "400px",
          background: `linear-gradient(0deg,#29ae65b2,rgba
            (0,0,0,0) 60%,rgba(0,0,0,0)),url
			
			(
				'${currentCompetitor.Photo}'
			
			)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderBottomRightRadius: "10px",
       
       
       
       
       
      };
      const handleSubmit=(event)=>{
        event.preventDefault();
		if(voteCount ===0)return alert("please vote at least 1 ")
		dispatch(addVoteToCompetitor(currentCompetitor.Id))
		closeModal();
		dispatch(resetState())
      }
    
    
      return (
        <>
        		<div>
<Modal
 	isOpen={isOpen}
 	onRequestClose={closeModal}
 	style={customStyles}
 	className={styles.modal}
				overlayClassName={styles.overlay}>
				<div className={styles.modal_container}>
					<div className={styles.competitor_info}>
						{/* photo */}
     	<div style={backgroundStyle}></div>
     	<div className={styles.bio}>
     		<div className={styles.divider}>
     			<label>Name</label>
     			<span>
     				{currentCompetitor.FirstName +
     					" " +
					currentCompetitor.MiddleName +
					" " +
					currentCompetitor.LastName}
			</span>
		</div>
		<div className={styles.divider}>
			<label>State</label>
			<span>Miss {currentCompetitor.RepresentingState}</span>
		</div>
		<div className={styles.divider}>
			<label>Backround</label>
		<span>
		{currentCompetitor &&
			currentCompetitor.PersonalBackground.slice(0, 160) +
				"..."}
	</span>
</div>
<div className={styles.divider}>
	<label>Employmentor School</label>
	<span>
		{currentCompetitor &&
			currentCompetitor.EmploymentorSchool.slice(0, 160) +
				"..."}
	</span>
</div>
	</div>
	</div>
	<div className={styles.vote_container}>
	<div className={styles.vote_count}>
<span>Purchase Votes</span>
<div className={styles.vote_controls}>
	<button onClick={() => dispatch(decreaseVote())}>
		<AiOutlineMinus className={styles.icon} />
	</button>
	<span>{voteCount}</span>
	<button onClick={() => dispatch((inCreaseVote()))}>
		
						<AiOutlinePlus className={styles.icon} />
		</button>
	</div>
</div>
<form onSubmit={handleSubmit}>
	<span>Pay with Evc , Sahal or Zaad</span>
	<input
		placeholder="enter your phone number start with"
		type="number"
		className={styles.form_control}
		onChange={(e) => setPhone(e.target.value)}
		value={phone}
				/>
				<button type="submit">Vote Now</button>
			</form>
		</div>
				</div>
			</Modal>
		</div>
        
        
        </>
  

  

   
   
      )
    
 
 
 
      }

export default VotaModal;