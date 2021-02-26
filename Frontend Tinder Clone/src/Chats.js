import React from 'react';
import './Chats.css';
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Mark"
                message="Yo whats up !"
                timestamp="40 seconds ago"
                profilePic="https://gal.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2F6f576c3c-fbe3-4b80-bc4e-ef962ef35115.2Ejpeg/1851x1283/quality/80/isabelle-ithurburu.jpeg"
            />
            <Chat
                name="Ellen"
                message="Is there someone here"
                timestamp="35 minutes ago"
                profilePic="https://static1.purepeople.com/articles/9/12/21/99/@/1146546-fabienne-carat-624x600-2.jpg"
            />
            <Chat
                name="Sandra"
                message="Let the girls play !"
                timestamp="2 days ago"
                profilePic="https://i.pinimg.com/originals/fe/44/ef/fe44ef0052b21aa2de62afd25278c3ad.jpg"
            />
            <Chat
                name="Natasha"
                message="Oups, there is a cat..."
                timestamp="3 days ago"
                profilePic="https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fvoi.2F2020.2F04.2F24.2F4075cb6b-afa9-4286-8da0-31712d1c5978.2Ejpeg/2720x4096/quality/80/photo-clara-morgane-plus-torride-que-jamais-en-lingerie-ses-fans-sont-conquis.jpeg"
            />
        </div>
    );
}

export default Chats;