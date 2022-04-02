import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Testing in 05-funciones.js file', () => {
    test('should return an object', () => {
        const user = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        expect(getUser()).toEqual(user);
    });

    test('should return an object with username Kevin', () => {
        const user = {
            uid: 'ABC567',
            username: 'Kevin'
        }

        expect(getUsuarioActivo('Kevin')).toEqual(user);
    })

});
