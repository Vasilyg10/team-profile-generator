const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('getName returns the right name', function() {
    const testManager = new Manager('Frank', 5, 'frank@frank.com', 2625554242);
    expect(testManager.getName()).toBe('Frank');
})

test('getId returns the right id', function() {
    const testManager = new Manager('Frank', 5, 'frank@frank.com', 2625554242);
    expect(testManager.getId()).toBe(5);
});

test('getEmail returns the right email', function() {
    const testManager = new Manager('Frank', 5, 'frank@frank.com', 2625554242);
    expect(testManager.getEmail()).toBe('frank@frank.com');
});

test('getOfficeNumber returns the right officeNumber', function() {
    const testManager = new Manager('Frank', 5, 'frank@frank.com', 2625554242);
    expect(testManager.getOfficeNumber()).toBe(2625554242);
});

test('getRole returns the right role', function() {
    const testManager = new Manager('Frank', 5, 'frank@frank.com', 2625554242);
    expect(testManager.getRole()).toBe('Manager');
});