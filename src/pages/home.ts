import styled from "styled-components";

export const Container = styled.div`
    header{ 
            display: flex;
            width: 100%;
            height: 250px;
            background: #000;
            transition: all 1s;
            border-bottom: 10.99px solid #FFF;

            .title{
                position: relative;
                display: flex;
                align-items: center;
                text-align: center;
                justify-content: center;
                color: var(--lightGray);
                margin-bottom: 190px;
                left: 550px;
                opacity: 0.7;
            }

            .span-header{
                position: relative;
                font: 500 14px "Roboto";
                height: 2px;
                color: var(--lightGray);
                top: 60px;
                left: 348px;
                opacity: 0.8;
                z-index: 0;
            }

            a{
                position: relative;
                top: 90px;
                left: 240px;    
                height: 5px;
                color: var(--lightblue);
                text-decoration: none;
                z-index: 0;
                transition: all 0.5s;

                &:hover{
                    text-decoration: underline;
                    filter: brightness(0.8);
                }
            }

            .logo{
                position: absolute;
                width: 200px;
                height: 198.5px;
                top: -70px;
            }

            .btn-header{
                width: 200px;
                height: 40px;
                display: flex;
                font: 400 16px "Roboto", sans-serif;
                color: var(--lightGray);
                background: var(--blue-logo);
                border-radius: 20px;
                align-items: center;
                justify-content: center;
                margin: 10px 0 0 600px;
                transition: all 0.5s;
                z-index: 1;

                &:hover{
                filter: brightness(0.8);
                }
            }
        }
    main{
        .avatar{
            display: flex;
            margin: 60px 0px 0 530px;
            width: 300px;
        }

        .card-1{
            position: relative;
            bottom: 444px;
            left: 200px;
            display: flex;
            text-align: center;
            width: 250px;
            padding: 10px;
            border-radius: 8px;
            height: 150px;
            background: var(--blue-logo);
        }

        .martelo{
            position: relative;
            width: 30px;
            left: 100px;
            height: 30px;
        }

        .span-card1{
            margin-top: 50px;
            margin-right: 30px;
            font: 500 16px "Roboto", sans-serif;
            color: var(--lightGray);
            opacity: .8;
        }

        .card-2{
            position: relative;
            bottom: 590px;
            left: 550px;
            display: flex;
            text-align: center;
            width: 250px;
            padding: 10px;
            border-radius: 8px;
            height: 150px;
            background: var(--blue-logo);   
        }

        .trabalhadores{
            position: relative;
            width: 30px;
            left: 100px;
            height: 30px;
        }

        .span-card2{
            margin-top: 50px;
            margin-right: 30px;
            font: 500 16px "Roboto", sans-serif;
            color: var(--lightGray);
            opacity: .8;
        }

        .card-3{
            position: relative;
            bottom: 735px;
            left: 900px;
            display: flex;
            text-align: center;
            width: 250px;
            padding: 10px;
            border-radius: 8px;
            height: 150px;
            background: var(--blue-logo);   
        }
        .pincel{
            position: relative;
            width: 30px;
            left: 100px;
            height: 30px;
        }
        margin-top: 50px;
            margin-right: 30px;
            font: 500 16px "Roboto", sans-serif;
            color: var(--lightGray);
            opacity: .8;
        }
        .span-card3{
            margin-top: 50px;
            margin-right: 30px;
            font: 500 16px "Roboto", sans-serif;
            color: var(--lightGray);
            opacity: .8;
        }

        .center{
            position: relative;
            bottom: 380px; 
            border-bottom: 1px solid var(--gray);

            img{
                margin-left: 20px;
                border-radius: 0.5rem;
                opacity: .9;
            }  

            .objective{
                position: relative;
                display: flex;
                margin-left: 750px;
                bottom: 300px;
                width: 500px;

                h4{
                    position: absolute;
                    bottom: 220px;
                    left: 150px;
                    color: var(--gray);
                    font: 600 24px "Roboto", sans-serif;
                }

                span{
                    color: var(--gray);
                    line-height: 2.5rem;
                }
            }    
        }

        footer{
            width: 100%;
            height: 300px;
            background: #000;

            .logo-footer{
                width: 150px;
            }

            h3{
                position: relative;
                display: flex;
                align-items: center;
                bottom: 100px;
                font: 600 20px "Roboto", sans-serif;
                justify-content: center;
                color: var(--lightGray);
            }

            span{
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--lightblue);
                bottom: 70px;
                font: 400 16px "Roboto", sans-serif;
            }

            p{
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                bottom: 50px;
                color: var(--lightGray);
                opacity: .7;
            }

            .midia{
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                bottom: 20px;
                gap: 30px;

                img{
                    width: 36px;
                }
            }

            .copy{
                position: relative;
                top: 20px;
                bottom: 0;
                opacity: .5;
            }
        }
    
`