
class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <nav id="navbar" class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
          <li class="topnav-item">
          <a class="topnav-link " aria-current="page" href="part-one.html"> Module One </a>
        </li>
        <li class="topnav-item">
              <a class="topnav-link " aria-current="page" href="#"> Module Two </a>
            </li>
            <li class="topnav-item">
              <a class="topnav-link" aria-current="page" href="#"> About </a>
            </li>
            <li class="topnav-item">
              <a class="topnav-link" href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
          `
    }
}

customElements.define('app-nav', Navbar);


