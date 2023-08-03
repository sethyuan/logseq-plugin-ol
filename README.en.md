[中文](README.md) | English

# logseq-plugin-ol

Ordered lists, flat or nested, multiple formats ordered lists.

## Usage

![demo](./demo.gif)

Add a tag starting with `#.ol` to display a block as an ordered list. There are multiple formats to choose from.

You can also use the following two commands:

- `/Ordered list`
- `/Nested ordered list`
- `/Unordered list`

## List Styles

Single-Level List

- `#.ol`
- `#.ol-circle`
- `#.ol-paren`
- `#.ol-right-paren`
- `#.ol-dun`

Nested List

- `#.ol-nested`
- `#.ol-nested-2`
- `#.ol-nested-3`
- `#.ol-nested-right-paren`
- `#.ol-nested-right-paren-2`
- `#.ol-nested-right-paren-3`

Unordered List in a Ordered List

- `#.ul`

## Known Issues

- Since it is a pure CSS solution, focusing into blocks in an ordered list causes the CSS style chain to break and the ordered list is not rendered correctly.
- Nested lists have a continuous nesting counter, meaning that if there is a single-level list in a nested list and a nested list in this single-level list, the levels of this nested list is counted from the outermost nested list.

## Customize List Symbol

Ordered list symbol customization example code:

```css
.ls-block[data-refs-self*='".ol-right-paren']
  > .block-children-container
  > .block-children
  > .ls-block
  > div
  > div
  > a
  + a
  > .bullet-container::before {
  content: counter(kef-ol) ") ";
}

.ls-block[data-refs-self*='".ol-nested-right-paren']
  > .block-children-container
  > .block-children
  > .ls-block
  > div
  > div
  > a
  + a
  > .bullet-container::before,
.ls-block[data-refs-self*='".ol-nested-right-paren']
  .ls-block
  > div
  > div
  > a
  + a
  > .bullet-container::before {
  content: counters(kef-ol-nested, ".") ") ";
}
```

The first paragraph corresponds to the general list, the .ol-right-paren part can be changed to any tag starting with .ol-, e.g: .ol-my; the content inside the double quotes is the symbol used for the serial number, you can modify it according to your preference.

The second paragraph corresponds to the nested list and is modified in the same way as the first paragraph.

## Buy me a coffee

If you think the software I have developed is helpful to you and would like to give recognition and support, you may buy me a coffee using following link. Thank you for your support and attention.

<a href="https://www.buymeacoffee.com/sethyuan" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
