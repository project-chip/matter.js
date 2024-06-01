[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [log/export](../../../README.md) / [Diagnostic](../README.md) / Presentation

# Enumeration: Presentation

## Enumeration Members

### Dictionary

> **Dictionary**: `"dictionary"`

A key/value diagnostic.  Rendered as a group of key/value pairs.

#### Source

[packages/matter.js/src/log/Diagnostic.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L58)

***

### List

> **List**: `"list"`

By default iterables render as a single line with spaces separating.  The "list" presentation treats elements
instead as separate entities which typically means presentation on different lines.

Within an iterable, a list also serves to present contained items as subordinate to the previous item.

#### Source

[packages/matter.js/src/log/Diagnostic.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L38)

***

### Squash

> **Squash**: `"squash"`

Render iterables without intervening spaces.

#### Source

[packages/matter.js/src/log/Diagnostic.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L43)

***

### Strong

> **Strong**: `"strong"`

An emphasized diagnostic.  Rendered to draw attention.

#### Source

[packages/matter.js/src/log/Diagnostic.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L48)

***

### Via

> **Via**: `"via"`

Path, resource or session identifier.

#### Source

[packages/matter.js/src/log/Diagnostic.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L63)

***

### Weak

> **Weak**: `"weak"`

A deemphasized diagnostic.  Rendered to draw less attention than default rendering.

#### Source

[packages/matter.js/src/log/Diagnostic.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L53)
