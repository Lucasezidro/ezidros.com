import { useState } from 'react';
import { ModalProvider } from './components/ModalContext';
import { Home } from './pages/Home'
import { NewModal } from './pages/Modal';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';

Modal.setAppElement('#root')

declare namespace JSX {
  interface IntrinsicAttributes {
    openModal: () => void;
  }
}



function App() {
  const [newmodalOpen, setNewModalOpen] = useState(false)

  function handleOpenModal(){
    setNewModalOpen(true)
  }

  function handlecloseModal(){
    setNewModalOpen(false)
  }



  return (
    <div>
     <ModalProvider>
      <Home openModal={handleOpenModal}/>
      <NewModal 
        isOpen={newmodalOpen}
        onRequestClose={handlecloseModal}
      />
      </ModalProvider>
      <GlobalStyle />
    </div>
  );
}

export default App;
