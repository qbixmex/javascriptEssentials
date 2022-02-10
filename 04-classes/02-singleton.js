class Singleton {
    static instance;

    constructor( name = "none" ) {
        if ( !!Singleton.instance ) {
            return Singleton.instance;
        }

        this.name = name;
        Singleton.instance = this;

        return this; // <- This is by default
    }
}

const instance1 = new Singleton("Spiderman");
const instance2 = new Singleton("Iron Man");
const instance3 = new Singleton("Black Panther");

console.table( instance1 );

console.log(
    `%cInstance1 Name: %c${instance1.name}`,
    "color: hsl(190, 90%, 50%)",
    "color: hsl(60, 70%, 50%)",
);

console.log(
    `%cInstance1 Name: %c${instance2.name}`,
    "color: hsl(190, 90%, 50%)",
    "color: hsl(90, 85%, 50%)",
);

console.log(
    `%cInstance1 Name: %c${instance2.name}`,
    "color: hsl(190, 90%, 50%)",
    "color: hsl(30, 85%, 50%)",
);