import './index.css'
import fotoPerfil from './1000036610.jpg'
import habilidadeLer from './ler.jpeg'
import habilidadeCozinhar from './cozinhar.jpeg'
import habilidadeArtezanato from './artezanato.jpeg'

function Sobre() {
    return(
        <main>
            <header>
            <h1>Sobre</h1>
            </header>
            <section>
                <div className='boxfotoPerfil'>
                    <img className="imgfotoPerfil" src={fotoPerfil}/>
                </div>
                <div className='habilidades'>
                <article>
                    <h2>Ler</h2>
                    <img src={habilidadeLer}/>
                    <p className='discricao'>
                        gosto de ler romance,terror e suspense
                    </p>
                </article>
                <article>
                    <h2>Cozinhar</h2>
                    <img src={habilidadeCozinhar}/>
                    <p className='discricao'>
                        gosto de fazer bolos, strogonoff
                    </p>
                </article>
                <article>
                    <h2>Artezanato</h2>
                    <img src={habilidadeArtezanato}/>
                    <p className='discricao'>
                        gosto de fazer pinturas, crochê, pulseiras de muçangas 
                    </p>
                </article>
                </div>
            </section>
        </main>
    )
}
export default Sobre;