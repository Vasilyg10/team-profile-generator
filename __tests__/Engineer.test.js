const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('getName returns the right name', function() {
    const testEngineer = new Engineer('Frank', 5, 'frank@frank.com', 'gitfrank');
    expect(testEngineer.getName()).toBe('Frank');
})

test('getId returns the right id', function() {
    const testEngineer = new Engineer('Frank', 5, 'frank@frank.com', 'gitfrank');
    expect(testEngineer.getId()).toBe(5);
});

test('getEmail returns the right email', function() {
    const testEngineer = new Engineer('Frank', 5, 'frank@frank.com', 'gitfrank');
    expect(testEngineer.getEmail()).toBe('frank@frank.com');
});

test('getGithub returns the right github', function() {
    const testEngineer = new Engineer('Frank', 5, 'frank@frank.com', 'gitfrank');
    expect(testEngineer.getGithub()).toBe('gitfrank');
});

test('getRole returns the right role', function() {
    const testEngineer = new Engineer('Frank', 5, 'frank@frank.com', 'gitfrank');
    expect(testEngineer.getRole()).toBe('Engineer');
});