import './App.css'

import Myself from './components/Myself'
import Contact from './components/Contact'
import Cards from './components/Cards'

import colors from "./contentIterable/colors"
import { useState } from "react"

function App() {

  const color = colors.info
  const [colorStyle, setColorStyle] = useState("#51E5FF")

  const selectedColor = (data) => {
    setColorStyle(data.color)
  }

  return (
    <section style={{ backgroundColor: colorStyle }} className='body' >
      <div style={{ backgroundColor: colorStyle }} className='content'>
        <div className='info-one'>
          <Myself colorSelected={colorStyle}/>

          <section className='seccolors'>
            <ul className='seccolors_ul'>
                {
                  color.map(color => (
                    <button className='seccolors_btn' 
                    key={color.id} 
                    style={{backgroundColor: color.color}}
                    onClick={() => selectedColor(color)}
                    ></button>
                  ))
                }
            </ul>
          </section>
        </div> <hr />

        <Contact
        colorSelected={colorStyle}
        /> <hr />
        <Cards
        colorSelected={colorStyle}
        /> <hr />
      </div>
    </section>
  )
}

export default App