import * as React from 'react'
import { Link } from 'react-router-dom'
import './tab.scss'

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}
console.log('this is layout')


function handleClick () {
  console.log('asdasdasdad')
}

function LayoutTab() {
  return (
    <div className="hello">
      <div className="greeting">
        about
        <Link to="/home">home</Link>
        <button  onClick={handleClick}>点我啊</button>
      </div>
    </div>
  );
}

export default LayoutTab