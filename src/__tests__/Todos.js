import { render, screen, fireEvent } from '@testing-library/react'
import List from "../components/todo/List";

describe('Todos tests', () => {
  test('Add todo', () => {
    render(<List/>)

    const firstTodo = 'First Todo'

    const input = screen.getByTestId('todo-input')
    const button = screen.getByTestId('todo-button')

    fireEvent.change(input, { target: { value: firstTodo } })
    fireEvent.click(button)

    screen.getByText(firstTodo)
  })

  test('remove todo', async () => {
    render(<List />)

    const list = screen.getByTestId('todo-list')
    const countChild= list.childElementCount;
    const firstButtonDel=screen.getByTestId('todo-delete-1')
    fireEvent.click(firstButtonDel)
    expect(list.childElementCount).toBe(countChild - 1)


  })
})
