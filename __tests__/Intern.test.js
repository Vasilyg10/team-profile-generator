const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('getName returns the right name', function() {
    const testIntern = new Intern('Frank', 5, 'frank@frank.com', 'UW Madison');
    expect(testIntern.getName()).toBe('Frank');
})

test('getId returns the right id', function() {
    const testIntern = new Intern('Frank', 5, 'frank@frank.com', 'UW Madison');
    expect(testIntern.getId()).toBe(5);
});

test('getEmail returns the right email', function() {
    const testIntern = new Intern('Frank', 5, 'frank@frank.com', 'UW Madison');
    expect(testIntern.getEmail()).toBe('frank@frank.com');
});

test('getSchool returns the right school', function() {
    const testIntern = new Intern('Frank', 5, 'frank@frank.com', 'UW Madison');
    expect(testIntern.getSchool()).toBe('UW Madison');
});

test('getRole returns the right role', function() {
    const testIntern = new Intern('Frank', 5, 'frank@frank.com', 'UW Madison');
    expect(testIntern.getRole()).toBe('Intern');
});