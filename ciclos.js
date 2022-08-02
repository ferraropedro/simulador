function saludar() {
    alert("¡Bienvenido a Ferrebebidas!");
  }
  const sumarIva = (precio) => {
    return precio + precio * 0.35;
  };
  
  saludar();
  
  let estacion;
  function main() {
    let estacion = parseInt( prompt("Elija una seccion \n1- bebida sin alcohol \n2- bebida alcoholica \nPresione 4 para salir." ));
    console.log("estacion: " + estacion);
    if (estacion == 1) {
      //bebida sin alcohol
      BebidaSinAlcohol();
    } else if (estacion == 2) {
      //bebida alcoholica
      BebidaAlcoholica();
    } else if (estacion == 4) {
      return;
    } else {
      console.log("No selecciono ninguna seccion");
      main();
    }

  
    function BebidaSinAlcohol() {
      listaSinAlcohol = [
        "0-agua (100$)",
        "1-cocacola (250$)",
        "2-sprite (250$)",
        "3-speed (170$)",
      ];
      let SinAlcohol = parseInt(
        prompt(
          "0-agua (100$) \n1-cocacola (250$) \n2-sprite (250$)\n3-speed (170$)\nPresione '4' para salir."
        )
      );
      if ((SinAlcohol >= 0) & (SinAlcohol <= listaSinAlcohol.length)) {
        console.log(listaSinAlcohol[SinAlcohol]);
        alert(listaSinAlcohol[SinAlcohol]);
        ConsStock();
      } else {
        alert("Opcion no valida");
        BebidaSinAlcohol();
      }
    }
    let precio = 0;

  
    function BebidaAlcoholica() {
      listaAlcohol = [
        "0-fernet (1500$)",
        "1-vodka (1500$)",
        "2-vino tinto (1000$)",
        "3-champagne (2000$)",
      ];
  
      let Alcohol = parseInt(
        prompt(
          "0-fernet (1500$)\n1-vodka (1500$)\n2-vino tinto (1000$)\n3-champagne (2000$)\nPresione 'EXIT' para salir."
        )
      );
      if ((Alcohol >= 0) & (Alcohol <= listaAlcohol.length)) {
        console.log(listaAlcohol[Alcohol]);
        alert(listaAlcohol[Alcohol]);
        ConsStock();
      } else {
        alert("Opcion no valida");
        BebidaAlcoholica();
      }
    }


    function ConsStock(estacion) {
      if (Alcohol == "champagne") {
        return true;
      }
    }
  }
  main();
  