/* @flow */
import React from 'react';
import Button from '../../../../../../library/Button';
import styled from '@emotion/styled';
import Tooltip from '../../../../../../library/Tooltip';
import IconDelete from 'mineral-ui-icons/IconDelete';

const Root = styled('div')({
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const DemoLayout = (props: Object) => <Root {...props} />;

export default {
  id: 'placement',
  title: 'Placement',
  description: `The \`placement\` prop determines the initial placement of the
Tooltip content relative to the trigger. The Tooltip will still react to
viewport edges and scrolling.`,
  scope: { Button, DemoLayout, IconDelete, Tooltip },
  source: `
    <DemoLayout>
      <Tooltip
        content="Light years star stuff harvesting star light citizens of distant epochs."
        isOpen
        placement="bottom">
        <Button variant="danger" iconStart={<IconDelete title="delete" />}/>
      </Tooltip>
    </DemoLayout>`
};
