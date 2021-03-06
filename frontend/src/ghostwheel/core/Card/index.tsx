import React, { ReactChild, ReactChildren, ReactNode } from 'react';
import { makeStyles, classnames } from 'ghostwheel';
import { Wrapper } from '../Wrapper';

interface CardProps {
  children?: ReactNode;
  title: string;
  wrap?: boolean;
  actions?: ReactNode;
  footer?: ReactNode;
  styling?: any;
}

const useStyles = makeStyles(({ card }) => card, 'Card');

const CardInner = ({ actions, title, children, footer, styling }) => {
  const c = useStyles();
  return (
    <section
      data-testid="root"
      className={classnames(c.root, { [styling.cardRoot]: !!styling.cardRoot })}
    >
      <header
        className={classnames(c.header, {
          [styling?.cardHeader]: !!styling.cardHeader,
        })}
      >
        <h1 className={c.title}>
          <span className={c.t}>{title}</span>
        </h1>
        {actions}
      </header>
      <main
        className={classnames(c.main, {
          [styling.cardMain]: !!styling.cardMain,
        })}
      >
        {children}
      </main>
      {footer && (
        <footer
          className={classnames(c.footer, {
            [styling.cardFooter]: !!styling.cardFooter,
          })}
        >
          {footer}
        </footer>
      )}
    </section>
  );
};

export const Card = ({
  children,
  wrap = false,
  footer,
  styling,
  actions,
  title,
}: CardProps) => {
  return wrap ? (
    <Wrapper>
      <CardInner
        title={title}
        actions={actions}
        footer={footer}
        styling={styling}
      >
        {children}
      </CardInner>
    </Wrapper>
  ) : (
    <CardInner
      title={title}
      actions={actions}
      footer={footer}
      styling={styling}
    >
      {children}
    </CardInner>
  );
};
