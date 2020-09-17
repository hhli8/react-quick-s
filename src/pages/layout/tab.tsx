import * as React from 'react'
import { Link } from 'react-router-dom'
import './tab.scss'

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}
console.log('this is layout')
function Hello() {
  return (
    <div className="hello">
      <div className="greeting">
        about
        <Link to="/home">home</Link>
      </div>
    </div>
  );
}

export default Hello