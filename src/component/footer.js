class Footer extends HTMLElement {
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
        <div class="copyright">
            &copy; 2020 Syntia Dwi Wahyuningtias
        </div>
        `;
    }
}

customElements.define('footer-copyright', Footer);