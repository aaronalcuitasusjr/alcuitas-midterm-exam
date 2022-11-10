import { useState, useEffect } from "react";
import Alert from "./Alert";
import "./App.css";
import Item from "./Item";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
    return list;
  } else {
    return [];
  }
};

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editInd, setEditInd] = useState(null);
  const [alert, setAlert] = useState({
    isVisible: false,
    isPositive: false,
    message: "",
  });

  const editItem = (item, i) => {
    setIsEditing(true);
    setEditInd(i);
    setInput(item);
  };

  const deleteItem = (i) => {
    changeAlert(true, false, `'${list[i]}' removed from the basket`);
    setList(list.filter((item, index) => index !== i));
    setIsEditing(false);
    setEditInd(null);
    setInput("");
  };

  const changeAlert = (isVisible, isPositive, message) => {
    setAlert({
      isVisible: isVisible,
      isPositive: isPositive,
      message: message,
    });
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div className="App">
      <div className="grocery-bud">
        <div className="title-bar">
          <div className="title">
            <span className="text-g">Grocery</span>
            <span className="space"></span>
            <span className="text-b">Bud</span>
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="e.g. eggs"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
            <button
              className="submit-button"
              onClick={() => {
                if (isEditing) {
                  if (input.trim() != "") {
                    var oldItem, newItem;
                    const newList = list.map((item, index) => {
                      if (index === editInd) {
                        oldItem = item;
                        newItem = input;
                        return newItem;
                      }
                      return item;
                    });
                    if (oldItem.valueOf() == newItem.valueOf()) {
                      changeAlert(true, false, "No changes were made");
                    } else {
                      changeAlert(
                        true,
                        true,
                        `'${oldItem}' changed to '${newItem}'`
                      );
                    }
                    setList(newList);
                    setIsEditing(false);
                    setEditInd(null);
                    setInput("");
                  } else {
                    changeAlert(true, false, "Please enter value to edit item");
                  }
                } else {
                  if (input.trim() != "") {
                    setList([...list, input]);
                    setInput("");
                    changeAlert(true, true, `'${input}' added to the basket`);
                  } else {
                    changeAlert(
                      true,
                      false,
                      "Please enter item to add to basket"
                    );
                  }
                }
              }}
            >
              {isEditing ? "Edit" : "Submit"}
            </button>
          </div>
          {!alert.isVisible && <div className="spacer"></div>}
          {alert.isVisible && (
            <div className="alert-container">
              <Alert
                isPositive={alert.isPositive}
                message={alert.message}
                changeAlert={changeAlert}
              ></Alert>
            </div>
          )}
        </div>

        {list.length > 0 && (
          <div className="list-container">
            {list.map((item, i) => {
              return (
                <Item
                  key={i}
                  item={item}
                  editItem={() => editItem(item, i)}
                  deleteItem={() => deleteItem(i)}
                ></Item>
              );
            })}
          </div>
        )}

        {list.length > 0 && (
          <div className="clear-items-container">
            <button
              className="clear-button"
              onClick={() => {
                setList([]);
                setIsEditing(false);
                setEditInd(null);
                setInput("");
                changeAlert(true, true, "Basket is empty");
              }}
            >
              Clear Items
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
