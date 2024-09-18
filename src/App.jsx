// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import { useState } from "react"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         {/* การบ้านได้ใช้ */}
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import Profile from './components/Profile.jsx';

// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <Profile />
//       <Profile />
//       <Profile />
//     </section>
//   );
// }

// const person = {
//   name: 'Gregorio Y. Zara',
//   theme: {
//     backgroundColor: 'black',
//     color: 'yellow'
//   }
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }

// import { getImageUrl } from './components/utils.jsx'

// export default function Profile() {
//   return (
//     <Card>
//       <Avatar
//         size={100}
//         person={{
//           name: 'Katsuko Saruhashi',
//           imageId: 'YfeOqp2'
//         }}
//       />
//     </Card>
//   );
// }
// function Avatar({ person, size }) {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// function Card({ children }) {
//   return (
//     <div className="card">
//       {children}
//     </div>
//   );
// }

// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

export default function App(){
  const[level, setLevel] = useState(1);

  const feedAnimal = (food) => {
    let addedLevel = 0;
    if (food === 'watermelon') addedLevel = 5;
    if (food === 'pumpkin') addedLevel = 10;
    if (food === 'carrot') addedLevel = 20;

    setLevel((prevLevel) => Math.min(prevLevel + addedLevel, 100));
  };

  const calculateImageSize = () => {
    const baseSize = 50;
    const maxSize = 1000;
    const sizeIncrease = Math.floor(level / 5) * 20;
    return Math.min(baseSize + sizeIncrease, maxSize);
  };

  return(
    <>
    <div style={{background:'black'}}>
      <h3 style={{textAlign:'center', padding:'2px' }}>Level {level}</h3>

      {/* ส่วนหมูเด้ง */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',margin: '30px' }}>
        <img src={level >= 100 ?"/picture/วัววว.jpg":"/picture/หมูเด้ง.jpg"} alt="หมูเด้ง" style={{ width: calculateImageSize(),
            height: 'auto',
            transition: 'width 0.5s' }} />
      </div>

      {/* ส่วนล่าง */}
      <p style={{ display: 'flex', justifyContent: 'center', gap: '10px' ,padding:'80px'}}>
      <button className="square"><img src="/picture/แตงโม.jpg" alt="แตงโม" style={{ width: '100px', height: '100px' }}  
      onClick={() => feedAnimal('watermelon')}/></button>
      <button className="square"><img src="/picture/ฟักทอง.jpg" alt="ฟักทอง" style={{ width: '100px', height: '100px' }} 
      onClick={() => feedAnimal('pumpkin')}/></button>
      <button className="square"><img src="/picture/แครอท.jpg" alt="แครอท" style={{ width: '100px', height: '100px' }} 
      onClick={() => feedAnimal('carrot')}/></button>
      </p>
    </div>
    </>
  );
}