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

## 自定义序号 (Customize List Symbol)

自定义有序列表符号示例代码：
Ordered list symbol customization example code:

```css
.ls-block[data-refs-self*='".ol-right-paren'] > .block-children-container > .block-children > .ls-block > div > div > a + a > .bullet-container::before {
  content: counter(kef-ol) ") ";
}

.ls-block[data-refs-self*='".ol-nested-right-paren'] > .block-children-container > .block-children > .ls-block > div > div > a + a > .bullet-container::before,
.ls-block[data-refs-self*='".ol-nested-right-paren'] .ls-block > div > div > a + a > .bullet-container::before {
  content: counters(kef-ol-nested, ".") ") ";
}
```

第一段对应普通列表，.ol-right-paren部分可以改为任何以.ol-开头的tag，例如：.ol-my；content里面的双引号里的内容就是序号采用的符号，你可以按照喜好修改。

第二段对应嵌套列表，修改方法同第一段。

The first paragraph corresponds to the general list, the .ol-right-paren part can be changed to any tag starting with .ol-, e.g: .ol-my; the content inside the double quotes is the symbol used for the serial number, you can modify it according to your preference.

The second paragraph corresponds to the nested list and is modified in the same way as the first paragraph.
