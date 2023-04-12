const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
  /* footer-section-starts */
  
  .marginimgfooter1{
      height: 18rem;
   width: 23rem;
   padding-right: 20px;
   padding-top: 8px;
   }
  
   .marginimgfooter2{
      margin-left: -135px;
      width: 200px;
      height: 160px;
      padding-bottom: 13px;
   }
   
  
   .container{
      max-width: 1170px;
      margin:auto;
  }
  .row{
      display: flex;
      align-items:first baseline;
      justify-content: space-between;
      flex-wrap: wrap;
      
  }
  ul{
      list-style: none;
  }
  .footer{
      background-color: #24262b;
      padding: 70px 0;
      
  }
  .footer-col{
     width: 25%;
    //  padding-top: 40px;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
     /* padding: 0 15px; */
    
  }
  .footer-col h4{
      font-size: 24px;
      color: var(--primary-red);
      text-transform: capitalize;
      
      font-weight: 500;
      position: relative;
      font-family: var(--ff-acumin);
  }
  .footer-col h4::before{
      content: '';
      position: absolute;
      left:0;
      bottom: -10px;
      background-color: var(--black-color);
      height: 1px;
      box-sizing: border-box;
      width: 70px;
  }
  .footer-col ul li:not(:last-child){
      margin-bottom: 10px;
  }
  .footer-col ul li a{
      font-size: 20px;
      text-transform: capitalize;
      
      text-decoration: none;
      font-weight: 300;
      color: var(--primary-red);
      display: block;
      transition: all 0.3s ease;
      font-family: var(--ff-raleway);
  }
  .footer-col ul li a:hover{
      
      padding-left: 8px;
  }
  
  
   /* Media Query for footer  */
  
   @media only screen and (max-width: 768px) {
      .marginimgfooter1 {
      height: auto;
      width: 100%;
      padding: 0;
      }
      .marginimgfooter2 {
      margin-left: 0;
      width: 100%;
      height: auto;
      padding: 0;
      }
      .row {
      flex-direction: column;
      
      }
      .footer-col {
      width: 100%;
      // margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 30px
      }
      .footer-col h4::before {
      width: 40px;
      }
      .footer-col ul li a {
      font-size: 16px;
      }
      }
  </style>
  <footer>

              <div class="container">
                <div class="row">
                  <div class="footer-col">
                    <h4>CONTACT</h4>
                    <ul>
                      <li><a href="mailto:mathursahil846@gmail.com">mathursahil846@gmail.com</a></li>
                      <li><a href="https://www.instagram.com/_mathur_sahil/">INSTAGRAM</a></li>
                      <li><a href="https://www.linkedin.com/in/sahil-mathur-9aaa3b20a/">LINKEDIN</a></li>
                      <li><a href="https://www.behance.net/sahilmathur2">BEHANCE</a></li>
                      <li><a href="https://www.facebook.com/profile.php?id=100087387784734">FACEBOOK</a></li>
                    </ul>
                  </div>
                  <div class="footer-col">
                    <h4>SERVICES</h4>
                    <ul>
                      <li><a href="#work">BRAND IDENTITY</a></li>
                      <li><a href="#work">LOGO DESIGN</a></li>
                      <li><a href="#work">PACKAGING DESIGN </a></li>
                      <li><a href="#work"> ILLUSTRATION</a></li>
                      <li><a href="#work">DIGITAL DESIGN</a></li>
                    </ul>
                  </div>
                  <div class="footer-col">
                    <h4>CLIENTS</h4>
                    <ul>
                      <li><a href="lacucina.html">LA CUCINA DELLA MAMMA</a></li>
                      <li><a href="terra.html">TERRA</a></li>
                      <li><a href="fawx.html">FAWX</a></li>
                      <li><a href="karow.html">KAROW</a></li>
                      <li><a href="extron.html">EXTRON</a></li>
                      <li><a href="costaciarro.html">COSTACIARRO</a></li>
                      <li><a href="flamestudios.html">FLAME STUDIOS</a></li>
                      <li><a href="new philedelphia.html">NEW PHILEDELPHIA</a></li>
                      <li><a href="care foundation.html">CARE FOUNDATION</a></li>
                      <li><a href="giggle global.html">GIGGLE GLOBAL</a></li>
         
                    </ul>
                  </div>
                  
                </div>

             

            </footer>

`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(footerTemplate.content);

    
  }
}

customElements.define('footer-component', Footer);