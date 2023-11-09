import '../css/App.css';
import '../css/common.css';
import img01 from '../images/sec01-img-1.png';
import img02 from '../images/sec01-img-2.png';
import img03 from '../images/sec01-img-3.png';
import React from "react";
import {Link} from "react-router-dom"

const ProfileCardList =  [
  {
    index: 1,
    url: img01,
    alt: '프로필 이미지 1',
    title: 'Sed ut perspiciatis',
    conts: 'Nemo enim ipsam voluptatem quia voluptas sit\naspernatur aut odit aut fugit, sed quia consequuntur\nmagni dolores eos qui ratione voluptatem.'
  },
  {
    index: 2,
    url: img02,
    alt: '프로필 이미지 2',
    title: 'Lorem ipsum dolor',
    conts: 'Amet, consectetur adipiscing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis.'
  },
  {
    index: 3,
    url: img03,
    alt: '프로필 이미지 3',
    title: 'Nemo enim ipsam',
    conts: 'Consequuntur magni dolores eos qui ratione\nvoluptatem sequi nesciunt. Neque porro quisquam est,\nqui dolorem ipsum quia dolor.'
  }
];
const renderList = (list) => (
  <div className="profile-list">
    {list.map((item) => (
      <div className="item" key={item.index}>
        <img src={item.url} className="profile-img" alt={item.alt} />
        <div className="profile-conts">
          <h2 className="h2">{item.title}</h2>
          <div className="conts">
            {item.conts}
          </div>
          <Link className="link-btn">LEARN MORE</Link>
        </div>
      </div>
    ))}
  </div>
)
const shuffle = (array = []) => {
  let randIndex;
  for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
    randIndex = Math.floor(Math.random() * (currentIndex + 1));
    [array[currentIndex], array[randIndex]] = [
      array[randIndex],
      array[currentIndex]
    ];
  }
  return array;
}
function ProfileListBox() {
  return (
    <section className="sec01">
      <h1 className="h1">Snap photos and share like<br/>never before</h1>
      {renderList(shuffle(ProfileCardList))}
    </section>
  );
}

export default ProfileListBox;
