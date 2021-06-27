const { expect } = require('@jest/globals');
const { TestWatcher } = require('jest');
const Employee = require('../lib:/Employee');
const Engineer = require('../lib:/Engineer');

// jest.mock('../lib/Employee');

test("creates a new Engineer", () => {

    const engineer = new Engineer('Charlie', 6, 'Charlie@yahoo.com', 'github.com/charlie');

    expect(engineer.getName()).toEqual('Charlie');
    expect(engineer.getGithub()).toEqual('github.com/charlie');
    expect(engineer.getId()).toEqual(6);
    expect(engineer.getRole()).toEqual("Engineer");
});

