
import React, { useState, useEffect } from 'react';
import './QuoteBox.css';

function QuoteBox(){
const [quote, setQuote] = useState("");
const [author, setAuthor] = useState("");
const [authorImg, setAuthorImg] = useState("");
const [currentImageIndex, setCurrentImageIndex] = useState(0);


    const quotes = [

        { text: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.", author: "John Lennon", image: "https://upload.wikimedia.org/wikipedia/commons/0/05/John_Lennon%2C_1974_%28cropped%29.jpg" },
        { text: "La única forma de hacer un gran trabajo es amar lo que haces.", author: "Steve Jobs", image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Steve_Jobs_WWDC07.jpg" },
        { text: "Luke, yo soy tu padre", author: "El darth Vader",image: "https://images.unsplash.com/photo-1591255347692-01f53b582e6d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { text: "Necesito un arma", author:"El Jeilo Verde", image:"https://images.unsplash.com/photo-1589819452556-6174ae30b769?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        { text: "Todo lo que tenemos que decidir es qué hacer con el tiempo que se nos ha dado", author:"Gandalf", image:"https://images.unsplash.com/photo-1600637453426-7c64826b19d9?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        { text: "¡Soy la razón por la que se inventó la franja de 'abrir aquí' en los paquetes de queso!", author:"Lego Batman", image:"https://images.unsplash.com/photo-1588860939994-ce4f7a537f03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        { text: "Dame la cosa... Con la que hago la otra cosa", author:"Homero", image:"https://th.bing.com/th/id/R.5cc6ef4c8d6e5e6c51d3aee689e66015?rik=kKCVKQ68HPw%2bcg&riu=http%3a%2f%2fwww.simpsons-art.ru%2fpersonas%2fhomer.png&ehk=alb%2bKZH0wF0xt0z4FHMiz%2fyZTmuC2E8lo76ti8mqZJQ%3d&risl=&pid=ImgRaw&r=0"},
        { text: "Ay karamaba dijo el var sinzo", author:"Var sinzo", image:"https://i.pinimg.com/originals/ac/b4/09/acb409aa1194ba434e261efdd4550d14.jpg"},
        { text: "Soy como el Spider-Man negro, pero con menos problemas de derechos de autor.", author:"DeadPool",image:"https://images.unsplash.com/photo-1501432377862-3d0432b87a14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        { text: "¿Estás protegiendo a los malos?", author:"El Venas", image:"https://amc-theatres-res.cloudinary.com/v1579120188/amc-cdn/production/2/movies/53400/53391/Poster/p_800x1200_Venom2018_120418.jpg"},
        { text: "Eres el mejor Francis", author:"Richi de Malcom", image:"https://pbs.twimg.com/media/CwJxJpmVUAA2nGM.jpg:large"}
    ];

    useEffect(() => {
        // Obtener la cita y la imagen actual
        const currentQuote = quotes[currentImageIndex];
        setQuote(currentQuote.text);
        setAuthor(currentQuote.author);
        setAuthorImg(currentQuote.image);
    }, [currentImageIndex]); // Actualizar cuando cambie el índice de la imagen actual

    const getNextImageIndex = () => {
        // Calcular el siguiente índice de imagen
        return (currentImageIndex + 1) % quotes.length; // Se vuelve al principio cuando se alcanza el último elemento
    };

    const handleNewQuote = () => {
        // Obtener el siguiente índice de imagen y actualizar el estado
        const nextImageIndex = getNextImageIndex();
        setCurrentImageIndex(nextImageIndex);
    };
  return (
    <div id="quote-box">
        <div className='quote-text'> 
            <p id="text">{quote}</p>
            <p id="author">- {author}</p>
            <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`} target="_blank" rel="noopener noreferrer">Tweet Quote</a>
            <button className='button-85' id="new-quote"  onClick={handleNewQuote} >New Quote</button>
        </div>
        <div className='quote-image '>
            <img src={authorImg} alt={author} />
        </div>
    </div>
           
  );
}

export default QuoteBox;