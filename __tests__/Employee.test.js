const { test, expect } = require('@jest/globals')
const Employee = require('../lib/employee')

test('getName returns the right name', function(){
    const testEmployee = new Employee('Frank', 5, 'frank@frank.com')
    expect(testEmployee.getName()).toBe('Frank')
})