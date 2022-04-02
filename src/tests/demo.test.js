describe('Testing in file named demo.test.js', () => {
    test('string should be the same', () => {
        //1. initial state
        const str = 'Hello World';
        //2. action
        const str2 = `Hello World`;
        //3. assertion
        expect(str).toBe(str2);
    })
});

