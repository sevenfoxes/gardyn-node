import { jssSelector, render } from 'test-utils';
import { Table } from '.';

describe('Table', () => {
  test('It renders when it has cells, but has no headers', () => {
    const { getByTestId, getByText } = render(
      <Table data-testid="target">
        <tr>
          <td>e</td>
        </tr>
      </Table>,
    );

    const table = getByTestId('target');
    const headerRow = getByText("there's no headers").closest('tr');

    expect(table).toHaveAttribute('class', jssSelector('Table', 'root'));
    expect(headerRow).toHaveAttribute(
      'class',
      jssSelector('Table', 'headerRow'),
    );
  });
});
