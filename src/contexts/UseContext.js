import { createGlobalStyle, styled } from "styled-components";

export default createGlobalStyle`
h1 {
    font-size: 2em;
    font-weight: bold;
    margin-right: 1em;
}

nav {
    display: flex;
    align-items: center; 
    font-size: 2.5em
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

nav li {
    margin-left: 1em;
}

nav a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5em;
    color: #000;
}

nav a:hover {
    color: #260606;
}`

export const Container = styled.main`
.form {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 450px;
    margin: 0 auto;
    border-radius: 10px;
    padding: 20px;
    background-color: #f5f5f5;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }
  
  .info {
    margin-top: 20px;
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 5px;
    width: 50%
  }
  
`
