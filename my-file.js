const aNumber = 123;
const aString = 'fraise';
const aBoolean = true;
const MyCharacter = {
    name: 'Antoine',
    life: 100,
    attack: 25,
    defense: 10,
};
function damage(characterToDamage, amount) {
    characterToDamage.life -= amount;
    return characterToDamage.life;
}
const result = damage(MyCharacter, 12);
console.log(result);
const arrayOk = [1, 2, 3];
