import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Elsie|IM+Fell+English+SC|Poiret+One&display=swap');
  * {
    margin: 0;
    padding: 0;
  }
  
  body {
    background-image: url("http://danglingmouse.com/wp-content/uploads/2014/11/03-SYY2mJz.png");
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Poiret One', cursive;
    font-family: 'IM Fell English SC', serif;
    font-family: 'Elsie', cursive;    
  }
`
