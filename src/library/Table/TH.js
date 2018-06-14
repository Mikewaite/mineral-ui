/* @flow */
import React from 'react';
import { createStyledComponent, getNormalizedValue, pxToEm } from '../styles';
import { createThemedComponent, mapComponentThemes } from '../themes';
import TD, { componentTheme as tDComponentTheme } from './TD';
import { TableContext } from './Table';

type Props = {
  /** TODO */
  children?: React$Node,
  /** @Private TODO */
  element?: string,
  /** @Private TODO */
  highContrast?: boolean,
  /** TODO */
  minWidth?: number | string,
  /** TODO */
  maxWidth?: number | string,
  /** @Private TODO */
  spacious?: boolean,
  /** Available horizontal alignments */
  textAlign?: 'start' | 'end' | 'center' | 'justify',
  /** TODO */
  width?: number | string
};

export const componentTheme = (baseTheme: Object) => ({
  ...mapComponentThemes(
    {
      name: 'TD',
      theme: tDComponentTheme(baseTheme)
    },
    {
      name: 'TH',
      theme: {
        TH_borderVertical: `1px dotted ${baseTheme.borderColor}`,
        TH_borderVertical_highContrast: `1px dotted ${baseTheme.color_gray_80}`,
        TH_fontWeight: baseTheme.fontWeight_bold,
        TH_paddingHorizontal: baseTheme.space_inline_md,
        TH_paddingVertical: pxToEm(12),
        TH_paddingVertical_spacious: baseTheme.space_stack_md,
        TH_verticalAlign: 'bottom'
      }
    },
    baseTheme
  )
});

export const ThemedTD = createThemedComponent(TD, ({ theme: baseTheme }) => ({
  ...mapComponentThemes(
    {
      name: 'TH',
      theme: componentTheme(baseTheme)
    },
    {
      name: 'TD',
      theme: {}
    },
    baseTheme
  )
}));

const styles = ({
  highContrast,
  maxWidth,
  minWidth,
  spacious,
  theme: baseTheme,
  width
}) => {
  const theme = componentTheme(baseTheme);
  const fontSize = theme.TH_fontSize;
  const paddingHorizontal = getNormalizedValue(
    theme.TH_paddingHorizontal,
    fontSize
  );
  const paddingVertical = getNormalizedValue(
    spacious ? theme.TH_paddingVertical_spacious : theme.TH_paddingVertical,
    fontSize
  );
  const rtl = theme.direction === 'rtl';

  return {
    fontWeight: theme.TH_fontWeight,
    maxWidth,
    minWidth,
    padding: `${paddingVertical} ${paddingHorizontal}`,

    '&:not(:first-child)': {
      borderLeft: rtl
        ? null
        : highContrast
          ? theme.TH_borderVertical_highContrast
          : theme.TH_borderVertical,
      borderRight: !rtl
        ? null
        : highContrast
          ? theme.TH_borderVertical_highContrast
          : theme.TH_borderVertical
    },
    width
  };
};

/**
 * TH TODO
 */
function TH(props: Props) {
  const { children, element, ...restProps } = props;

  const Root = createStyledComponent(ThemedTD, styles, {
    displayName: 'TH',
    filterProps: ['width'],
    forwardProps: ['element', 'textAlign'],
    rootEl: element,
    withProps: { element }
  });

  return (
    <TableContext.Consumer>
      {({ highContrast, spacious }) => {
        const rootProps = { highContrast, spacious, ...restProps };
        console.log('TH render', rootProps);
        return <Root {...rootProps}>{children}</Root>;
      }}
    </TableContext.Consumer>
  );
}

TH.defaultProps = {
  element: 'th',
  textAlign: 'start'
};

export default TH;
