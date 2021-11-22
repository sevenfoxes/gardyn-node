import React from 'react';
import { jssSelector, render } from 'ghostwheel/test-utils';

import { TableCell } from '.';

describe('TableCell', () => {
  test('It renders', () => {
    const { getByTestId } = render(
      <table>
        <tbody>
          <tr>
            <TableCell data-testid="target">I am component</TableCell>
          </tr>
        </tbody>
      </table>,
      {},
    );

    const cell = getByTestId('target');

    expect(cell).toHaveAttribute('class', jssSelector('TableCell', 'root'));
  });
});
