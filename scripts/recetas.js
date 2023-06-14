
// cada una de las recesetas utilizadas
let texto0 = `
    <div class="text-center">
        <h1 id="titulo">Receta: Paella</h1>
    </div>
    <div class="row">
        <div class="col-md-6">
            <img id="imagen" src="../img/paella.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-md">
            <h2>Ingredientes</h2>
            <ul id="ingredientes">
                <li>- Arroz para paella 200 g.</li>
                <li> Tubo de calamar 100 g.</li>
                <li> Panceta ahumada en lardons 100 g.</li>
                <li> 1 cebolla picada.</li>
                <li> 1 morrón picado.</li>
                <li> Ajo picado.</li>
                <li> 2 unid de tomate cubeteado sin semillas.</li>
                <li> Caldo de pescado.</li>
                <li> Sal y pimienta.</li>
                <li> Azafrán.</li>
                <li> Pimentón.</li>
                <br><strong>Extra:</strong><br><br>
                <li> Perejil picado.</li>
                <li> Gajos de limón.</li>
            </ul>
        </div>
    </div> <br>
    <div class="container-fluid" id="targeta3">
    <p>Clásica paella con pocos ingredientes y práctica de preparar&nbsp;</p>
    <p>PROCEDIMIENTO:</p>
    <p>1. En una paellera, dorar los calamares en cubos (que estén bien secos) con la panceta, cuando eso haya tomado un lindo color dorado, retirar, volcar los vegetales y sofreír lentamente para que no se arrebate y queme.<br>2. Cuando todo eso este, agregar el pimentón y el azafrán, mezclar, volver a incorporar los calamares con la panceta, sumar el caldo, el arroz y cocinar hasta que el arroz esté cocido, de ser necesario ir incorporando caldo, teniendo en cuenta de que al final de la cocción se tiene que formar el socarra.</p><p></p>
    </div>`

let texto1 = `
    <div class="text-center">
        <h1 id="titulo">Receta: Taquitos de picadillo en tortilla de harina</h1>
    </div>
    <div class="row">
        <div class="col-md-6">
            <img id="imagen" src="../img/taquitos.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-md">
            <h2>Ingredientes</h2>
            <ul style="list-style-type:none; padding-left: 0; margin-top: 10px; border-top: 0;">
                <li><br><strong>Para el picadillo (carbonada cordobesa):</strong><br><br>
            </li><li>- Carne molida 500 g.
            </li><li>- Cebolla amarilla 2 unid medianas.
            </li><li>- Aceitunas 80 g.
            </li><li>- Cebolla de verdeo 2 ramitos medianos.
            </li><li>- Huevo duro 3 unid.
            </li><li>- Pure de tomate(pasata) 100 g.
            </li><li>- Pimenton 20 g.
            </li><li>- Comino 10 g.
            </li><li>- Sal 20 g.
            </li><li>- Pimienta 10 g.
            </li><li>
            </li><li><br><strong>Masa de empanadas o tortilla de harina:</strong><br><br>
            </li><li>- Harina de trigo 000 500 g.
            </li><li>- Grasa de cerdo 100 g.
            </li><li>- Agua 175 cc.
            </li><li>- Sal 10 g.
            </li><li>
            </li><li><br><strong>Para el emplatado:</strong><br><br>
            </li><li>- Crema de leche 100 g.
            </li><li>- Queso mantecoso 100 g.
            </li><li>- Lechuga repollada 1/2 pieza.
            </li><li>
            </li><li><br><strong>Salsa martajada:</strong><br><br>
            </li><li>- Chile serrano 2 piezas.
            </li><li>- Tomate perita 4 tomates.
            </li><li>- Cebolla 1 pieza pequeña.
            </li><li>- Cilantro medio manojo.
            </li><li>- Ajo 1 diente.
            </li><li>- Comino 1 cditas.
            </li><li>- Sal c/n.</li>
            </ul>
        </div>
    </div><br>
    <div class="container-fluid" id="targeta3">
        <p></p><p>TACOS CORDOBESES ¿Los probaste alguna vez? Carne molida con cebolla, aceitunas, huevo picado, verdeo y tomate. En unas tortillas de harina, acompañando con salsa martajada, de chile, tomate, cilantro y cebolla.&nbsp;</p>
        <p>PROCEDIMIENTO:</p>
        <p>1. Cortamos las cebollas en brunoise y las rehogamos en aceite de oliva (maíz) con poca sal hasta blanquearlas.<br>2. Agregamos la carne molida y rectificamos la sal.<br>3. Luego agregamos el puré de tomate y el pimentón y cocinamos hasta que rompa hervor, apagamos fuego. agregamos las aceitunas, el huevo picado y el verdeo.<br>4. Por último rectificamos sal y pimienta y agregamos el comino.</p>
        <p>Masa de empanadas o tortilla de harina:<br>1. Mezclamos el harina y la sal con la grasa y de a poco le vamos agregando el agua hasta obtener una masa homogénea, reversar en frio por media hora.<br>2. Porcionamos las tapas en bolitas de 30 a 50 g aprox y estiramos con un palote hasta tener 1 mm de grosor, dejar reposar media hora antes de usar.</p>
        <p>Salsa martajada: <br>1. Poner en una sartén o chapa sin materia grasa las cebollas, tomate, el chile y el ajo hasta dorar y luego machacarlos con un mortero o licuadora junto con el cilantro.<br>2. Por último agregamos el comino y la sal.</p><p></p>
    </div>`

let texto2 = `
    <div class="text-center">
        <h1 id="titulo">Receta: Lasaña</h1>
    </div>
    <div class="row">
        <div class="col-md-6">
            <img id="imagen" src="../img/lasania.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-md">
            <h2>Ingredientes</h2>
            <ul style="list-style-type:none; padding-left: 0; margin-top: 10px; border-top: 0;">
                <li><br><strong>Para la masa:</strong><br><br>
            </li><li>- Harina 0000 600 g.
            </li><li>- Huevo 3 unid.
            </li><li>- Yema 9 unid.
            </li><li>- Agua (solo unas gotas si es necesario).
            </li><li>
            </li><li><br><strong>Relleno 1:</strong><br><br> bolognesa
            </li><li>- Carne picada vacuna. 500 g.
            </li><li>- Chorizo 1 u (sólo el relleno, no la tripa).
            </li><li>- Cebolla picadísima ½ unid.
            </li><li>- Zanahoria rallada fina ½ u chica.
            </li><li>-Apio picadísimo ½ tallo.
            </li><li>- Ajo picadísimo 1 unid.
            </li><li>- Laurel.
            </li><li>- Orégano fresco 1 ramita.
            </li><li>- Extracto de tomate 1 cda.
            </li><li>- Vino tinto 1 vaso.
            </li><li>- Tomate triturado 1 botella.
            </li><li><br><strong>- Condimentos:</strong><br><br> sal, pimienta negra y ají molido.
            </li><li>
            </li><li><br><strong>Relleno 2:</strong><br><br> bechamel con quesos
            </li><li>- Harina 0000 40 g.
            </li><li>- Manteca 40 g.
            </li><li>- Leche 500 cc.
            </li><li>- Huevos 2 unid.
            </li><li>- Queso rallado 100 g.
            </li><li>- Mozzarella 300 g.
            </li><li>- Sal, pimienta blanca y nuez moscada.
            </li><li>
            </li><li><br><strong>Armado:</strong><br><br>
            </li><li>- Queso reggianito rallado. c/n.
            </li><li>- Manteca 50 g.
            </li><li>
            </li><li><br><strong>Para estirar:</strong><br><br> semolín.</li>
            </ul>
        </div>
    </div><br>
    <div class="container-fluid" id="targeta3">
        <p></p><p>LASAÑA con dos rellenos: bolognesa, de carne, chorizo y vegetales, y otro relleno de bechamel con quesos... ¿Te animás a prepararla? ¡Calentita para este invierno!<br> <br>PROCEDIMIENTO:</p>
        <p>1. Hacer la masa, descansar tapada 30 minutos, estirar de 1 mm y cortar láminas de 15 x 25 cm o del tamaño del recipiente en el que armaremos la lasagna.<br>2. Hacer bolognesa.<br>3. Hacer la salsa bechamel, agregarle los quesos y huevos fuera del fuego, condimentar y reservar.<br>4. Blanquear las masas y armar comenzando por masa, luego capa fina de bolognesa, masa, bechamel de quesos, masa, bolognesa, bechamel con queso, masa, bololgnesa, masa y terminar con bechamel con quesos, poner por arriba manteca y un poco más de queso.<br>5. Hornear y servir.</p><p></p>
    </div>`

let texto3 = `
    <div class="text-center">
        <h1 id="titulo">Receta: Guiso de mondongo</h1>
    </div>
    <div class="row">
        <div class="col-md-6">
            <img id="imagen" src="../img/guiso.jpg" class="img-fluid" alt="">
        </div>
    <div class="col-md">
        <h2>Ingredientes</h2>
        <ul style="list-style-type:none; padding-left: 0; margin-top: 10px; border-top: 0;">
            <li><br><strong>Tiempo de cocción aproximado:</strong><br><br> 3 horas.
        </li><li>- 2 kg de Mondongo.
        </li><li>- 1 rabo.
        </li><li>- 100 g de porotos alubia remojados (6hs).
        </li><li>- 1 chorizo colorado en rodajas.
        </li><li>- 250 g de Panceta Ahumada en Lardones.
        </li><li>- 10 granos de pimienta negra.
        </li><li>- 1 puñado de sal gruesa.
        </li><li>- 2 cebollas picadas.
        </li><li>- 2 dientes de ajo picado.
        </li><li>- 1 morrón rojo picado.
        </li><li>- 2 blanco de puerros picado.
        </li><li>- 2 hojas de Laurel.
        </li><li>- 1 L de tomate triturado.
        </li><li>- 1 zanahoria en monedas.
        </li><li>- Sal.
        </li><li>- Ají molido.
        </li><li>- Pimentón dulce 2 cdas.</li>
        </ul>
    </div>
    </div> <br>
    <div class="container-fluid" id="targeta3">
        <p></p><p>Para el frío, te compartimos la receta ideal: Guiso de mondongo a la Española&nbsp;</p>
        <p>PROCEDIMIENTO:</p>
        <p>Cocción del mondongo:<br>1. Blanquear el mondongo y el rabo con la sal gruesa (30 minutos de hervor, partiendo de agua fría).<br>2. Lavar, dejar enfriar. Trozar el Rabo. Y cortar en el mondongo en tiras, y dados de (1cm x 2cm) no importa que sean irregular.<br>3. En una olla con nueva agua llevar a hervor el mondongo, el rabo, junto con los porotos y granos de pimienta (1 hora y media aprox).</p>
        <p>Cocción del sofrito (fondo de sabor):<br>4. Por otra parte hacer un sofrito.<br>5. Rehogar, cebollas, ajo, puerro, morrón,<br>6. Sumar el tomate, el laurel, zanahoria, chorizo, panceta y cocinar a fuego bajo (30 minutos)<br>7. Condimentar con sal, pimentón y ají molido.</p>
        <p>Cocción de terminado:<br>8. Una vez que el mondongo ya está tierno. Desechar la mitad de agua de cocción e incorporar en la misma olla el sofrito que estaba aparte, remover para unir todos los ingredientes. Rectificar condimentos. Cocinar por al menos 30 minutos más hasta que el mondongo esté en la textura deseada y se haya formado un guiso untuoso.</p>
    </div>`

let texto4 = `
    <div class="text-center">
        <h1 id="titulo">Receta: Pasta gratinada con repollitos</h1>
    </div>
    <div class="row">
        <div class="col-md-6">
            <img id="imagen" src="../img/pasta.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-md">
            <h2>Ingredientes</h2>
            <ul style="list-style-type:none; padding-left: 0; margin-top: 10px; border-top: 0;">
                <li>- Pasta corta 400 g.
                </li><li>- Repollitos 400 g.
                </li><li>- Ajo 2 dientes.
                </li><li>- Panceta ahumada 150 g.
                </li><li>- Manteca c/n.
                </li><li>- Aceitunas negras 100 g.
                </li><li>- Queso crema 100 g.
                </li><li>- Crema de leche 500 cc.
                </li><li>- Queso parmesano 100 g.
                </li><li>- Sal y pimienta.
                </li><li>- Aceite c/n.
                </li><li>- Leche c/n.</li>
            </ul>
        </div>
    </div><br>
    <div class="container-fluid" id="targeta3">
        <p></p><p>Te resolvemos el menú con este plato de pasta gratinada con repollitos, práctica y riquísima&nbsp;</p>
        <p>PROCEDIMIENTO:</p>
        <p>1. Cocinar la pasta de manera clásica y reservar.<br>2. Cortar repollitos en cuartos salteados, en abundante manteca y aceite. Una vez listos agregar ajo, panceta ahumada y las aceitunas picadas. Agregar la crema y leche el queso, luego incorporar la pasta.<br>3. Calentar el horno y llevar a gratinar la pasta con el queso parmesano hasta que quede bien dorada en la superficie. Decorar con alguna forma de queso crocante.</p><p></p>
    </div>`

let texto5 = `
    <div class="text-center">
        <h1 id="titulo">Receta: Tarta pascualina</h1>
    </div>
    <div class="row">
        <div class="col-md-6">
            <img id="imagen" src="../img/tarta.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-md">
            <h2>Ingredientes</h2>
            <ul style="list-style-type:none; padding-left: 0; margin-top: 10px; border-top: 0;">
                <li><br><strong>Para la masa:</strong><br><br>
                </li><li>- Harina 500 g.
                </li><li>- Aceite 50 cc.
                </li><li>- Agua tibia 250 cc.
                </li><li>- Sal.
                </li><li>
                </li><li><br><strong>Relleno:</strong><br><br>
                </li><li>- Ajo picado.
                </li><li>- 2 atados de espinaca.
                </li><li>- Sal y pimienta.
                </li><li>- Cebolla picada 2 unid.
                </li><li>- Nuez moscada.
                </li><li>- Queso rallado.
                </li><li>- 8 huevos duros.</li>
            </ul>
        </div>
    </div> <br>
    <div class="container-fluid" id="targeta3">
        <p>Te compartimos la receta de esta tarta pascualina espectacular, de espinaca y huevo con masa casera.</p>
        <p>PROCEDIMIENTO:</p>
        <p>Para la masa:<br>1. Realizar una masa, mezclando todos los ingredientes, una vez hecho el bollo, dejar<br>descansar por 10 minutos.<br>2. Dividir en dos la masa y estirar. Forrar el molde , rellenar y colocarle la<br>tapa encima con una chimenea en el centro hecha de papel aluminio para que “respire”.</p>
        <p>Relleno:<br>1. Rehogar la cebolla picada con el ajo, una vez este doradito, sumar la espinaca picada, condimentar y dejar enfriar.<br>2. Agregar el queso rallado, mezclar, rellenar la tarta, acomodar los huevos uno al lado del otro para que al cortar la porción ninguna se quede sin huevo; tapar.<br>3. Colocar la chimenea de papel aluminio en el centro y llevar a hornear en horno medio hasta que este cocida, aprox unos 30 minutos.</p><p></p>
    </div>`

let texto6 = `
    <div class="text-center">
        <h1 id="titulo">Receta: Canelones de ricota y acelga gratinados</h1>
    </div>
    <div class="row">
        <div class="col-md-6">
            <img id="imagen" src="../img/canelones.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-md">
            <h2>Ingredientes</h2>
            <ul style="list-style-type:none; padding-left: 0; margin-top: 10px; border-top: 0;">
                <li><br><strong>Para la masa:</strong><br><br>
                </li><li>- Leche 1/2 L.
                </li><li>- Huevos 2 unid.
                </li><li>- Harina 000 250 g.
                </li><li>- Sal 1 cda.
                </li><li>- Paprica o pimentón c/n
                </li><li>
                </li><li><br><strong>Para el relleno:</strong><br><br>
                </li><li>- Aceite.
                </li><li>- Cebolla blanca 2 unid.
                </li><li>- Cebolla de verdeo 1 unid (Parte de las pencas bien picadas).
                </li><li>- Morrón rojo.
                </li><li>- Vino blanco un chorrito.
                </li><li>- Sal fina.
                </li><li>- Pimienta negra molida.
                </li><li>- Ricota 200 g.
                </li><li>- Perejil picado 3 cdas.
                </li><li>- Salsa de tomate con albahaca.
                </li><li>- 1 atado de acelga.
                </li><li>
                </li><li><br><strong>Para la salsa:</strong><br><br>
                </li><li>- Manteca 2 cdas.
                </li><li>- Harina 2 cdas.
                </li><li>- Leche 1/2 L.
                </li><li>- Sal fina.
                </li><li>- Pimienta blanca.
                </li><li>- Nuez moscada.
                </li><li>- Queso rallado grueso 200 g.
                </li><li>- Salsa de tomate.</li>
            </ul>
        </div>
    </div> <br>
    <div class="container-fluid" id="targeta3">
        <p></p><p>¡Qué mejor que unas buenas pastas caseras! Esta vez un buen plato de rellenas: Canelones de ricota y acelga gratinados.&nbsp;&nbsp;</p>
        <p>PROCEDIMIENTO:</p>
        <p>Para los panqueques:<br>1. Armar una pasta líquida, que no es ni más ni menos que la que corresponde a los panqueques o crepes con una mezcla de harina huevo y leche.</p>
        <p>Para el relleno:<br>1. En una sartén o cacerola al fuego con aceite, cocinar las cebollas, pencas y morrón (todo picado). Remover constantemente con cuchara de madera y controlar la sazón con sal fina.<br>2. Luego de dos minutos más levantar el fondo de cocción con el vino blanco. Cocinar hasta que evapore bien todos los líquidos.<br>3. Sumar el verdeo.<br>4. Por otro lado, en otra sartén saltear la acelga bien picada chiquita con ajo y aceite dejar enfriar.<br>5. En recipiente colocamos la ricota, sal, pimienta, nuez moscada la acelga y el salteado de verduras mezclar bien y reservar.</p>
        <p>Para la salsa:<br>1. Colocar en una cacerolita la manteca y la derretimos a fuego suave.<br>2. Adicionamos la harina y revolvemos con cuchara de madera durante un minuto para que se cocine la harina.<br>3. Luego vertemos la leche, preferentemente caliente y llevamos a un hervor suave. 4. Armamos los canelones y gratinamos al horno con la salsa de tomate, la blanca y el queso.</p><p></p>
    </div>`

let texto7 = `
    <div class="text-center">
    <h1 id="titulo">Receta: Solomillo de cerdo con puré de batata blanca</h1>
    </div>
    <div class="row">
        <div class="col-md-6">
            <img id="imagen" src="../img/solomillo.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-md">
            <h2>Ingredientes</h2>
            <ul style="list-style-type:none; padding-left: 0; margin-top: 10px; border-top: 0;">
                <li>- 1 solomillo.
                </li><li>
                </li><li><br><strong>Para pintar:</strong><br><br>
                </li><li>- Salsa de soja.
                </li><li>- Jugo de mandarina.
                </li><li>- Jengibre rallado.
                </li><li>- Ajo rallado.
                </li><li>
                </li><li><br><strong>Para el puré:</strong><br><br>
                </li><li>- 500 g de puré de batata blanca.
                </li><li>- Jengibre rallado.
                </li><li>- Manteca.
                </li><li>- Sal.
                </li><li>- Leche de maní.
                </li><li>
                </li><li><br><strong>Guarnición:</strong><br><br>
                </li><li>- Repollo.
                </li><li>- Hojas de remolacha.
                </li><li>- Vinagre.
                </li><li>- Azúcar.
                </li><li>- Hojas verdes.
                </li><li>- Cherrys.</li>
            </ul>
        </div>
    </div> <br>
    <div class="container-fluid" id="targeta3">
        <p></p><p>Te compartimos la receta para preparar solomillo de cerdo marinado, acompañado de un puré de batata blanca espectacular.&nbsp;</p>
        <p>PROCEDIMIENTO:</p>
        <p>1. Para la carne, realizar una marinada con la salsa de soja, el jugo, ajo y jengibre, cocinar en horno medio por 30 minutos. <br>2. Para el puré: Cocinar las batatas, realizar un puré, con manteca y jengibre, condimentar y reservar.<br>4. Para la leche de maní: 1 taza de maní por 2 tazas de agua, hidratar y licuar.<br>5. Para la guarnición: Cortar el repollo en 4 y grillar con un poco de manteca.<br>6. Por otro lado, mezclar las hojas en un bol aderezar y emplatar con el repollo y los tomates cherrys cortados al medio.</p><p></p>
    </div>`

// funcion que inserta la receta seleccionada en galeria.html
function hacer(){
    const valores = window.location.search;
    console.log(valores);
    //Creamos la instancia
    const urlParams = new URLSearchParams(valores);
    //Accedemos a los valores
    var num = urlParams.get('num');
    if (num == 0) {
        document.getElementById("receta").innerHTML = texto0;
    } else if (num == 1){
        document.getElementById("receta").innerHTML = texto1;

    } else if (num == 2){
        document.getElementById("receta").innerHTML = texto2;

    } else if (num == 3){
        document.getElementById("receta").innerHTML = texto3;

    } else if (num == 4){
        document.getElementById("receta").innerHTML = texto4;

    } else if (num == 5){
        document.getElementById("receta").innerHTML = texto5;

    } else if (num == 6){
        document.getElementById("receta").innerHTML = texto6;

    } else if (num == 7){
        document.getElementById("receta").innerHTML = texto7;

    }

}


document.getElementById("ultimas").innerHTML = texto5;

document.getElementById("ultimas1").innerHTML = texto2;
