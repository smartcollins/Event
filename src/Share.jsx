import React,{useState} from "react";
import {ChatText,Chats,TiktokLogo,EnvelopeSimple,FacebookLogo,WhatsappLogo,TwitterLogo,InstagramLogo} from "phosphor-react"

function Share({onShareMedia}){
    return(
        <div className="share">
            <h3>Share</h3>
            <div className="share-main">
                <div>
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
                        <InstagramLogo size={25} color="#ffffff"/>
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
                </div>
            </div>
        </div>
    )
}

export default Share;