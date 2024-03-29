[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / [Diagnostic](../modules/internal_.Diagnostic.md) / Presentation

# Enumeration: Presentation

[\<internal\>](../modules/internal_.md).[Diagnostic](../modules/internal_.Diagnostic.md).Presentation

## Table of contents

### Enumeration Members

- [Dictionary](internal_.Diagnostic.Presentation.md#dictionary)
- [List](internal_.Diagnostic.Presentation.md#list)
- [Squash](internal_.Diagnostic.Presentation.md#squash)
- [Strong](internal_.Diagnostic.Presentation.md#strong)
- [Via](internal_.Diagnostic.Presentation.md#via)
- [Weak](internal_.Diagnostic.Presentation.md#weak)

## Enumeration Members

### Dictionary

• **Dictionary** = ``"dictionary"``

A key/value diagnostic.  Rendered as a group of key/value pairs.

#### Defined in

matter.js/dist/esm/log/Diagnostic.d.ts:45

___

### List

• **List** = ``"list"``

By default iterables render as a single line with spaces separating.  The "list" presentation treats elements
instead as separate entities which typically means presentation on different lines.

Within an iterable, a list also serves to present contained items as subordinate to the previous item.

#### Defined in

matter.js/dist/esm/log/Diagnostic.d.ts:29

___

### Squash

• **Squash** = ``"squash"``

Render iterables without intervening spaces.

#### Defined in

matter.js/dist/esm/log/Diagnostic.d.ts:33

___

### Strong

• **Strong** = ``"strong"``

An emphasized diagnostic.  Rendered to draw attention.

#### Defined in

matter.js/dist/esm/log/Diagnostic.d.ts:37

___

### Via

• **Via** = ``"via"``

Path, resource or session identifier.

#### Defined in

matter.js/dist/esm/log/Diagnostic.d.ts:49

___

### Weak

• **Weak** = ``"weak"``

A deemphasized diagnostic.  Rendered to draw less attention than default rendering.

#### Defined in

matter.js/dist/esm/log/Diagnostic.d.ts:41
