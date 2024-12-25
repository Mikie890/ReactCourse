import './App.css'

function App() {
  // const names = [
  //   "Sophia",
  //   "Jackson",
  //   "Liam",
  //   "Olivia",
  //   "Ethan"
  // ];
  
  const users = [
    { name: "Sophia", age: 25 },
    { name: "Jackson", age: 30 },
    { name: "Olivia", age: 22 }
  ];

  return (
    <div>
      {users.map((user, key) => user.age <30 && <User name={user.name} age={user.age} />
      )}
    </div>
  )
}

const User = (props) => {
  return (
    <div>{props.name} {props.age}</div>
  )
}

export default App
