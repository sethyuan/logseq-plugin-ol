# logseq-plugin-ol

有序列表，单级或多级、多种样式的有序列表。

Ordered lists, flat or nested, multiple formats ordered lists.

## 使用展示 (Usage)

![demo](./demo.gif)

在想要展示为有序列表的块上添加一个以 `#.ol` 开头的标签就可以了。有多种样式可供选择。

Add a tag starting with `#.ol` to display a block as an ordered list. There are multiple formats to choose from.

## 序号样式 (List Styles)

单级列表 (Single-Level List)

- `#.ol`
- `#.ol-circle`
- `#.ol-paren`
- `#.ol-right-paren`
- `#.ol-dun`

嵌套列表 (Nested List)

- `#.ol-nested`
- `#.ol-nested-right-paren`

有序列表中的无序列表 (Unordered List in a Ordered List)

- `#.ul`

## 已知问题 (Known Issues)

- 由于是纯 CSS 解决方案，所以在聚焦进有序列表中的块时，会导致 CSS 样式链断裂，有序列表不能被正确渲染。
- 嵌套列表的嵌套计数器是连续的，也就是说，如果嵌套列表中有单级列表，而单级列表中又有一个嵌套列表的话，这个嵌套列表的层级是从最外层的嵌套列表开始算起的。

- Since it is a pure CSS solution, focusing into blocks in an ordered list causes the CSS style chain to break and the ordered list is not rendered correctly.
- Nested lists have a continuous nesting counter, meaning that if there is a single-level list in a nested list and a nested list in this single-level list, the levels of this nested list is counted from the outermost nested list.
