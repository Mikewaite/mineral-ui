/* @flow */
import React from 'react';
import styled from '@emotion/styled';
import { ignoreSsrWarning } from '../../../../../../library/utils/emotion';
import FlexItem from '../../common/DemoFlexItem';
import _DemoLayout from '../../common/DemoLayout';
import _Flex from '../../common/DemoFlex';

const DemoLayout = (props: Object) => (
  <_DemoLayout lastRowStartsAt={10} {...props} />
);

const Flex = styled(_Flex)(({ direction }) => {
  return direction === 'column'
    ? {
        float: 'left',
        height: '15rem',
        width: '30%',

        ['&:not(:nth-child(3n))' + ignoreSsrWarning]: {
          marginRight: '5%'
        }
      }
    : null;
});

export default {
  id: 'justify-content',
  title: 'Justify Content',
  description: `The \`justifyContent\` prop defines the alignment of items along
the main axis (horizontal, if \`direction\` is \`row\`; vertical, if
\`direction\` is \`column\`).`,
  scope: { DemoLayout, Flex, FlexItem },
  source: `
    () => {
      const propValues = [
        'start', // default
        'center',
        'end',
        'around',
        'between',
        'evenly'
      ];

      const renderFlexes = ({ column }) =>
        propValues.map((value, index) => (
          <Flex
            justifyContent={value}
            direction={column ? 'column' : 'row'}
            key={column ? 'c-' + index : index}>
            <FlexItem>A</FlexItem>
            <FlexItem>B</FlexItem>
            <FlexItem>C</FlexItem>
          </Flex>
        ));

      return (
        <DemoLayout>
          {renderFlexes({ column: false })}
          {renderFlexes({ column: true })}
        </DemoLayout>
      );
    }`
};
