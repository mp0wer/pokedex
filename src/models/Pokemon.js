export class Pokemon {
    constructor(data) {
        this.name = data.name;
        this.avatar = data.sprites && data.sprites.front_default;
        this.types = data.types.map(item => item.type.name);
        this.abilities = data.abilities.map(item => item.ability.name);
        this.forms = data.forms.map(item => item.name);
    }
}