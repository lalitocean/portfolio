import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle
    `
*{
    margin:0;
    padding:0;
box-sizing:border-box;
font-family: 'Work Sans', sans-serif;
}

::-webkit-scrollbar{
    width:1rem;

}
::-webkit-scrollbar-track{
background-color:gray;
}
::-webkit-scrollbar-thumb{
background:white;
background-clip:content-box;
border:5px solid transparent;
border-radius:9px;
}

h1{
    color:${({ theme }) => theme.colors.heading};
    font-size:6rem;
    font-weight:900;

}
h2{
    color:${({ theme }) => theme.colors.heading};
    font-size:4rem;
    font-weight:300;
    white-space:normal;
    text-align:center;

}
h3{
    font-size:1.8rem;
    font-weight:400;
}
p{
color:${({ theme }) => theme.colors.text};
opacity:.9;
font-size:1.3rem;
line-height: 1.5;
margin-top:1rem;
font-weight:500;

}
a{
    text-decoration:none;

}
 
li{
    text-decoration:none;
    list-style:none;
    font-size:1.2rem;
}

.container{
    max-width:120rem;
    margin: 0 auto;
    padding:0 4.8rem; 

}
.grid{
    display:grid;
    gap:3rem;

}
.grid-two-column{
    grid-template-columns:repeat(2,1fr);
}
.grid-three-columns{
    grid-template-columns:repeat(3,1fr);
}
.grid-four-column{
    grid-template-columns:repeat(4,1fr);
}

input,textarea{
    max-width:50rem;
    color:${({ theme }) => theme.colors.black};
    padding:1.2rem 1.2rem;
    border:1px solid ${({ theme }) => theme.colors.border};
    text-transform:uppercase;
    box-shadow:${({ theme }) => theme.colors.shadowsupport};
    font-weight:bold;
};

input[type="submit"]{
    max-width:16rem;
    margin-top:2rem;
    background-color:${({theme}) => theme.colors.btn};
    color:${({ theme }) => theme.colors.white};
    padding:1rem 1rem;
    border-style:solid;
    border-width:0.1rem;
    text-transform:uppercase;
    font-size:1rem;
    cursor:pointer;
}

 
`;