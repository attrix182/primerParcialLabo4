

export class Pais{
    public name: string;
    public flag: string;
    public nativeName: string;
    public capital: string;
    public population: number;


    constructor(name: string, flag: string,  nativeName: string, capital:string, population:number){
        this.name = name;
        this.flag = flag;
        this.nativeName = nativeName;
        this.capital = capital;
        this.population = population;

    }
}