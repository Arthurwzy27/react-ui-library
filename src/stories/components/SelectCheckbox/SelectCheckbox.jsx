// import "./styles.scss";
import React, { useState } from "react";
import { roomName } from "../../../lib/data";
import './SelectCheckbox.scss';

// To add data as props ==> const SelectCheckbox = ({data}) and remove const data = roomName
const SelectCheckbox = () => {
  const data = roomName
  const [tags, setTags] = useState([]);

  const handleChangeTag = (e) => {
    setTags([...tags, e.target.value]);
  };

  const handleRemoveTag = (index) => {
    const updateTags = [...tags];
    updateTags.splice(index, 1); //remove the item at the specific index
    setTags(updateTags);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="title">
          <h1>Selectable checkbox with tags</h1>
        </div>
        <div className="tag">
          {tags.map((tag, id) => (
            <div className="tag-list" onClick={() => handleRemoveTag(id)}>
              <div className="tag-icon">
                <img
                  className="tag-icon"
                  alt="tag-icon"
                  src="https://preview.pixlr.com/images/800wm/100/1/1001399299.jpg"
                />
                <span key={id}> {tag} </span>
                <button value={id}> x </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="data">
        {data?.filter((item) => !tags.includes(item.name))
          .map((item, index) => (
            <div className="data-list">
              <li>
                <input
                  type="checkbox"
                  key={index}
                  value={item.name}
                  onChange={handleChangeTag}
                  checked={tags.includes(item.name)}
                />
                <span>{item.name}</span>
              </li>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SelectCheckbox;

SelectCheckbox.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
