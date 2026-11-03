import { UserComponent } from './user.component';

describe('UserComponent', () => {
  it('clears all users on reset', () => {
    const component = new UserComponent();
    expect(component.users.length).toBe(4);
    component.reset();
    expect(component.users).toEqual([]);
  });
});
