import avatar from '../assets/images/avatar.jpg'
import martelo from '../assets/images/martelo.png'
import trabalhadores from '../assets/images/trabalhadores.png'
import pincel from '../assets/images/pincel.png'
import logo from '../assets/images/logo.jpeg'
import whats from '../assets/images/whatsapp.png'
import facebook from '../assets/images/facebook.png'
import gmail from '../assets/images/gmail.png'
import eletricity from '../assets/images/eletrcity.jpg'
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
                <a href="/saibamais">
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

                    <div className="center">
                        <img src={eletricity} alt="imagem trabalhador centro do site" />

                        <div className="objective">
                            <h4>Nosso Objetivo</h4>
                            <span>
                            EZIDROS.com, coloca a sua disposição integridade  seriedade e confiança na contratação dos nossos  serviços. Nosso objetivo é oferecer atendimento personalizado, desenvolvendo um trabalho sério  e competente que corresponda a sua necessidade.
                            </span>
                        </div>
                    </div>
                </main>

                <footer>
                    <img src={logo} alt="logo" className="logo-footer"/>

                    <h3>Ezidros.com</h3>
                    <span>O melhor atendimento de marido de aluguel</span>
                    <p>Pintura | elétrica | Manuntenção | Alvenaria | Encanamento</p>

                    <div className="midia">
                        
                        <a href="">
                            <img src={facebook} alt="logo facebook" />
                        </a>
                        
                        <a href="">
                            <img src={whats} alt="logo whats" />
                        </a>
                        
                        <a href="">
                            <img src={gmail} alt="logo gmail" />
                        </a>
                    </div>

                    <p className="copy">&copy;Ezidros.com</p>
                </footer>
        </Container>
    )
}