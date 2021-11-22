import React, { Children } from "react";
import { makeStyles } from "ghostwheel";
import { TableRow } from "../TableRow";
import { colors } from "../../../theme";

const useStyles = makeStyles({
  root: {
    borderCollapse: "collapse",
    width: "100%",
    fontSize: 14,

    "& tr + tr > td": {
      borderTop: `1px solid ${colors.line}`,

    },
  },
  headerRow: {
    "& th": {
      borderBottom: `2px solid ${colors.line}`,
    },
  },
}, "Table");

const Head = ({ children }) => {
  const c = useStyles();

  return (
    <thead>
      <TableRow className={c.headerRow}>
        {Children.count(children) ? Children.map(children, h => h) : (<th>there&apos;s no headers</th>)}
      </TableRow>
    </thead>
  );
};

export const Table = ({ children, ...props }) => {
  const c = useStyles();

  const ch = Children.toArray(children);
  const headers = ch.filter(({ type: t }) => t?.name === "TableHeader");
  const cells = ch.filter(({ type: t }) => t?.name !== "TableHeader");

  return !!cells.length && (
    <table className={c.root} {...props}>
      <Head>{headers}</Head>
      <tbody>
        {cells}
      </tbody>
    </table>
  );
};
