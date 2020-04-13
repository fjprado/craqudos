"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SorteioSortear = /** @class */ (function () {
    function SorteioSortear() {
        this.jogadores = [];
    }
    SorteioSortear.prototype.adicionar = function (jogador) {
        var jogadorLocalStorage = localStorage.getItem("jogadorLocalStorage");
        if (!jogadorLocalStorage) {
            //se não existir nada no Local Storage
            this.jogadores.push(jogador);
        }
        else {
            //se existir algo no Local Storage
            this.jogadores = JSON.parse(jogadorLocalStorage);
            this.jogadores.push(jogador);
        }
        localStorage.setItem("jogadorLocalStorage", JSON.stringify(this.jogadores));
    };
    SorteioSortear.prototype.obterJogadores = function () {
        var jogadorLocalStorage = localStorage.getItem("jogadorLocalStorage");
        if (jogadorLocalStorage) {
            return JSON.parse(jogadorLocalStorage);
        }
        return this.jogadores;
    };
    SorteioSortear.prototype.removerJogador = function (jogador) {
        var jogadorLocalStorage = localStorage.getItem("jogadorLocalStorage");
        if (jogadorLocalStorage) {
            this.jogadores = JSON.parse(jogadorLocalStorage);
            this.jogadores = this.jogadores.filter(function (j) { return j.id != jogador.id; });
            localStorage.setItem("jogadorLocalStorage", JSON.stringify(this.jogadores));
        }
    };
    SorteioSortear.prototype.temJogadoresSorteio = function () {
        var itens = this.obterJogadores();
        return (itens.length > 0);
    };
    SorteioSortear.prototype.temJogadorAdicionado = function (jogador) {
        var itens = this.obterJogadores();
        itens = itens.filter(function (j) { return j.id == jogador.id; });
        return (itens.length > 0);
    };
    return SorteioSortear;
}());
exports.SorteioSortear = SorteioSortear;
//# sourceMappingURL=sorteio.sortear.js.map