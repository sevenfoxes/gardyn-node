import React from 'react';
import {
  classnames,
  makeStyles,
  FirstPageIcon,
  LastPageIcon,
} from 'ghostwheel';
import { pages } from './helpers';

const gap = 10;
const useStyles = makeStyles(
  ({ colors }) => ({
    root: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridTemplateColumns: '1fr',
      alignItems: 'center',
      gridGap: gap,
      padding: [0, '.7rem'],
    },
    pageSize: {
      alignItems: 'center',
      display: 'grid',
      gridAutoFlow: 'column',
      gridGap: gap,
      justifyItems: 'start',
      justifyContent: 'start',
    },
    button: {
      background: 'transparent',
      border: `1px solid transparent`,
      color: 'white',
      display: 'block',
      padding: [3, 6],
      minWidth: 26,

      '& svg': {
        height: 16,
        width: 16,
      },

      '&:hover': {
        background: '#9acd3240',
        border: `1px solid ${colors.green}`,
      },

      '&:focus': {
        border: `1px solid ${colors.green}`,
        outline: 'none',
      },
    },
    buttonActive: {
      color: colors.textOnGreen,
      background: colors.green,

      '&:hover': {
        background: colors.green,
      },
    },
    isArrow: {
      padding: [3, 0, 0],
    },
  }),
  'Pagination',
);

const PageSelectButton = ({ active, children, isArrow = false, ...rest }) => {
  const c = useStyles();
  return (
    <button
      className={classnames(
        c.button,
        active && c.buttonActive,
        c.isArrow && isArrow,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export const Pagination = ({
  items,
  pageSizes,
  page,
  setPage,
  pageSize,
  setPageSize,
  className = 'no',
}) => {
  const c = useStyles();
  const offset = 3;

  if (!items?.length) {
    return null;
  }

  const pageButtonsToShow = pages(items, pageSize)
    .filter((p) => !(p >= offset + page))
    .filter((p) => !(p < page - offset));
  const showArrows = pageButtonsToShow.length > 1;

  const handleClickPageSize = (p) => setPageSize(p);
  const handleClickPage = (p) => setPage(p);

  return (
    <div
      data-testid="root"
      className={classnames(c.root, { [className]: className !== 'no' })}
    >
      <div data-testid="pageSize" className={c.pageSize}>
        {pageSizes.map((p) => (
          <PageSelectButton
            key={`pageSizes-${p}`}
            active={pageSize === p}
            onClick={() => handleClickPageSize(p)}
          >
            {p}
          </PageSelectButton>
        ))}
      </div>
      {showArrows && (
        <PageSelectButton
          isArrow={true}
          key={`pages-f`}
          active={false}
          onClick={() => handleClickPage(1)}
        >
          <FirstPageIcon />
        </PageSelectButton>
      )}
      {pageButtonsToShow.map((p) => (
        <PageSelectButton
          key={`pages-${p}`}
          active={page === p}
          onClick={() => handleClickPage(p)}
        >
          {p}
        </PageSelectButton>
      ))}
      {showArrows && (
        <PageSelectButton
          isArrow={true}
          key={`pages-l`}
          active={false}
          onClick={() => handleClickPage(pages.length + 1)}
        >
          <LastPageIcon />
        </PageSelectButton>
      )}
    </div>
  );
};
