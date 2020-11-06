const test = require("tape");
const supertest = require("supertest");
const router = require("./router");

test("Initialize", (t) => {
  let num = 2;
  t.equal(num, 2, "should return 2");
  // // call t.end() at the end of every test,
  // // to ensure Tape knows there's no async code running and
  // // that it hasn't missed any assertions
  t.end();
});

test("GET. Home route returns a status code of 200 (/)", (t) => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect("content-type", "text/plain")
    .end((err, res) => {
      t.error(err);
      t.equal(res.text, "hello");
      t.end();
    });
});

test("GET. Home route returns a status code of 404 (/elephant)", (t) => {
  supertest(router)
    .get("/elephant")
    .expect(404)
    .expect("content-type", "text/html")
    .end((err, res) => {
      t.error(err);
      t.equal(res.text, "<h1>Not Found</h1>");
      t.end();
    });
});
test("GET. Home route returns a status code of 200 (/blog)", (t) => {
  supertest(router)
    .get("/blog")
    .expect(200)
    .expect("content-type", "application/json")
    .end((err, res) => {
      t.error(err);
      t.equal(res.text, '["cat","dog","bird"]');
      t.end();
    });
});

test("POST. 302 (/blog)", (t) => {
  supertest(router)
    .post("/blog")
    .set({ Authorization: "123" })
    // .send(["a", "b"])
    .expect(302)
    .expect("location", "/blog")
    .end((err, res) => {
      t.error(err);
      // t.equal(res.text, '["a","b"]');
      t.end();
    });
});
