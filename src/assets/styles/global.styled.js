import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import { createGlobalStyle } from 'styled-components';
import 'swiper/swiper-bundle.css';
import '../libs/animate/animate.min.css';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  color: #252525;
  font-family: "ProductSans", sans-serif;
  font-size: 14px;
  letter-spacing: -0.3px;
  overflow-x: hidden;
}
.root {
  position: relative;
  overflow-x: hidden;
}
ul {
  list-style-type: none;
  margin-bottom: 0;
}

a {
  text-decoration: none;
  color: #252525;
  cursor: pointer;
  display: inline-block;

  &:hover {
    text-decoration: none;
  }
}

p {
  margin-bottom: 0;
}

button {
  border: none;
  outline: none;
  background-color: white;
}

input {
  outline: none;
  border: none;
}
.animate__animated {
  --animate-duration: 0.5s;
}
.container-ct {
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
}
.row-ct {
  display: flex;
  margin-left: -15px;
  margin-right: -15px;
}
.col-ct {
  padding: 0 15px;
}

@media screen and (min-width: 768px) {
  .container-ct {
    width: 750px;
  }
}

@media screen and (min-width: 992px) {
  .container-ct {
    width: 970px;
  }
}

@media screen and (min-width: 1200px) {
  .container-ct {
    width: 1170px;
  }
}
`;

export default GlobalStyle;
