// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

// "name=oliver?email=hello@oliverjam.es" -> { name: "oliver", email: "hello@oliverjam.es"}

function searchParamsToObject(name){
var searchParams = new URLSearchParams(name);

const data={
  name: searchParams.get("name"),
  email: searchParams.get("email")
}
console.log(data)
}
searchParamsToObject("name=oliver&email=hello@oliverjam.es");