import habilidades from "../contentIterable/habilidades"

const Myself = ({ colorSelected }) => {

    const habilidad = habilidades.info

    return (
        <section className="self_sec-one" style={{backgroundColor: colorSelected}} >
            <div className="self_div-one">
                <img className="self_img" src="../images/desarrollador.png"/>
                <h1 className="self_h1">Ariel Gallardo Dev Full Stack</h1>
            </div>

            <div className="self_div-two">
                <ul className="self_ul">
                    {
                        habilidad.map(habili => (
                            <li className="self_li" key={habili.id}><span>| {habili.habilidad} |</span></li>
                            
                        ))
                    }
                </ul>
            </div>

            <div className="self_div-one">
                <p>Hola, bienvenido a mi portafolio. Esto representa parte de mi trabajo y experiencia. Espero que sea de tu agrado. Si tienes alguna pregunta o deseas contactarme, estoy disponible. Soy programador, no suelo dormir mucho. 😅 ¡Siempre puedes escribirme!"</p>
                <br />
                <p>Déjame contarte que tengo formación en desarrollo web gracias a Academlo, FreeCode Camp y Sololearn. Además, tengo experiencia como freelancer, pero te cuento más detalles en mi CV 👀</p>
            </div>
        </section>
    )
}

export default Myself