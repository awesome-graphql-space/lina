import * as AnimalResolvers from './users.resolvers';

export const animalNameTest = () => {
    const obj = {
      kind: 'Dog',
      name: 'Koko',
      breeds: ['Corgi', 'German Shepherd'],
    };

    const args = {};
    const ctx = {};

    const output = AnimalResolvers.name(obj, args, ctx);

    expect(output).toEqual('Koko');
};