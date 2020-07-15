class Temas {
    constructor(){
        this._hora = new Date().getHours()
        this._body = document.querySelector("body")
        this._card = document.querySelector(".card")
        this._titulo = document.querySelector(".card--titulo")
        this._conteudo = document.querySelector(".card--conteudo")
    }
    noite(){
        this._body.classList.add("dark")
        this._card.classList.add("card-dark")
        this._conteudo.classList.add("card--conteudo-dark")
        this._titulo.classList.add("card--titulo-dark")
    }

    verificaTema(){ 
        if (this._hora >=18 || this._hora <= 6){
            return this.noite()
        }
    }
}