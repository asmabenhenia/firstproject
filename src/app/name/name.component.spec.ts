import { NameComponent } from './name.component';

describe('NameComponent', () => {
  it('starts with the exercise names', () => {
    expect(new NameComponent().names).toEqual(['Amine', 'Sami', 'Fatma', 'Yasmine']);
  });
  it('clears all names on reset', () => {
    const component = new NameComponent();
    component.reset();
    expect(component.names).toEqual([]);
  });
});
