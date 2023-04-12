
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
  
    
    this.innerHTML = `
      <style>
      @import url(https://fonts.googleapis.com/css?family=Raleway);
      h2 {
        vertical-align: center;
        text-align: center;
      }
      
      html, body {
        margin: 0;
        height: 100%;
      }
      
      * {
        font-family: "Raleway";
        box-sizing: border-box;
      }
      
      .top-nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        // background-color: #de3727;
        
        color: #de3727;
        height: 50px;
        padding: 2em;
        
      }
      
      .menu {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        margin: 0;
        padding: 0;
        
      }
      
      .menu > li {
        margin: 0 4rem;
        overflow: hidden;
        font-size:2rem;
      
      }

      .menu li a{
        text-decoration: none;
        color: #de3727;
        font-size: larger;
        transition: transform 2s;
        
      }

      li a:hover{
       text-decoration: underline;
       transform: scale(1.3);
      }
      
      .menu-button-container {
        display: none;
        height: 100%;
        width: 30px;
        cursor: pointer;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      #menu-toggle {
        display: none;
      }
      
      .menu-button,
      .menu-button::before,
      .menu-button::after {
        display: block;
        background-color: #de3727;
        position: absolute;
        height: 5px;
        width: 30px;
        transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
        border-radius: 2px;
      }
      
      .menu-button::before {
        content: "";
        margin-top: -8px;
      }
      
      .menu-button::after {
        content: "";
        margin-top: 8px;
      }
      
      #menu-toggle:checked + .menu-button-container .menu-button::before {
        margin-top: 0px;
        transform: rotate(405deg);
      }
      
      #menu-toggle:checked + .menu-button-container .menu-button {
        background: rgba(255, 255, 255, 0);
      }
      
      #menu-toggle:checked + .menu-button-container .menu-button::after {
        margin-top: 0px;
        transform: rotate(-405deg);
      }
      
      @media (max-width: 700px) {
        .menu-button-container {
          display: flex;
        }
      
        .menu {
          position: absolute;
          top: 0;
          margin-top: 50px;
          left: 0;
          flex-direction: column;
          width: 100%;
          justify-content: center;
          align-items: center;
          
        }
      
        #menu-toggle ~ .menu li {
          height: 0;
          margin: 0;
          padding: 0;
          border: 0;
          transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
        }
      
        #menu-toggle:checked ~ .menu li {
          background-color: transparent;
            color: #de3727;
            height: 2.5em;
            padding: 0.5em;
            transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
        }
      
        .menu > li {
          display: flex;
          justify-content: center;
          margin: 0;
          padding: 0.5em 0;
          width: 100%;
          color: white;
          background-color: #222;
        }
      
        .menu > li:not(:last-child) {
          border-bottom: 1px solid ##de3727;
        }
      }
      </style>

      <section class="top-nav">
      <div>
      <a href="index.html"><img src="assets/images/favicon.png" alt="" srcset="" width="200px"></a>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label class='menu-button-container' for="menu-toggle">
      <div class='menu-button'></div>
    </label>
      <ul class="menu">
        <li><a href="#work"> WORK</a></li>
        <li><a href="#contact">CONTACT</a></li>
        <li><a href="#about">ABOUT</a></li>
      
      </ul>
    </section>
    `;

   
  }
}

customElements.define("header-component", Header);
