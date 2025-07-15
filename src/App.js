import Welcome from "./Welcom";
import UserDetails from "./UserDetails";
import Counter from "./Counter";
import LikeCounter from "./LikeCounter";
import FeedbackForm from "./FeedbackForm";
import TodoList from "./TodoList";


function App(params) {
  return(
    <div>
      {/* <h1>Hello react</h1>
      <Welcome/>
      <UserDetails name = "Gayantha" age = '26' location = "Nuwara eliya" />
      <UserDetails name = "Sandeep" age = '24' location = "Bandrawela" /> 
      {/* <Counter/>
      <LikeCounter/> */}
      {/* <FeedbackForm/> */}
      <TodoList/>

    </div>
  )
}


export default App;