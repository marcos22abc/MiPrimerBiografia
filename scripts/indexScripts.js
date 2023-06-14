
// inserta encabezado en index.html
document.getElementById("encabezado").innerHTML=
  `<nav class="navbar navbar-expand-md navbar-light" >
    <div class="container-fluid">
      <div><a href="index.html"> <img src="img/titulo.png" class="img-fluid" alt="" style="height:100px;"> </a>
      </div>   
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse tipoYgrosorletra" id="navbarNav">
        <ul class="navbar-nav ms-auto alturaletranav ">
          <li class="nav-item padd">                     
            <a class="nav-link " href="index.html">Inicio</a> 
          </li>                
          <li class="nav-item padd">   
            <a class="nav-link " href="pages/recetas.html">Recetas</a> 
          </li>     
          <li class="nav-item padd">    
            <a class="nav-link" href="pages/quienesSomos.html">Quienes Somos</a>   
          </li>                       
          <li class="nav-item">  

          </li>            
        </ul>
      </div>
    </div>
  </nav> `

  //inserta carrusel en index.html
  document.getElementById("carrusel").innerHTML=
  ` <div class="container">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="img/img1.png" class="d-block mx-auto img-fluid" style="max-height: 300px;" alt="...">
        </div>
        <div class="carousel-item">
          <img src="img/img3.png" class="d-block mx-auto img-fluid" style="max-height: 300px;" alt="...">
        </div>
        <div class="carousel-item">
          <img src="img/recetas-3.jpg" class="d-block mx-auto" style="max-height: 300px;" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
</div> `

//inserta pie de pagina en index.html
document.getElementById("textofooter").innerHTML = `
 <a href="https://es-la.facebook.com/"><img src="img/facebook.png" alt="" style="max-height: 40px;"></a>
 <a href="https://www.instagram.com/"><img src="img/instagram.png" alt="" style="max-height: 40px;"></a>
 <a href="https://www.youtube.com/"><img src="img/youtube.png" alt="" style="max-height: 40px;"></a>
 <p>Todos los derechos recervados @2023</p>
`
