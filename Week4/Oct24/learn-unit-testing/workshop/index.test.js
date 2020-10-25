function test(message, testfunction) {
    function testURL(expected, result) {
        if (expected === result) {
            console.info("Correct");
        }
        else {
            console.error("Wrooong");
        }
    }
    const batata = {
        testURL
    };
    console.group(message);
    testfunction(batata);
    console.groupEnd();
}

test("urltest", t => {
    var urlname = makeUrl("pikachu");
    var correctname = "https://pokeapi.co/api/v2/pikachu";
    console.log(urlname);
    t.testURL(correctname, urlname);
    urlname = makeUrl("bulbasaur");
    correctname = "https://pokeapi.co/api/v2/bulbasaur";
    console.log(urlname);
    t.testURL(correctname, urlname);
});