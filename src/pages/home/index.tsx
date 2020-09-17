import * as React from 'react'
console.log('this is home')
import './index.scss'

function handleClick () {
  console.log('asdasdasdad11111111111')
}


function Home() {
  return (
    <div className="hello">
      <div className="greeting">
        about-home
        <button  onClick={handleClick}>点我啊</button>
      </div>
    </div>
  );
}

export default Home