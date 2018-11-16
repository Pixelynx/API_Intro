let APIResponse = {

  status: "success",

  message: {
    affenpinscher: [],
    african: [],
    airedale: [],
    akita: [],
    appenzeller: [],
    basenji: [],
    beagle: [],
    bluetick: [],
    borzoi: [],
    bouvier: [],
    boxer: [],
    brabancon: [],
    briard: [],
    bulldog: ["boston", "french"],
    bullterrier: ["staffordshire"],
    cairn: [],
    cattledog: ["australian"],
    chihuahua: [],
    chow: [],
    clumber: [],
    cockapoo: [],
    collie: ["border"],
    coonhound: [],
    corgi: ["cardigan"],
    cotondetulear: [],
    dachshund: [],
    dalmatian: [],
    dane: ["great"],
    deerhound: ["scottish"],
    dhole: [],
    dingo: [],
    doberman: [],
    elkhound: ["norwegian"],
    entlebucher: [],
    eskimo: [],
    frise: ["bichon"],
    germanshepherd: [],
    greyhound: ["italian"],
    groenendael: [],
    hound: ["afghan", "basset", "blood", "english", "ibizan", "walker"],
    husky: [],
    keeshond: [],
    kelpie: [],
    komondor: [],
    kuvasz: [],
    labrador: [],
    leonberg: [],
    lhasa: [],
    malamute: [],
    malinois: [],
    maltese: [],
    mastiff: ["bull", "tibetan"],
    mexicanhairless: [],
    mix: [],
    mountain: ["bernese", "swiss"],
    newfoundland: [],
    otterhound: [],
    papillon: [],
    pekinese: [],
    pembroke: [],
    pinscher: ["miniature"],
    pointer: ["german", "germanlonghair"],
    pomeranian: [],
    poodle: ["miniature", "standard", "toy"],
    pug: [],
    puggle: [],
    pyrenees: [],
    redbone: [],
    retriever: ["chesapeake", "curly", "flatcoated", "golden"],
    ridgeback: ["rhodesian"],
    rottweiler: [],
    saluki: [],
    samoyed: [],
    schipperke: [],
    schnauzer: ["giant", "miniature"],
    setter: ["english", "gordon", "irish"],
    sheepdog: ["english", "shetland"],
    shiba: [],
    shihtzu: [],
    spaniel: [
      "blenheim",
      "brittany",
      "cocker",
      "irish",
      "japanese",
      "sussex",
      "welsh"
    ],
    springer: ["english"],
    stbernard: [],
    terrier: [
      "american",
      "australian",
      "bedlington",
      "border",
      "dandie",
      "fox",
      "irish",
      "kerryblue",
      "lakeland",
      "norfolk",
      "norwich",
      "patterdale",
      "russell",
      "scottish",
      "sealyham",
      "silky",
      "tibetan",
      "toy",
      "westhighland",
      "wheaten",
      "yorkshire"
    ],
    vizsla: [],
    weimaraner: [],
    whippet: [],
    wolfhound: ["irish"]
  }
};





const breedList = [];

const list = () => {

  let dogsObj = APIResponse['message'];

  for(let key in dogsObj){
    if(dogsObj[key].length){
      dogsObj[key].forEach((dog) => {
        key = key.split(' ');
        key = key[0][0].toUpperCase().concat(key[0].slice(1));
          dog = dog.split(' ');
          dog = dog[0][0].toUpperCase().concat(dog[0].slice(1));
            breedList.push(`${dog} ${key}`)
      })
    }
    else {
      key = key.split(' ');
      key = key[0][0].toUpperCase().concat(key[0].slice(1));
        breedList.push(key)
    }
  }
  return breedList;
}

const randomizeDogs = () => {
  let theList = list();
  let index = Math.floor(Math.random() * theList.length);
  return breedList[index];
}


document.addEventListener('DOMContentLoaded', () => {

  let button = document.querySelector('#button');
  let body = document.querySelector('body');
  let printBreed = document.createElement('p');

  button.addEventListener('click', () => {

    printBreed.innerHTML = randomizeDogs();
    body.appendChild(printBreed);


  })
  button.addEventListener('click', () => {
    // let replaceBreed = document.createElement('p');

    printBreed.textContent = randomizeDogs();
  })
})




















// const breeds = (breedList) => {
//   breedList = [];
//   let data = APIResponse['message'];
//
//   Object.keys(data).forEach((dog) => {
//     if(data[dog].length) {
//       data[dog].forEach((type) => {
//         breedList.push(`${type} ${dog}`);
//       })
//     } else {
//       breedList.push(`${dog}`);
//     }
//   })
//   return breedList;
// }

// console.log(breeds());
