import React from "react";
import {
  ChatText,
  Chats,
  TiktokLogo,
  EnvelopeSimple,
  FacebookLogo,
  WhatsappLogo,
  TwitterLogo,
  InstagramLogo,
} from "phosphor-react";

function Share({ onShareMedia }) {


  const itemsAry = [

    {
      class: "btn1",
      logo: "WhatsappLogo",
      weight: "fill",
      txt: "Whatsapp"
    },


    {
      class: "btn2",
      logo: "TwitterLogo",
      weight: "fill",
      txt: "Twitter"
    },


    {
      class: "btn2",
      logo: "FacebookLogo",
      weight: "fill",
      txt: "Facebook"
    },


    {
      class: "btn3",
      logo: "InstagramLogo",
      txt: "Instagram"
    },


    {
      class: "btn4",
      logo: "EnvelopeSimple",
      weight: "fill",
      txt: "Yahoo"
    },


    {
      class: "btn5",
      logo: "TiktokLogo",
      weight: "duotone",
      txt: "Tiktok"
    },


    {
      class: "btn2",
      logo: "ChatText",
      weight: "fill",
      txt: "Chat"
    },


    {
      class: "btn1",
      logo: "Chats",
      weight: "fill",
      txt: "WeChat"
    }

  ]

  const items = itemsAry.map((item, idx) => (
    <div key={idx}>
      <button key={idx} onClick={onShareMedia} className={item.class}>
        {/* <{item.logo} size={25} color="#ffffff" weight="fill" /> */}
        {
          React.createElement(item.logo, {
            size: 25,
            color: '#ffffff',
            weight: item.weight
          })
        }
      </button>
      <p>{item.txt}</p>
    </div>
  ))

  return (
    <div className="share">
      <h3>Share</h3>
      <div className="share-main">
        {/* <div>
          <button onClick={onShareMedia} className="btn1">
            <WhatsappLogo size={25} color="#ffffff" weight="fill" />
          </button>
          <p>Whatsapp</p>
        </div>
        <div>
          <button onClick={onShareMedia} className="btn2">
            <TwitterLogo size={25} color="#ffffff" weight="fill" />
          </button>
          <p>Twitter</p>
        </div>
        <div>
          <button onClick={onShareMedia} className="btn2">
            <FacebookLogo size={25} color="#ffffff" weight="fill" />
          </button>
          <p>Facebook</p>
        </div>
        <div>
          <button onClick={onShareMedia} className="btn3">
            <InstagramLogo size={25} color="#ffffff" />
          </button>
          <p>Instagram</p>
        </div>
        <div>
          <button onClick={onShareMedia} className="btn4">
            <EnvelopeSimple size={25} color="#ffffff" weight="fill" />
          </button>
          <p>Yahoo</p>
        </div>
        <div>
          <button onClick={onShareMedia} className="btn5">
            <TiktokLogo size={25} color="#ffffff" weight="duotone" />
          </button>
          <p>Tiktok</p>
        </div>
        <div>
          <button onClick={onShareMedia} className="btn2">
            <ChatText size={25} color="#ffffff" weight="fill" />
          </button>
          <p>Chat</p>
        </div>
        <div>
          <button onClick={onShareMedia} className="btn1">
            <Chats size={25} color="#ffffff" weight="fill" />
          </button>
          <p>WeChat</p>
  </div> */}
        {items}
      </div>
    </div>
  );
}

export default Share;
