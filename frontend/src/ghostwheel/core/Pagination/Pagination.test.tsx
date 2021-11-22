import React from 'react';
import { jssSelector, render, within } from 'ghostwheel/test-utils';
import { Pagination } from '.';
import { pages } from './helpers';

describe('Pagination', () => {
  const pageSizes = [6, 7, 8];
  const items = new Array(7).fill('ping');

  test('It renders', () => {
    const pageSize = 6;
    const { getByTestId } = render(
      <Pagination
        items={items}
        pageSizes={pageSizes}
        page={1}
        pageSize={pageSize}
        setPage={jest.fn()}
        setPageSize={jest.fn()}
      />,
      {},
    );

    const pageSizeDiv = within(getByTestId('pageSize'));
    const pageElements = within(getByTestId('root'));

    pageSizes.forEach((size, i) => {
      expect(pageSizeDiv.getByText(size)).toBeInTheDocument();
      expect(size).toEqual(pageSizes[i]);
    });
    expect(pageSizeDiv.getByText(pageSizes[0])).toHaveAttribute(
      'class',
      jssSelector('buttonActive'),
    );

    pages(items, pageSize).forEach((p, i) => {
      expect(pageElements.getByText(i + 1)).toBeInTheDocument();
      expect(p).toEqual(i + 1);
    });
  });
});
