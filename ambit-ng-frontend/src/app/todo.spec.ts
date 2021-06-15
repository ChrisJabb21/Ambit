import { Todo } from './todo';

describe('Todo Model', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new Todo({
      title: 'hello',
      isComplete: true,
    });
    expect(todo.title).toEqual('hello');
    expect(todo.isComplete).toEqual(true);
  });
});
