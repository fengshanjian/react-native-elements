<p align="center">
  <a href="https://react-native-community.github.io/react-native-elements/">
    <img alt="react-native-elements" src="https://raw.githubusercontent.com/react-native-training/react-native-elements/master/docs/images/react_native_elements_logo.png" width="450">
  </a>
</p>

<h3 align="center">
  React Native Elements
</h3>

<p align="center">
  Cross Platform <a href="https://facebook.github.io/react-native/">React Native</a> UI Toolkit
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-elements"><img src="https://img.shields.io/npm/v/react-native-elements.svg?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/react-native-elements"><img src="https://img.shields.io/npm/dm/react-native-elements.svg?style=flat-square"></a>
  <a href="https://cdnjs.com/libraries/react-native-elements"><img src="https://img.shields.io/cdnjs/v/react-native-elements.svg?style=flat-square"></a>
  <a href="https://travis-ci.org/react-native-training/react-native-elements"><img src="https://img.shields.io/travis/react-native-training/react-native-elements/master.svg?style=flat-square"></a>
  <a href="https://reactnativetraining.herokuapp.com/"><img src="https://reactnativetraining.herokuapp.com/badge.svg"></a>
</p>

<p align="center">
  <a href="#backers"><img src="https://opencollective.com/react-native-elements/backers/badge.svg"></a>
  <a href="#sponsors"><img src="https://opencollective.com/react-native-elements/sponsors/badge.svg"></a>
  <a href="https://codecov.io/gh/react-native-training/react-native-elements"><img src="https://codecov.io/gh/react-native-training/react-native-elements/coverage.svg"></a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"></a>
</p>

<br />

![React Native UI Toolkit](http://i.imgur.com/UXrGTeG.png)

## Get Started

### Installation

- If you are using
[create-react-native-app](https://github.com/react-community/create-react-native-app)
or [Expo](https://expo.io), [follow these instructions](https://github.com/fengshanjian/react-native-elements/blob/master/using-with-crna-or-expo.md).

- If your project is a standard React Native project (if you have an
ios/android directory and created it with `react-native init`), [follow these installation instructions](https://github.com/fengshanjian/react-native-elements/blob/master/default_installation.md).

### Usage

Start using the components:

```js
import { Button } from 'react-native-elements';

<Button
  raised
  icon={{name: 'home', size: 32}}
  buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
  textStyle={{textAlign: 'center'}}
  title={`Welcome to\nReact Native Elements`}
/>
```

## Components Included

-  [Buttons](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/buttons.md)
-  [Social Icons / Social Icon Buttons](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/social_icons.md)
-  [Icons](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/icons.md)
-  [Side Menu](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/side_menu.md)
-  [Form Elements](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/forms.md)
-  [Search Bar](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/searchbar.md)
-  [ButtonGroup](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/button_group.md)
-  [Checkboxes](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/checkbox.md)
-  [List Element](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/lists.md)
-  [Badge](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/badge.md)
-  [Tab Bar](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/tabbar.md)
-  [HTML style headings](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/HTML_style_headings.md)
-  [Card](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/card.md)
-  [Pricing](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/pricing.md)
-  [Grid](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/grid.md)
-  [Slider](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/slider.md)
-  [Tile](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/tile.md)
-  [Avatar](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/avatar.md)
-  [Rating](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/rating.md)
-  [SwipeDeck](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/swipedeck.md)
-  [ActionPopover](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/ActionPopover.md)
-  [ActionSheet](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/ActionSheet.md)
-  [Carousel](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/Carousel.md)
-  [Label](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/Label.md)
-  [ListRow](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/ListRow.md)
-  [Overlay](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/Overlay.md)
-  [Popover](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/Popover.md)
-  [Progress](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/Progress.md)
-  [Projector](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/Projector.md)
-  [PullPicker](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/PullPicker.md)
-  [SegmentedBar](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/SegmentedBar.md)
-  [SegmentedView](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/SegmentedView.md)
-  [Toast](https://github.com/fengshanjian/react-native-elements/blob/master/docs/API/Toast.md)

