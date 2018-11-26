import React from 'react';

const Name = ({name, show}) => {
  const newName = `Hi, ${name}`;
  return show && <li>
    {newName}
  </li>;
};

Name.defaultProps = {
  name : "John",
  show : false
};

export default Name;