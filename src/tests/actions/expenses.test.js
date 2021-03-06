import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should setup remove expense action object', () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', {amount: 12345});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      amount: 12345
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'rent',
    amount: 1234567,
    createdAt: 567890,
    note: 'rent for May'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  })
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  })
});