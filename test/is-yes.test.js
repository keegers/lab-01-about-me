// IMPORT MODULES under test here:
// import example from '../src/example.js';
import '../src/is-yes.js';
import { isYes } from '../src/is-yes.js';

const test = QUnit.test;

test('Test whether y works', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const entry = 'y';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(entry);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('Test whether n works', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const entry = 'n';
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(entry);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('Test whether yassss works', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const entry = 'Yassss';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(entry);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('Test whether YEsSss works', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const entry = 'YEsSss';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(entry);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('Test whether typo works', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const entry = 'typo';
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(entry);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
