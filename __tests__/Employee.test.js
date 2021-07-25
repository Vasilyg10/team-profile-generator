const { test, expect } = require('@jest/globals')
const Employee = require('../lib/employee')

test('getName returns the right name', function() {
    const testEmployee = new Employee('Frank', 5, 'frank@frank.com', 'Employee')
    expect(testEmployee.getName()).toBe('Frank');
});

test('getId returns the right id', function() {
    const testEmployee = new Employee('Frank', 5, 'frank@frank.com', 'Employee')
    expect(testEmployee.getId()).toBe(5);
});

test('getEmail returns the right email', function() {
    const testEmployee = new Employee('Frank', 5, 'frank@frank.com', 'Employee')
    expect(testEmployee.getEmail()).toBe('frank@frank.com');
});

test('getRole returns the right role', function() {
    const testEmployee = new Employee('Frank', 5, 'frank@frank.com', 'Employee')
    expect(testEmployee.getRole()).toBe('Employee');
});