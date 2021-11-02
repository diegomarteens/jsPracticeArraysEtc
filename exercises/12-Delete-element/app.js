var people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

function deletePerson(personName)
{
    let newListPeole = [];
    for(i= 0; i<= people.length -1; i ++){
        const namesPeople = people[i];
        if (namesPeople !== personName){
            newListPeole.push(namesPeople);

        }
    }
    return newListPeole;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));

