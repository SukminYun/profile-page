import './App.css';
import './index.css';

import profile from './assets/profile.jpg';

function App() {
  return (
    <>
      <div className="wrapper">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={profile} className="profileImage" />
          <div style={{ fontSize: '50px' }}>윤석민</div>
        </div>
        <ul>
          <li>컴퓨터공학부 23학번 04년생</li>
          <li>MBTI는 ISFJ</li>
          <li>개발은 처음입니다!!</li>
          <li>취미는 농구 게임 입니다</li>
          <li>TMI) 오른쪽은 거제도 갔을 때 찍은 사진</li>
        </ul>
      </div>
    </>
  );
}

export default App;
