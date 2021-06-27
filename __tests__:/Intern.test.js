const { test, expect } = require('@jest/globals');
const { TestWatcher } = require('jest');
const Employee = require('../lib:/Employee');
const Intern = require('../lib:/Intern');

test('creates a new Intern', () => {
    const intern = new Intern('Mary', 73, 'Mary@mail.com', 'UCLA');

    expect(intern.getRole()).toEqual('Intern');
    expect(intern.getSchool()).toEqual('UCLA');
    expect(intern.getId()).toEqual(73);
    expect(intern.getEmail()).toEqual('Mary@mail.com');
})

