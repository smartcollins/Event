import React, { useState } from "react";
function Story() {
  const [read, setRead] = useState(false);

  function onRead() {
    // setRead((oldRead) => !read);
    // setRead(!read);
    setRead((oldRead) => !oldRead);
  }

  return (
    <div className="story">
      <p className={read ? "story-less" : "story-more"}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga eum sint
        id doloremque repellendus, repudiandae doloribus libero, numquam eius ea
        cumque quam facilis. Molestiae non debitis necessitatibus, aperiam
        facilis fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quasi ex asperiores quisquam ab quas labore temporibus esse maiores
        excepturi accusantium nihil, necessitatibus perferendis repudiandae sint
        explicabo ipsam architecto totam pariatur! Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Accusamus, ex quasi deserunt corrupti
        provident at! Magni id inventore cupiditate odit? Impedit voluptatibus
        ratione molestiae magni necessitatibus temporibus, ducimus numquam odio.
      </p>
      <span onClick={onRead} className={read ? "less" : "more"}>
        {read ? "Read Less" : "Read More"}
      </span>
    </div>
  );
}

export default Story;
