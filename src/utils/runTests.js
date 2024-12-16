// Test runner
function runTests(problemName, testCases, fn) {
    console.log(`Running tests for: ${problemName}\n`);
    let passed = 0;
    
    testCases.forEach((testCases, index) => {
        const result = fn(testCases.input);
        const success = result === testCases.expected;
        passed += success ? 1 : 0;
        
        console.log(`Test ${index + 1}: ${success ? '✓ PASSED' : '✗ FAILED'}`);
        testCases.description ? console.log(`Description: ${testCases.description}`) : false;
        console.log(`Input: [${testCases.input}]`);
        console.log(`Expected: ${testCases.expected}`);
        console.log(`Actual: ${result}\n`);
    });
    
    console.log(`Results: ${passed}/${testCases.length} tests passed`);
}

module.exports = { 
    runTests
};