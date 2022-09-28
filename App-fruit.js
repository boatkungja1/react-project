import { useState } from "react";
import './app-fruit.css';
import Fruit from "./Fruit";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
// import MenuIcon from '@mui/icons-material/Menu';

function App() {
  // state variable
  const [fruits, setFruits] = useState([
    { name: 'Apple', image: 'apple.png', id: 101 },
    { name: 'Banana', image: 'banana.png', id: 102 },
    { name: 'Orange', image: 'orange.png', id: 103 },
  ]);

  // state variable to hide/show add and edit dialogs
  const [addHidden, setAddHidden] = useState(true);
  const [editHidden, setEditHidden] = useState(true);

  // state variable for new item
  const [newFruit, setNewFruit] = useState('');

  // state variable to keep selected fruit index in array and fruit name
  const [fruitIndex, setFruitIndex] = useState(0);
  const [editFruitName, setEditFruitName] = useState('');

  // ========== Delete item ===========
  const deleteFruit = (id) => {
    const newFruits = fruits.filter((fruit) => fruit.id !== id);
    setFruits(newFruits);
  }

  // ========== Add item ===========
  const addFruit = () => {
    // console.log(newFruit);
    // clone fruit array
    let newFruits = [...fruits];
    // create object of new fruit
    const item = { name: newFruit, image: 'banana.png', id: newFruits.length + 101 };
    // add new item to array
    newFruits.push(item);

    // const test = [...fruits, {name: newFruit, image: 'apple.png', id: newFruits.length + 101}];
    // update state
    setFruits(newFruits);
    setNewFruit('');
  }

  // ========== Prepare to edit item ==========
  const beforeEdit = (index, fruitName) => {
    setEditHidden(!editHidden);
    setFruitIndex(index);
    setEditFruitName(fruitName);
  }

  // ========== Edit item ===========
  const editFruit = () => {
    let newFruits = [...fruits];
    newFruits[fruitIndex].name = editFruitName;
    setFruits(newFruits);
    setEditHidden(true);
  }

  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <center><h1>Fruit Shop Management System</h1></center>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <br />
      
      <div id="divAdd">
        <Button variant="contained" color="inherit" disableElevation id="btnAdd" onClick={() => setAddHidden(!addHidden)}>Add</Button>
        {/* ------- Add dialog  -------*/}
        {/* <div hidden={addHidden}> */}
        {!addHidden &&
          <>
            <TextField id="standard-basic" label="Enter fruit.." variant="standard" type="text"
              value={newFruit}
              onChange={(e) => setNewFruit(e.target.value)}
              required
            />
            <Button variant="contained" color="primary" disableElevation onClick={addFruit}>OK</Button>
            <Button variant="contained" color="error" disableElevation onClick={() => { setAddHidden(!addHidden); setNewFruit('') }}>Cancel</Button>
          </>
        }
        {/* </div> */}

        {/* -------------------------- */}
      </div>

      {

        fruits.map((fruit, index) => {
          return (
            <Fruit key={index} fruit={fruit} index={index} deleteFruit={deleteFruit} beforeEdit={beforeEdit}
            />
          )
        })
      }

      {/* ------- Edit dialog  -------*/}
      <div hidden={editHidden}>
        <input type="text"
          placeholder="Enter fruit..."
          value={editFruitName}
          onChange={(e) => setEditFruitName(e.target.value)}
          required
        />
        <button onClick={editFruit}>OK</button>
        <button onClick={() => { setEditHidden(!editHidden); setEditFruitName('') }}>Cancel</button>
      </div>
      {/* -------------------------- */}
    </>
  );
}



export default App;