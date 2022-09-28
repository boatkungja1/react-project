import './App.css';
function App() {
  // const currentYear = new Date().getFullYear();
  // const birthYear = 2001;
  // const person = {name: "mario", country:"japan"};
  // const students = ['aaa', 'bbb'];
  // const url = "https://www.google.co.th/";
  // const user = { text: "blue", picture: "img/1.jpeg" };
  const users = [
    { text: "jellyfish", picture: "img/1.jpeg" },
    { text: "castle", picture: "img/2.webp" },
    { text: "room", picture: "img/3.png" },
  ];

  return (
    <>
      {/* <h1>This year is {currentYear}</h1>
      <h5>You are {currentYear - birthYear} years old</h5>
      <h3>{students}</h3>
      <h3>{students.join(' ')}</h3>
      <a href={url}>Google</a> */}
      <div className="avatar">
        <img style={{width: "200px",}} src={users[0].picture} alt={users[0].text} />
        <div className="text">{users[0].text}</div>
      </div>
      <div className="avatar">
        <img style={{width: "200px",}} src={users[1].picture} alt={users[1].text} />
        <div className="text">{users[1].text}</div>
      </div>
      <div className="avatar">
        <img style={{width: "200px"}} src={users[2].picture} alt={users[2].text} />
        <div className="text">{users[2].text}</div>
      </div>
    </>
  );
}

export default App;
