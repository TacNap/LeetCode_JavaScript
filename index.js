const { containsDuplicate, containsDuplicatePerformance } = require(`./src/problems/easy/containsDuplicate`);
const { runTests } = require(`./src/utils/runTests`);

const containsDuplicateTests = [
    {
        input: [1, 2, 3, 1],
        expected: true,
    }, 
    {
        input: [1, 3, 3, 4, 1],
        expected: true
    },
    {
        input: [1, 2, 3, 4],
        expected: false
    },
    {
        input: [0],
        expected: false
    },
    {
        input: [2, 14, 18, 22, 22],
        expected: true
    }
];


runTests("Contains Duplicate", containsDuplicateTests, containsDuplicate);
runTests("Contains Duplicate", containsDuplicateTests, containsDuplicatePerformance);

