const { expect } = require('@jest/globals');
const { TestWatcher } = require('jest');
const Employee = require('../lib:/Employee');


test('creates a new employee', () => {
    const employee = new Employee('David', 4, 'David@gmail.com');

    expect(employee.getName()).toEqual('David');
    expect(employee.title).toBe('Employee');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.getId()).toEqual(4);
});