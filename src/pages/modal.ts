import styled from "styled-components";
import worker from '../assets/images/worker.jpg'

export const Container = styled.div`
   form {
       position: fixed;
       display: flex;
       flex-direction: column;
       bottom: 100px;
       align-items: center;
       justify-content: center;
       width: 100%;
       height: 100%;
       background-image: url(${worker});
       background-size: cover;


       .modal {
           width: 400px;
           height: 400px;
           background: var(--lightGray);
           margin-top: 4.5rem;
           border-radius: 0.5rem;
           box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
           filter: brightness(0.9);

           h1{
               display: flex;
               text-align: center;
               align-items: center;
               margin-left: 85px;
               color: var(--blue-logo);
               font: 600 24px "Roboto", sans-serif;
               opacity: 0.8;
           }

           .close{
                position: relative;
                right: 450px;
                bottom: 60px;
                width: 70px;
                height: 80px;
                background: transparent;
                
           }

           label{
               position: relative;
               bottom: 60px;
               display: flex;
               flex-direction: column;
               margin: 1rem 0 1rem 2rem;
               right: 30px;
               color: var(--blue-logo);
               font: 600 16px "Roboto", sans-serif;
           }

           input{
               position: relative;
               bottom: 60px;
               width: 100%;
               padding: 0.2rem;
               border: none;
               cursor: pointer;
               border-bottom: 1px solid var(--blue-logo);

               &::placeholder{
                   color: var(--blue-logo);
               }
           }

           select{
               position: relative;
               bottom: 60px;
               border: none;
               border-bottom: 1px solid var(--blue-logo);
               background: var(--lightGray);
               width: 100%;
               padding: 0.2rem;
               cursor: pointer;
               filter: brightness(0.9);
           }

           .btn-send{
               position: relative;
               bottom: 40px;
               width: 100%;
               padding: 0.55rem;
               border-radius: 0 0 8px 8px;
               background: var(--blue-logo);
               color: var(--lightGray);
               font: 500 14px "Roboto", sans-serif;
               transition: all 0.5s;

               &:hover{
                   filter: brightness(0.8)
               }
           }
       }
   }
`