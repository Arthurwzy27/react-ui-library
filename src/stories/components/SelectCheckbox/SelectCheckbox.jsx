// import "./styles.scss";
import React, { useState } from "react";
import { roomName } from "../../../lib/data"; //
import Tag from '../Tag/Tag';

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
    <div className="select-checkbox-tag">
      <div className="tag flex flex-wrap mb-8">
        {tags.map((tag, id) => (
          <div key={id} className="tag-list border-2 m-2 px-2" onClick={() => handleRemoveTag(id)}>
            <Tag id={id} tag={tag.toLowerCase()} />
          </div>
        ))}
      </div>

      <div className="checkbox-data">
        {data?.filter((item) => !tags.includes(item.name))
          .map((item, index) => (
            <div key={index} className="data-list text-left list-none mx-4">
              <li className=''>
                <input
                  className="rounded-sm"
                  type="checkbox"
                  key={index}
                  value={item.name}
                  onChange={handleChangeTag}
                  checked={tags.includes(item.name)}
                />
                <span className='pl-3'>{item.name}</span>
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
