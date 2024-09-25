import SectionWrapper from "./SectionWrapper"
import { SCHEMES, WORKOUTS } from "../excersices/fullworkout"
import { useState } from "react"

const Header = (props) => {
  const { index, title, description } = props
  return ( //it is a simple way to call the index, title and description whenever we wanted
    <div className="header">
      <div className="text">
        <p>{index}</p>
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  )
}

const Genarator = () => {

  const [showModel, setShowModal] = useState(false)
  const [split, setSplit] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  const toggleModal = () =>{ //to toggle the dropdown.
    setShowModal(!showModel)
  }
  const updateMuscle = () =>{

  }

  return (
    <SectionWrapper header={"Genarate your workout"} title={["it's", 'Huge', "o's clock"]}>
      <Header index={'01'} title={"Pick your split"} description={"Select your workout you wish to endure."} />
      <div className="select-btn"> 
        {Object.keys(WORKOUTS).map((type, typeIndex) => { //maping the type of workout from the object
          return ( //if type and split is same the border click will change
            <button style={{border: type === split ? '2px solid #ffffff': '2px solid #347928'}} onClick={() =>{
              setSplit(type) //when click the button it update the state
            }} key={typeIndex}>{type.replace("_", " ")}</button>
          )
        })}
      </div>
      <Header index={'02'} title={"Lock on targets"} description={"Select the muscles judged for annihilation."} />
      <div className="target-sec">
        <button onClick={toggleModal} className="select-muscle">  
          <p>Select muscle groups</p>
          <i className="fa-solid fa-caret-down"></i>
        </button>
        {showModel && (
          <div className="dropdown"> 
            {(split === 'individual' ? WORKOUTS[split] : Object.keys(WORKOUTS[split])).map((muscleGroup, muscleGroupIndex) =>{
              return( //if the split is individual it display the workouts of indiviual other wise select split and its workout
                <button onClick={updateMuscle} key={muscleGroupIndex}>
                  {muscleGroup}
                </button>
              )
            })}
          </div>
        )}
      </div>
      <Header index={'03'} title={"Become a Triumphant"} description={"Select your ultimate objective."} />
      <div className="select-btn">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return ( //same goes here change the border color and update goal state
            <button style={{border: scheme === goal ? '2px solid #ffffff' : '2px solid #347928'}} onClick={() => {
              setGoal(scheme)
            }} key={schemeIndex}>{scheme.replace("_", " ")}</button>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

export default Genarator