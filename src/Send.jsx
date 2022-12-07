import React, { useState } from "react";
import { PaperPlaneRight } from "phosphor-react";

function Send({ title }) {
  const [send, setSend] = useState(false);

  function onSend() {
    setSend(true);
  }

  const style = {
    border: send && "2px solid #0da542",
  };

  return (
    <div className="Send">
      <div className="send" onClick={onSend} style={style}>
        <input placeholder={title} />
        <PaperPlaneRight size={25} color="#0da542" weight="bold" />
      </div>
    </div>
  );
}

export default Send;
