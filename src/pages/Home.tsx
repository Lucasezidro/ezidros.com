import avatar from '../assets/images/avatar.jpg'
import martelo from '../assets/images/martelo.png'
import trabalhadores from '../assets/images/trabalhadores.png'
import pincel from '../assets/images/pincel.png'
import logo from '../assets/images/logo.jpeg'
import { Container } from './home'

interface HeaderProps {
    openModal: () => void;
}

export function Home({ openModal }: HeaderProps){
    return(
        <Container>
            <header>
                <img src={logo} alt="Logo Ezidros" className="logo" />

                <h1 className="title">
                    Ezidros Enterprise
                </h1>

                <span className="span-header">Serviços de confiança</span>
                <a href="/saibaMais">
                    Saiba mais
                </a>

                <button 
                    type="button" 
                    className="btn-header"
                    onClick={openModal}
                    
                    >
                        Fazer Um Orçamento
                </button>
            </header>
                <main>
                    <img src={avatar} alt="avatar" className="avatar"/>

                    <div className="card-1">
                        <img src={martelo} alt="logo martelo" className="martelo" />

                        <span className="span-card1">
                            Serviços de pequeno/médio porte de manunteções gerais.
                        </span>
                    </div>

                    <div className="card-2">
                        <img src={trabalhadores} alt="logo martelo" className="martelo" />

                        <span className="span-card2">
                            Trabalhadores eficazes e prontos para lhe atender.
                        </span>
                    </div>

                    <div className="card-3">
                        <img src={pincel} alt="logo martelo" className="martelo" />

                        <span className="span-card3">
                            Serviços de pinturas residenciais.
                        </span>
                    </div>
                </main>
        </Container>
    )
}