/* @flow */
import React, { Children, Component, Fragment } from 'react';
import debounce from 'lodash.debounce';
import EventListener from '../EventListener';
import IconChevronLeft from '../Icon/IconChevronLeft';
import IconChevronRight from '../Icon/IconChevronRight';
import IconExpandLess from '../Icon/IconExpandLess';
import IconExpandMore from '../Icon/IconExpandMore';
import {
  TabListRoot as Root,
  TabListArrowButton as ArrowButton,
  TabListInner as Inner,
  TabListList as List
} from './styled';
import { POSITION } from './constants';

import { TabListDefaultProps, TabListProps, TabListState } from './types';

export default class TabList extends Component<TabListProps, TabListState> {
  static displayName = 'TabList';

  static defaultProps: TabListDefaultProps = {
    position: POSITION.top
  };

  state = {
    scrollable: false
  };

  list: HTMLElement | null | undefined;

  root: HTMLElement | null | undefined;

  componentDidMount() {
    this.updateScrollable();
  }

  componentDidUpdate(prevProps: TabListProps) {
    if (prevProps !== this.props) {
      this.updateScrollable();
    }
  }

  render() {
    const {
      align,
      children,
      onIncrement,
      position,
      role,
      vertical,
      ...restProps
    } = this.props;
    const { scrollable } = this.state;
    const rootProps = {
      align,
      ref: this.setRootRef,
      vertical,
      ...restProps,
      'aria-label': undefined
    };
    const listProps = {
      align,
      'aria-label': restProps['aria-label'],
      count: Children.count(children),
      ref: this.setListRef,
      role,
      vertical
    };

    let content = <List {...listProps}>{children}</List>;
    if (scrollable) {
      const arrowButtonProps = {
        'aria-hidden': true,
        minimal: true,
        size: 'medium',
        tabIndex: -1
      };
      const innerProps = {
        position,
        scrollX: !vertical,
        scrollY: vertical,
        vertical
      };
      content = (
        <Fragment>
          <ArrowButton
            {...arrowButtonProps}
            iconStart={vertical ? <IconExpandLess /> : <IconChevronLeft />}
            onClick={(event) => {
              onIncrement && onIncrement('ArrowLeft', event);
            }}
          />
          <Inner {...innerProps}>{content}</Inner>
          <ArrowButton
            {...arrowButtonProps}
            iconStart={vertical ? <IconExpandMore /> : <IconChevronRight />}
            onClick={(event) => {
              onIncrement && onIncrement('ArrowRight', event);
            }}
          />
        </Fragment>
      );
    }

    return (
      <Root {...rootProps}>
        {content}
        <EventListener
          listeners={[
            {
              event: 'resize',
              handler: this.handleWindowResize,
              target: 'window'
            }
          ]}
        />
      </Root>
    );
  }

  setListRef = (node: HTMLElement | null | undefined) => {
    this.list = node;
  };

  setRootRef = (node: HTMLElement | null | undefined) => {
    this.root = node;
  };

  updateScrollable = () => {
    const { vertical } = this.props;
    const listNode = this.list;
    const rootNode = this.root;

    if (listNode && rootNode) {
      const dimension = vertical ? 'Height' : 'Width';
      const scrollable = Boolean(
        // $FlowFixMe - indexer property is missing in HTMLElement
        listNode[`scroll${dimension}`] > rootNode[`client${dimension}`]
      );
      if (this.state.scrollable !== scrollable) {
        this.setState({
          scrollable
        });
      }
    }
  };

  handleWindowResize = debounce(this.updateScrollable, 100);
}
