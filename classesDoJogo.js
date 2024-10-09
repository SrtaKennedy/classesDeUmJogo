class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        // Verifica o tipo do herói e o ataque correspondente
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'fez um ataque desconhecido';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }

}

const heroi1 = new heroi('Arthur', 30, 'guerreiro');
heroi1.atacar(); 
//Saída: O guerreiro atacou usando espada

const heroi2 = new heroi('Merlin', 150, 'mago');
heroi2.atacar(); 
//Saída: O mago atacou usando magia

