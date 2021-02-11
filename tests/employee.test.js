const { test, expect } = require("@jest/globals");
const Employee = require("../lib/employee");

test("Can create the Emnployee Class Instance", ()=> {
    const testValue = new Employee();
    expect(typeof(testValue)).toBe("object")
})

test("Can set name as an argument", () => {
    const testName = "Vanessa"
    const testValue = new Employee(testName);
    expect(testValue.name).toBe(testName)
})

test("Can set id as an argument", () => {
    const id = 5
    const testValue = new Employee("Vanessa", id);
    expect(testValue.id).toBe(id)
})

test("Can set email as an argument", () => {
    const testEmail = "vpatt@test.com"
    const testValue = new Employee("Vanessa", 123, testEmail);
    expect(testValue.email).toBe(testEmail)
})

test("Can get name through function", () => {
    const testVal = "Vanessa"
    const obj = new Employee(testVal)
    expect(obj.getName()).toBe(testVal)
})
test("Can get id through function", () => {
    const testVal = 123
    const obj = new Employee("Vanessa", testVal)
    expect(obj.getId()).toBe(testVal)
})
test("Can get name through function", () => {
    const testVal = "vpatt@test.com"
    const obj = new Employee("Vanessa", 123, testVal)
    expect(obj.getEmail()).toBe(testVal)
})