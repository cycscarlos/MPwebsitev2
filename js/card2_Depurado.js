const btnDepartamentos = document.getElementById("btn-departamentosCard2"),
  // btnCerrarMenu = document.getElementById("btn-menuCard2-cerrar"),
  grid = document.getElementById("gridCard2"),
  // contenedorEnlacesNav = document.querySelector(
  //   "#menuCard2 .contenedor-enlaces-navCard2"
  // ),
  contenedorSubCategorias = document.querySelector(
    "#gridCard2 .contenedor-subcategorias"
  ),
  esDispositivoMovil = () => window.innerWidth <= 800;

btnDepartamentos.addEventListener("mouseover", () => {
  if (!esDispositivoMovil()) {
    gridCard2.classList.add("activo");
  }
});

grid.addEventListener("mouseleave", () => {
  if (!esDispositivoMovil()) {
    gridCard2.classList.remove("activo");
  }
});

document.querySelectorAll("#menuCard2 .categorias a").forEach((elemento) => {
  elemento.addEventListener("mouseenter", (e) => {
    if (!esDispositivoMovil()) {
      document
        .querySelectorAll("#menuCard2 .subcategoria")
        .forEach((categoria) => {
          categoria.classList.remove("activo");
          if (categoria.dataset.categoria == e.target.dataset.categoria) {
            categoria.classList.add("activo");
          }
        });
    }
  });
});

// EventListeners para dispositivo movil.
// document
//   .querySelector("#btn-menuCard2-barras")
//   .addEventListener("click", (e) => {
//     e.preventDefault();
//     if (contenedorEnlacesNav.classList.contains("activo")) {
//       contenedorEnlacesNav.classList.remove("activo");
//       document.querySelector("body").style.overflow = "visible";
//     } else {
//       contenedorEnlacesNav.classList.add("activo");
//       document.querySelector("body").style.overflow = "hidden";
//     }
//   });

// Click en boton de todos los departamentos (Para version movil).
btnDepartamentos.addEventListener("click", (e) => {
  e.preventDefault();
  gridCard2.classList.add("activo");
  // btnCerrarMenu.classList.add("activo");
});

// Boton de regresar en el menu de categorias
document
  // .querySelector("#gridCard2 .categorias .btn-regresar")
  .querySelector("#gridCard2 .categorias")
  .addEventListener("click", (e) => {
    e.preventDefault();
    gridCard2.classList.remove("activo");
    // btnCerrarMenu.classList.remove("activo");
  });

document.querySelectorAll("#menuCard2 .categorias a").forEach((elemento) => {
  elemento.addEventListener("click", (e) => {
    if (esDispositivoMovil()) {
      contenedorSubCategorias.classList.add("activo");
      document
        .querySelectorAll("#menuCard2 .subcategoria")
        .forEach((categoria) => {
          categoria.classList.remove("activo");
          if (categoria.dataset.categoria == e.target.dataset.categoria) {
            categoria.classList.add("activo");
          }
        });
    }
  });
});

// Boton de regresar en el menu de categorias
document
  .querySelectorAll("#gridCard2 .contenedor-subcategorias .btn-regresar")
  .forEach((boton) => {
    boton.addEventListener("click", (e) => {
      e.preventDefault();
      contenedorSubCategorias.classList.remove("activo");
    });
  });

// btnCerrarMenu.addEventListener("click", (e) => {
//   e.preventDefault();
//   document.querySelectorAll("#menuCard2 .activo").forEach((elemento) => {
//     elemento.classList.remove("activo");
//   });
//   document.querySelector("body").style.overflow = "visible";
// });
