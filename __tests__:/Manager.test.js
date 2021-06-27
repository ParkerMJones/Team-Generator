const { test, expect } = require('@jest/globals');
const { TestWatcher } = require('jest');
const Employee = require('../lib:/Employee');
const Manager = require('../lib:/Manager');


test("creates a new manager", () => {
    const manager = new Manager("Karen", 21, 'Karen@email.com', 123);

    expect(manager.getName()).toEqual("Karen");
    expect(manager.getId()).toEqual(21);
    expect(manager.getEmail()).toEqual('Karen@email.com');
    expect(manager.getOfficeNumber()).toEqual(123);
})