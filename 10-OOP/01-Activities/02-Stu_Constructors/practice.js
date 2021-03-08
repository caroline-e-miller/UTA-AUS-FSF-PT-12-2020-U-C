function Developer(name, game) {
    this.name = name;
    this.game = game;
    this.introduction = () => {
        console.log(`Hi, my name is ${this.name}, and I like to play ${this.game}.`)
    }
}

const trevor = new Developer('Trevor', 'Super Mario 64');
trevor.introduction();