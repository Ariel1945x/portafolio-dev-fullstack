import projects from "../contentIterable/projects"
import { useState } from "react"

const Cards = ({ colorSelected }) => {

    const project = projects.info
    const [page, setPage] = useState(1)
    const cardsForPage = 1
    const lastItem = cardsForPage * page
    const firstItem = lastItem - cardsForPage
    const arrayProjects = project?.slice(firstItem, lastItem)
    const totalPages = Math.ceil(project?.length / cardsForPage)
    const buttons = []

    for (let i = 1; i <= totalPages; i++) {
        buttons.push(i)
    }

    const playSound = () => {
        var sound = new Howl({
            src: ['./audio/audio.mpeg'],
            html5: true
        });
        
        sound.play();
    }

    const handleButton = (button) => {
        playSound()
        setPage(button)
    }

    const handleButtonEnd = (totalPages) => {
        playSound()
        setPage(totalPages)
    }


    return (
        <section className="card_sec-one">
            <ul className="card_ul">
                {
                    arrayProjects.map(project => (
                        <li className="card_li" key={project.id}>
                            <a href={project.link}>
                                <img className="card_img" src={project.img} />
                            </a>
                            <a className="card_a" href={project.github}>{project.title}</a>
                        </li>
                    ))
                }
            </ul>

            <section className="card_sec-two">
                {buttons.map(button => (
                    <button style={{backgroundColor: colorSelected}} className="card_btn-one" key={button} onClick={() => handleButton(button)}>{button}</button>
                ))}

                <button style={{backgroundColor: colorSelected}} className="card_btn-two" onClick={() => handleButtonEnd(totalPages)}> 
                    <svg className="card_svg" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"/></svg>
                </button>
            </section>
        </section>
    )
}

export default Cards