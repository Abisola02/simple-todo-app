import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles} from "@material-ui/styles";

const Text = () => {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, { inputValue, id: new Date().getTime().toString() }]);
    setInputValue("");
  };

  const handleDel = (id) => {
    const filter = todo.filter((item) => item.id !== id);
    setTodo(filter);
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>Simple Todo App</h1>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          value={inputValue}
          variant="outlined"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button className={classes.btn} type="submit" color="primary" variant="contained">Add todo</Button>
      </form>
      {todo.map((item) => {
        const {id, inputValue} = item
        return (
          <div key={id}>
            {inputValue}
            <Button className={classes.btn1}
              onClick={() => handleDel(id)}
              color="primary"
              variant="contained"
            >
              Del
            </Button>
          </div>
        );
      })}
    </div>
  );
};

  const useStyles = makeStyles(()=>({
  btn:{
  width:"150px",
  marginLeft: "30px",
},
  btn1:{
  marginTop: "15px",
  marginLeft: "10px",
  // display: "flex",
},
  container:{
  width: "600px",
  // border: " 1px solid black",
  height: "400px",
  margin: "auto",
  justifyItems: "center",

}


}))


export default Text;
