import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  //for storing array of todos
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  const addData = () => {
    //we are using spread operator here
    //todo is the value that we want to add
    //we are combining both the data of todos aand todo in a single array
    //we are doing this because while clicking on checkbox we need to identify whether it is chechked or not

    //using this id we can identify which object we have selected
    setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
    console.log("add");
    setToDo("");
  };

  const removeItem = (e) => {
    // let index = toDos.findIndex((obj) => {
    //   return obj.id == e.target.id;
    // });
    // if (index !== -1) {
    //   console.log("hello");
    //   toDos.splice(index, 1);

    //   console.log("todos", toDos);
    //   setToDos([...toDos]);
    // }
    // console.log(e.target.id);

    let data = toDos.filter((item) => {
      console.log(item.id);
      return item.id != e.target.id;
    });
    console.log("ds", data);
    setToDos([...data]);
  };

  return (
    <div className="apps">
      <div className="mainHeading">
        <h1>ToDo List</h1>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
        </div>
        <div className="input">
          <input
            value={toDo}
            type="text"
            onChange={(e) => setToDo(e.target.value)}
            placeholder="🖊️ Add item..."
          />
          <i onClick={addData} className="fas fa-plus"></i>
        </div>
      </div>

      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo" key={obj.id}>
              <div className="left">
                <input
                  onChange={(e) => {
                    console.log(e.target.checked);
                    console.log(obj);
                    //
                    setToDos(
                      toDos.filter((obj2) => {
                        // we are checking the object in the todos and object that we are marking checkbox are same
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked;
                        }
                        return obj2;
                      })
                    );
                  }}
                  value={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p
                  id={obj.id}
                  style={{
                    textDecoration: obj.status ? "line-through" : "none",
                  }}
                >
                  {obj.text}
                </p>
              </div>
              <div className="right">
                <i
                  id={obj.id}
                  onClick={removeItem}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
