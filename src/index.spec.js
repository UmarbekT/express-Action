const request = require("supertest");
const { app } = require("./index"); // Agar `index.js` CommonJS bo‘lsa

describe("GET /hello", () => {
  it("it should return Hello World!", async () => {
    const response = await request(app).get("/hello");
    expect(response.text).toBe("Hello World!");
  });
});

describe("POST /sum", () => {
  it("bu 200 status qaytarishi kerak va summani", async () => {
    const sums = {
      a: Math.floor(Math.random() * 1000),
      b: Math.floor(Math.random() * 1000),
    };
    const response = await request(app).post("/sum").send(sums);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("result", sums.a + sums.b);
  });

  it("bu 400 status qaytarishi kerak qachonki a yoki b number bo'lmasa", async () => {
    const invalidData = { a: "A", b: "B" };
    const response = await request(app).post("/sum").send(invalidData);
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("error");
  });
});
