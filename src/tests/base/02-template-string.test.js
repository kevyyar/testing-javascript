import '@testing-library/jest-dom'
import { getSaludo } from '../../base/02-template-string'

describe('Testing in file 02-template-string.test.js', () => {
    test('getSaludo must return Hola Kevin', () => {
        const nombre = 'Kevin';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);
    });

    // getSaludo func must return Hola Kev! if there are no params
    test('getSaludo must return Hola Kev! if there are no params', () => {
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Kev');
    })

});
