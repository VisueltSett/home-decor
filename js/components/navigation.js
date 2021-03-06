
export default function createNav() {
  const {pathname} = document.location;
  console.log(pathname);

const navContainer = document.querySelector(".nav-container");


let livingLink = `<a class="nav-link ${pathname === "/living.html" ? "active" : ""}" href="living.html">Living<span class="sr-only">(current)</span></a>`;

let sleepingLink = `<a class="nav-link ${pathname === "/sleeping.html" ? "active" : ""}" href="sleeping.html">Sleeping<span class="sr-only">(current)</span></a>`;

let diningLink = `<a class="nav-link ${pathname === "/dining.html" ? "active" : ""}" href="dining.html">Dining<span class="sr-only">(current)</span></a>`;

let productsLink = `<a class="nav-link ${pathname === "/products.html" ? "active" : ""}" href="products.html">All Products<span class="sr-only">(current)</span></a>`;



navContainer.innerHTML = `<nav class="navbar navbar-expand-md navbar-light bg-light">
<a class="navbar-brand" href="index.html"><img src="./images/home-decor-logo-large-black-moniqa.svg"> - Stylish Living</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
  <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    <li class="nav-item">
      <a class="nav-link ${pathname === "/index.html" ? "active" : ""}" href="index.html">Home<span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
    ${diningLink}
    </li>
    <li class="nav-item">
    ${livingLink}
    </li>
    <li class="nav-item">
    ${sleepingLink}
    </li>
    <li class="nav-item">
    ${productsLink}
    </li>
  </ul>
  <form class="form-inline">
  <input class="form-control mr-sm-2" type="search" placeholder="Find product..." aria-label="Search">
  <button class="btn btn-outline my-2 my-sm-0" type="submit"><i class="fas fa-search" aria-label="Search"></i></button>
</form>
</div>
</nav>`;

}