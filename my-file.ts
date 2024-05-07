const aNumber: number = 123;
const aString: string = 'fraise';
const aBoolean: boolean = true;

type MyType = number;

// type Character = {
//     life: number;
// };

// Création d'un type personnalisé
interface Character {
    name: string;
    life: number;
    attack: number;
    defense: number;
}

// "Duplication" d'un type, le type "Pet" doit avoir les mêmes attributs que l'interface "Character"
type Pet = Character;

// Héritage
interface Hero extends Character {
    pet?: Pet;
}

const MyCharacter: Character = {
    name: 'Antoine',
    life: 100,
    attack: 25,
    defense: 10,
};

function damage(characterToDamage: Hero, amount: number): number {
    characterToDamage.life -= amount;
    return characterToDamage.life;
}
const result = damage(MyCharacter, 12);
console.log(result);

// type MyArrayOfNumbers = number[];
interface MyArrayOfNumbers extends Array<number> {}
const arrayOk: MyArrayOfNumbers = [1, 2, 3];
// const arrayNotOk: MyArrayOfNumbers = [1, 'two', false];
