import './App.css';

function App() {
  return (
    <div className="App"> 
      <button className="nob">Duplicate</button>
      <button id="background-color">Change Background Color</button>
      <button id="change-heading">Change Heading Text</button>
      <button id="delete-last-card">Delete Last Card</button>
      <div className="grid">
        <div className="card">
            <img src="https://images.unsplash.com/photo-1586957960772-3e526c5e7cbd?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM0OTY0NDF8&ixlib=rb-4.0.3&q=85" alt="card"></img>
            <h2>Christian Wasta</h2>
            <p hidden>HAX is a paradigm shift for web publishing. It puts advanced authoring capabilities in the hands of everyone, regardless of technical ability and all items made are sustainability built in highly semantic HTML.</p>
            <div className="card-button">
              <button id="details">Details</button>
            </div>
        </div>
      </div>
    </div>
  );
}

document.querySelector('.nob').addEventListener("click", (e) => {
  const elem = document.querySelector(".card");
  const clone = elem.cloneNode(true);
  document.body.appendChild(clone);
});


document.querySelector('#background-color').addEventListener('click', function (event){
  const elem = document.querySelector(".card");
  const backgroundColor = elem.style.backgroundColor;

  if (backgroundColor === 'beige') {
    elem.style.backgroundColor = 'green';
  } else {
    elem.style.backgroundColor = 'beige';
  }
});

document.querySelector('#change-heading').addEventListener('click', function onClick(event){
  const elem = document.querySelector(".card h2");
  if (elem.innerHTML === "Christian Wasta"){
    elem.innerHTML = "Something Else";
  } else {
    elem.innerHTML = "Christian Wasta";
  }
});

document.querySelector("#delete-last-card").addEventListener("click", function () {
    const elem = document.querySelectorAll(".card");
    if(elem.length > 1) {
      elem[elem.length - 1].remove();
    }
});

document.querySelector('#details').addEventListener('click', function (event){
  const elem = document.querySelector(".card p");
  const display = elem.style.display;
  
  if (display === 'none') {
        elem.style.display = 'block';
    } else {
        elem.style.display = 'none';
    }
});

export default App;
