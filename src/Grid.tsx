// A grid component using the following libs as inspiration.
//
// For the implementation:
// - https://getbootstrap.com/docs/4.3/layout/grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/

import * as React from "react";
import clsx from "clsx";
import { breakpoints, generateGutter, generateGrid } from "./gridHelpers";
import { Breakpoint } from './createBreakPoints';
// @ts-ignore
import injectSheet from 'react-jss'

// Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',
export const styles = {
  /* Styles applied to the root element */
  root: {},
  /* Styles applied to the root element if `container={true}`. */
  container: {
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
  },
  maximize: {
    width: '100%',
    height: '100%',
    maxWidth: '100% !important',
    maxHeight: '100% !important'
  },
  relative: {
    position: 'relative',
  },
  /* Styles applied to the root element if `item={true}`. */
  item: {
    boxSizing: "border-box",
    margin: "0" // For instance, it's useful when used with a `figure` element.
  },
  flex: {
    display: 'flex'
  },
  /* Styles applied to the root element if `zeroMinWidth={true}`. */
  zeroMinWidth: {
    minWidth: 0
  },
  /* Styles applied to the root element if `direction="column"`. */
  "direction-xs-column": {
    flexDirection: "column",
    "& > $item": {
      maxWidth: 'unset'
    }
  },
  /* Styles applied to the root element if `direction="column-reverse"`. */
  "direction-xs-column-reverse": {
    flexDirection: "column-reverse",
    "& > $item": {
      maxWidth: 'unset'
    }
  },
  /* Styles applied to the root element if `direction="rwo-reverse"`. */
  "direction-xs-row-reverse": {
    flexDirection: "row-reverse"
  },
  /* Styles applied to the root element if `wrap="nowrap"`. */
  "wrap-xs-nowrap": {
    flexWrap: "nowrap"
  },
  /* Styles applied to the root element if `wrap="reverse"`. */
  "wrap-xs-wrap-reverse": {
    flexWrap: "wrap-reverse"
  },
  /* Styles applied to the root element if `alignItems="center"`. */
  "align-items-xs-center": {
    alignItems: "center"
  },
  /* Styles applied to the root element if `alignItems="flex-start"`. */
  "align-items-xs-flex-start": {
    alignItems: "flex-start"
  },
  /* Styles applied to the root element if `alignItems="flex-end"`. */
  "align-items-xs-flex-end": {
    alignItems: "flex-end"
  },
  /* Styles applied to the root element if `alignItems="baseline"`. */
  "align-items-xs-baseline": {
    alignItems: "baseline"
  },
  /* Styles applied to the root element if `alignContent="center"`. */
  "align-content-xs-center": {
    alignContent: "center"
  },
  /* Styles applied to the root element if `alignContent="flex-start"`. */
  "align-content-xs-flex-start": {
    alignContent: "flex-start"
  },
  /* Styles applied to the root element if `alignContent="flex-end"`. */
  "align-content-xs-flex-end": {
    alignContent: "flex-end"
  },
  /* Styles applied to the root element if `alignContent="space-between"`. */
  "align-content-xs-space-between": {
    alignContent: "space-between"
  },
  /* Styles applied to the root element if `alignContent="space-around"`. */
  "align-content-xs-space-around": {
    alignContent: "space-around"
  },
  /* Styles applied to the root element if `justify="center"`. */
  "justify-xs-center": {
    justifyContent: "center"
  },
  /* Styles applied to the root element if `justify="flex-end"`. */
  "justify-xs-flex-end": {
    justifyContent: "flex-end"
  },
  /* Styles applied to the root element if `justify="space-between"`. */
  "justify-xs-space-between": {
    justifyContent: "space-between"
  },
  /* Styles applied to the root element if `justify="space-around"`. */
  "justify-xs-space-around": {
    justifyContent: "space-around"
  },
  /* Styles applied to the root element if `justify="space-evenly"`. */
  "justify-xs-space-evenly": {
    justifyContent: "space-evenly"
  },
  ...generateGutter("xs"),
  ...breakpoints.keys.reduce((accumulator: object, key: (Breakpoint | number)) => {
    // Use side effect over immutability for better performance.
    generateGrid(accumulator, key);
    return accumulator;
  }, {})
};

export declare type GridSize =
  | boolean
  | "auto"
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

export declare type GridProps = {
  alignContent?:
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around";
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  children?: React.ReactNode;
  className?: string;
  component?: any;
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  container?: boolean;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  item?: boolean;
  relative?: boolean;
  maximize?: boolean;
  classes?: any,
  justify?:
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";
  lg?: GridSize;
  md?: GridSize;
  sm?: GridSize;
  xl?: GridSize;
  xs?: GridSize;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  zeroMinWidth?: boolean;
  style?: React.CSSProperties;
};

export declare type GridClass = React.SFC<GridProps>;

// TODO update to use SFC/FunctionComponent
const Grid: GridClass = props => {
  const {
    classes,
    alignContent = "stretch",
    alignItems = "stretch",
    className: classNameProp,
    component: Component = "div",
    container = false,
    direction = "row",
    item = false,
    justify = "flex-start",
    lg = false,
    md = false,
    sm = false,
    spacing = 0,
    wrap = "wrap",
    xl = false,
    xs = false,
    zeroMinWidth = false,
    maximize = false,
    relative = false,
    ...other
  } = props;

  // if (xs > 0 | ['column', 'column-reverse'].indexOf(direction)) {

  // }

  const gridDirection = direction.charAt(0);

  const className = clsx(
    classes.root,
    {
      [classes.container]: container,
      [classes.item]: item,
      [classes.maximize]: maximize,
      [classes.relative]: relative,
      [classes.flex]: props.hasOwnProperty('justify') ||
        props.hasOwnProperty('alignContent') ||
        props.hasOwnProperty('alignItems') ||
        props.hasOwnProperty('wrap') ||
        props.hasOwnProperty('direction'),
      [classes.zeroMinWidth]: zeroMinWidth,
      [classes[`spacing-xs-${String(spacing)}`]]: container && spacing !== 0,
      [classes[`direction-xs-${String(direction)}`]]: direction !== "row",
      [classes[`wrap-xs-${String(wrap)}`]]: wrap !== "wrap",
      [classes[`align-items-xs-${String(alignItems)}`]]:
        alignItems !== "stretch",
      [classes[`align-content-xs-${String(alignContent)}`]]:
        alignContent !== "stretch",
      [classes[`justify-xs-${String(justify)}`]]: justify !== "flex-start",
      [classes[`grid-xs-${String(xs)}`]]: xs !== false,
      [classes[`grid-sm-${String(sm)}`]]: sm !== false,
      [classes[`grid-md-${String(md)}`]]: md !== false,
      [classes[`grid-lg-${String(lg)}`]]: lg !== false,
      [classes[`grid-xl-${String(xl)}`]]: xl !== false,
    },
    classNameProp
  );
  
  return <Component className={className} {...other} />;
};

const WrappedGrid: GridClass = injectSheet(styles)(Grid);

export default WrappedGrid;