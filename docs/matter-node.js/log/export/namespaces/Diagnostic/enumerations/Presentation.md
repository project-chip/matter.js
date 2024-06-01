[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [log/export](../../../README.md) / [Diagnostic](../README.md) / Presentation

# Enumeration: Presentation

## Enumeration Members

### Dictionary

> **Dictionary**: `"dictionary"`

A key/value diagnostic.  Rendered as a group of key/value pairs.

#### Source

packages/matter.js/dist/esm/log/Diagnostic.d.ts:45

***

### List

> **List**: `"list"`

By default iterables render as a single line with spaces separating.  The "list" presentation treats elements
instead as separate entities which typically means presentation on different lines.

Within an iterable, a list also serves to present contained items as subordinate to the previous item.

#### Source

packages/matter.js/dist/esm/log/Diagnostic.d.ts:29

***

### Squash

> **Squash**: `"squash"`

Render iterables without intervening spaces.

#### Source

packages/matter.js/dist/esm/log/Diagnostic.d.ts:33

***

### Strong

> **Strong**: `"strong"`

An emphasized diagnostic.  Rendered to draw attention.

#### Source

packages/matter.js/dist/esm/log/Diagnostic.d.ts:37

***

### Via

> **Via**: `"via"`

Path, resource or session identifier.

#### Source

packages/matter.js/dist/esm/log/Diagnostic.d.ts:49

***

### Weak

> **Weak**: `"weak"`

A deemphasized diagnostic.  Rendered to draw less attention than default rendering.

#### Source

packages/matter.js/dist/esm/log/Diagnostic.d.ts:41
