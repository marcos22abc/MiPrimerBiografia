
// inserta encabezado en las paginas que NO SEAN index.html
document.getElementById("encabezado").innerHTML=
  `<nav class="navbar navbar-expand-md navbar-light">
    <div class="container-fluid">
      <div><a href="../index.html"> <img src="../img/titulo.png" alt="" style="height:100px;"> </a>
      </div>   
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse  float-right tipoYgrosorletra" id="navbarNav">
        <ul class="navbar-nav ms-auto alturaletranav">
          <li class="nav-item padd">                     
            <a class="nav-link  " href="../index.html">Inicio</a> 
          </li>   
          <li class="nav-item padd">   
            <a class="nav-link " href="../pages/recetas.html">Recetas</a> 
          </li>                  
          <li class="nav-item padd">    
            <a class="nav-link" href="../pages/quienesSomos.html">Quienes Somos</a>   
          </li>                       
          <li class="nav-item">  

          </li>            
        </ul>
      </div>
    </div>
  </nav> `

// inserta encabezado en las paginas que NO SEAN index.html
document.getElementById("textofooter").innerHTML = `
 <a href="https://es-la.facebook.com/"><img src="../img/facebook.png" alt="" style="max-height: 40px;"></a>
 <a href="https://www.instagram.com/"><img src="../img/instagram.png" alt="" style="max-height: 40px;"></a>
 <a href="https://www.youtube.com/"><img src="../img/youtube.png" alt="" style="max-height: 40px;"></a>
 <p>Todos los derechos recervados @2023</p>
`


let info = `<div class="container">
<div class="text-center">
    <h1>Quién es Gorka Barredo?</h1>
</div>
<section class="">
    <div class="">
        <div class="">
            <div class="">
                <p>Lo primero, la presentación. Mi nombre, es&nbsp;<span style="color: #000000;"><a style="color: #000000;" title="foto Gorka Barredo Rubio" href="https://es.wikipedia.org/wiki/Archivo:Gorka_Barredo_Rubio.jpg" target="_blank" rel="nofollow noopener noreferrer"><em><strong>Gorka Barredo Rubio</strong></em></a>
                <strong>. Hay quien dice que soy «<em>Youtuber</em>», «<em>Instagramer</em>» o «<em>Blogger</em>». Clichés modernos que no me definen muy bien. Yo prefiero autodefinirme como <strong>cocinero</strong>. Un cocinero de los de toda la vida que, se dedica a cocinar, como hemos hecho yo y mis compañeros de profesión durante toda la vida. Lo único, que tengo la peculiaridad de que subo mis recetas de cocina a la web</strong>.
                <p>Nací y me crié en&nbsp;<strong>Vitoria</strong>. He vivido allí durante más de 20 años pero después de ese período, la vida me llevó a la ciudad de&nbsp;<strong>Palencia</strong>, donde viví durante casi 10 años más. Aquí descubrí mi pasión por la cocina y, de forma autodidacta, también me formé como cocinero. No obstante, nunca he ejercido mi profesión en un restaurante. Actualmente, vuelvo a residir en Vitoria.</p>
           </div>
        </div>
    </div>
</section>
<section class="">
    <div class="">
        <div class="">
            <div class="">
                <p>A día de hoy me dedico a hacer lo que más me gusta en esta vida. Si antes decía que la cocina es mi pasión, a día de hoy, también se ha convertido en mi profesión. En <strong>mayo de 2018</strong>, después de hacer cientos de vídeos por mi cuenta, formé mi propia productora. A través de ella, mi equipo y yo nos dedicamos íntegramente a hacer lo que estás viendo. Recetas y platos para esta página web y los vídeos que se suben tanto al canales de Facebook como de Youtube. En el año 2018, también tuve la oportunidad de comenzar a colaborar en <em><strong>Radio Euskadi</strong></em>, de forma activa con mi propio espacio gastronómico. Espacio que a día de hoy todavía mantengo.</p>		
            </div>
        </div>
    </div>
    <div class="text-center">
        <img width="600" height="600" src="https://www.cocinacaserayfacil.net/wp-content/uploads/2017/11/Alberto-Chicote-gorka-barredo.jpg" class="img-fluid" alt="Gorka Barredo">													
    </div>
</section>
<section class="">
    <div class="">
        <div class="">
            <p>En 2019, publiqué mi <span style="color: #000000;"><a style="color: #000000;" title="libro de cocina Gorka Barredo" href="https://www.cocinacaserayfacil.net/libro-cocina-gorka-barredo/" target="_blank" rel="noopener"><strong>primer libro</strong></a></span> de recetas. Su nombre es, y como no podía ser de otra forma: «<em><strong>¡Que Viva La Cocina!</strong></em>«</p><p>-Me he presentado y he ganado algún que otro concurso de cocina pero, debo reconocer que no es muy habitual verme participar en ellos. Considero que la comida y la cocina, en general, está para disfrutar. No para competir con ella. No me gusta poner nota a los platos y -salvo que sea algo totalmente incomestible- Prefiero mejor disfrutar de ellos.</p><p>Espero que te&nbsp;guste mi página. Te invito también a visitar el&nbsp;<strong><span style="color: #000000;"><a style="color: #000000;" title="canal YouTube Gorka Barredo" href="https://www.youtube.com/@GorkaBarredo1" target="_blank" rel="nofollow noopener noreferrer">canal de youtube</a></span>&nbsp;</strong>y mis redes sociales (encontrarás todos los canales al final de esta entrada)</p><p>Y ahora, aclara esa garganta que quiero escuchar bien alto el grito de guerra de todo buen receter@….</p>
        </div>
    </div>
</section>
<section class="">
    <div class="">
        <div class="">
            <p>No te pierdas mis <strong><a title="todas las recetas" href="https://www.cocinacaserayfacil.net/todas-recetas/" target="_blank" rel="noopener">mejores recetas</a></strong> de «cocinacaserayfacil.net» ⤵️</p>
        </div>
    </div>
</section>
</div>`

let info1 = `<div class="container">
<section class="text-center">
    <h2 class="has-text-align-center wp-block-heading">Gorka Barredo presenta su primer libro de cocina. Su nombre, como no ¡Que Viva La Cocina!</h2>
    <img class="img-fluid" src="../img/Libro-¡Que-Viva-La-Cocina.jpg" alt="" style="max-height: 450px;">
</section>
<section>
    <p>«¡Hola receteros y receteras!» Estas son las palabras con las que Gorka Barredo, nos saluda siempre en cada uno de sus vídeos. Es oírlo, y enseguida sabemos que algo delicioso nos tiene preparado. Son más de 6 años los que este cocinero vitoriano lleva detrás de las cámaras enseñándonos a cocinar y preparándonos cada semana un nuevo plato sencillo y fácil de hacer en nuestros hogares.</p>
</section>
<section>
    <p>Ahora, ha dado un paso más y, además de su canal de YouTube «¡Que Viva la Cocina!» y de su Blog de recetas «cocinacaserayfácil.net», el pasado mes de mayo, presentó su primer libro que lleva el título de su exitoso canal de YouTube «¡Que Viva la Cocina!». Con este libro, Gorka pretende colarse en los hogares de sus fieles seguidores y también de gente que todavía no le conoce, pero que seguro, a partir de ahora, hablarán de él cada vez que preparen una receta de su libro.</p>
</section>
<section>
    <p>Seguro que muchos de vosotros os estaréis preguntado qué podéis encontraros en el primer libro de Gorka. En él podréis ver, en exclusiva, un total de 70 recetas que no encontrarás ni en el Blog, ni en el canal de YouTube, ni en su Facebook. Primeros, segundos y postres que como todos los platos que le caracterizan, son muy caseros, fáciles de hacer, baratos y para todos los públicos. No importa que tengas mucha o poca experiencia entre los fogones. Porque según las palabras de nuestro cocinero, «el mejor cocinero del mundo no es aquel que mejor guisa, sino el que más entusiasmo le pone a la cocina. La cocina, es sobre todo cariño».</p>
</section>
<section>
    <p>Para preparar este libro, Gorka junto con su equipo, han pasado más de 3 meses entre fogones para preparar todas y cada una de las recetas publicadas. Incluyendo las fotografías de los platos recién terminados, para que los puedas ver ahora en su libro. ¡Seguro que mientras pasas sus hojas, ya sabes con cual vas a empezar!</p>
</section>
<section>
    <p>Si todavía no lo tienes, ¿a qué estás esperando? Lo puedes adquirir en tu librería favorita, en grandes superficies como Carrefour, Eroski o El Corte Inglés y por supuesto, también en <a href="https://amzn.to/2BIOXbk" rel="nofollow">Amazon</a>. Ya no tienes excusa en ir a comprarlo y gritar bien alto «¡Que Viva la Cocina!»</p>
</section>
</div>`

// funcion que inserta codigo html segun se necesite en info.html
function informar(){
  const dat = window.location.search;
  //Creamos la instancia
  const urlParams = new URLSearchParams(dat);
  //Accedemos a los valores
  var num = urlParams.get('num');
  if (num == 0) {
      document.getElementById("informacion").innerHTML = info;
  } else if (num == 1){
      document.getElementById("informacion").innerHTML = info1;
  }
}
