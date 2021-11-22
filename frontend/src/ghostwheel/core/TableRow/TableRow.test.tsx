import React from 'react';
import { jssSelector, render } from 'ghostwheel/test-utils';
import { TableRow } from '.';

describe('TableRow', () => {
  test('It renders', () => {
    const { getByTestId } = render(
      <table>
        <tbody>
          <TableRow data-testid="target">
            <td>I am component</td>
          </TableRow>
        </tbody>
      </table>,
      {},
    );

    const row = getByTestId('target');

    expect(row).toHaveAttribute('class', jssSelector('TableRow', 'root'));
  });
});
