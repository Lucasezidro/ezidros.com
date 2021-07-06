import Modal from 'react-modal';
import { useState } from 'react';
import closeImg from '../assets/images/close.png'
import { Container } from './modal'
import { useForm, SubmitHandler } from "react-hook-form";


type NewModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;

}

enum Works {
    encanamanto = "Encanamanto",
    eletrica = "Eletrica",
    manuntenção = "manuntenção",
    alvenaria = "alvenaria",
    pintura = "pintura"
  }

type Inputs = {
    email: string,
    adress: string,
    date: string,
    services: Works,
    exampleRequired: string,
  };

export function NewModal ({ isOpen, onRequestClose }: NewModalProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    const [email, setEmail] =useState('')
    const [adress, setAddress] =useState('')
    const [date, setDate] =useState('')
    const [services, setServices] =useState('')

    function handleSubmitButton(){
        const data = [email, adress, date, services]
    }

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            
            <Container>
                <form 
                    onSubmit={handleSubmit(onSubmit)}
                    action="/"
                    method="POST"
                    
                    >
                    <div className="modal">
                        <h1>Solicitar Orçamento</h1>

                        <button 
                            type="button" 
                            onClick={onRequestClose} 
                            className="close"
                            >
                            <img src={closeImg} alt="close btn" />
                        </button>

                        <label htmlFor="email">E-mail</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Informe o Seu e-mail" 
                            defaultValue="email" {...register("email")}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                            {errors.email && "E-mail is required."}

                        <label htmlFor=";adress">Endereço</label>
                        <input 
                            type="adress" 
                            id="address" 
                            placeholder="Informe Seu endereço"
                            defaultValue="adress" {...register("adress")}
                            value={adress}
                            onChange={e => setAddress(e.target.value)}
                            />
                            {errors.adress && "Adress is required."}

                        <label htmlFor="date">informe a data de inicio do serviço</label>
                        <input 
                            type="date" 
                            id="date"
                            defaultValue="date" {...register("date")}
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            />
                            {errors.date && "Date is required."}
                        
                        <label htmlFor="services">Selecione o tipo de serviço</label>
                        <select 
                            {...register("services")} 
                            name="services" 
                            id="services"
                            value={services}
                            onChange={e => setServices(e.target.value)}
                            >
                                <option value="Encanamanto">Encanamanto</option>
                                <option value="Parte Eletrica">Parte Eletrica</option>
                                <option value="Alvenaria">Alvenaria</option>
                                <option value="Pintura">Pintura</option>
                                <option value="Manutenção de ar condicionado">Manuntenção de ar condicionado</option>
                        </select>
                        {errors.services && "Services is required."}

                        <button 
                            type="submit" 
                            className="btn-send"
                            
                            >
                            Enviar
                        </button>
                    </div>
                </form>
            </Container>
        </Modal>
    )
}