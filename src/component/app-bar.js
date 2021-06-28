class AppBar extends HTMLElement {
    
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: box-border;
            }

            :host {
                background-color: midnightblue;
                display: block;
                width: 100%;
            }

            h2 {
                padding: 20px;
                color: white;
                font-family: Florence, cursive;
            }
        </style>

        <center><h2>Cinema Film 23</h2></center>
        `;
    }
}

customElements.define("app-bar", AppBar);
