import Modal from 'react-modal';
import closeImg from '../assets/images/close.png'
import { Container } from './modal'

type NewModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;

}

export function NewModal ({ isOpen, onRequestClose }: NewModalProps) {

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            
            <Container>
                <form>
                    <div className="modal">
                        <h1>Solicitar Orçamento</h1>
                        <button type="button" onClick={onRequestClose} className="close">
                            <img src={closeImg} alt="close btn" />
                        </button>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" placeholder="Informe o Seu e-mail" />

                        <label htmlFor=";adress">Endereço</label>
                        <input type="adress" name="address" id="address" placeholder="Informe Seu endereço"/>

                        <label htmlFor="date">informe a data de inicio do serviço</label>
                        <input type="date" name="date" id="date" />
                        
                        <label htmlFor="services">Selecione o tipo de serviço</label>
                        <select name="services" id="services">
                            <option value="Encanamanto">Encanamanto</option>
                            <option value="Parte Eletrica">Parte Eletrica</option>
                            <option value="Alvenaria">Alvenaria</option>
                            <option value="Pintura">Pintura</option>
                            <option value="Manutenção de ar condicionado">Manuntenção de ar condicionado</option>
                        </select>

                        <button type="button" className="btn-send">
                            Enviar
                        </button>
                    </div>
                </form>
            </Container>
        </Modal>
    )
}