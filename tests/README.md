# 🧪 TESTS README

This directory contains unit and integration tests for the backend services.

## 🗂 Folder Structure

```
/tests/
├── auth.test.js
├── questionnaire.test.js
├── jobs.test.js
├── applications.test.js
├── resume.test.js
├── admin.test.js
```

## ✅ Testing Goals

Each feature should include:
- [x] 1 Success scenario test
- [x] 1 Edge case test
- [x] 1 Error scenario test

## 🧰 Tools & Frameworks

- **Test Runner**: Jest
- **API Mocking**: Supertest
- **Database Mocking**: pg-mem or test PostgreSQL schema
- **CI Integration**: GitHub Actions or Render pre-deploy check

## 🧪 Sample Test

```js
describe("POST /auth/login", () => {
  it("should return a JWT for valid credentials", async () => {
    const res = await request(app).post("/auth/login").send({
      email: "john@example.com",
      password: "secure123"
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
```

## 🧼 Clean-Up

Use a beforeEach or afterEach block to clean the test DB or reset mocks.

```js
afterEach(async () => {
  await resetTestDatabase();
});
```

## 📌 Setup

```bash
npm install --save-dev jest supertest
npm run test
```

## ✅ To-Do
1. Add test config in package.json
2. Write tests for all major endpoints
3. Validate CV upload and parsing using mocks
4. Track coverage 