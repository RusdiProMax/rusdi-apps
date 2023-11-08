class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render(){
        this.innerHTML =
        `<footer class="w-full p-5 bg-gray-900 text-white">
        <h2 class="text-center">Copyright &copy; 2023</h2>
    </footer>`
    

    ;
    
    }

}

customElements.define("footer-component", FooterComponent);