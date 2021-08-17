
import './App.css';
import Profile from './ProfileInfo/Profile'

function App() {
  const handleName = (name) => {
    alert(`Your name is ${name}`)
  }
  return (
    <div className="cont" style={{ backgroundImage: "url(/1.jpg)" }}>
      <Profile fullName='Anas Daoud' bio='Currently learning ReactJS' profession='Student'
        handleNameProp={handleName}><img src="./profile.jpg" style={{ width: "100%", height: "100%" }} /></Profile>
    </div>
  );
}

export default App;
