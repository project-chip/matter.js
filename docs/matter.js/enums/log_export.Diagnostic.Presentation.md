[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [log/export](../modules/log_export.md) / [Diagnostic](../modules/log_export.Diagnostic.md) / Presentation

# Enumeration: Presentation

[log/export](../modules/log_export.md).[Diagnostic](../modules/log_export.Diagnostic.md).Presentation

## Table of contents

### Enumeration Members

- [Dictionary](log_export.Diagnostic.Presentation.md#dictionary)
- [List](log_export.Diagnostic.Presentation.md#list)
- [Squash](log_export.Diagnostic.Presentation.md#squash)
- [Strong](log_export.Diagnostic.Presentation.md#strong)
- [Via](log_export.Diagnostic.Presentation.md#via)
- [Weak](log_export.Diagnostic.Presentation.md#weak)

## Enumeration Members

### Dictionary

• **Dictionary** = ``"dictionary"``

A key/value diagnostic.  Rendered as a group of key/value pairs.

#### Defined in

[packages/matter.js/src/log/Diagnostic.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/log/Diagnostic.ts#L58)

___

### List

• **List** = ``"list"``

By default iterables render as a single line with spaces separating.  The "list" presentation treats elements
instead as separate entities which typically means presentation on different lines.

Within an iterable, a list also serves to present contained items as subordinate to the previous item.

#### Defined in

[packages/matter.js/src/log/Diagnostic.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/log/Diagnostic.ts#L38)

___

### Squash

• **Squash** = ``"squash"``

Render iterables without intervening spaces.

#### Defined in

[packages/matter.js/src/log/Diagnostic.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/log/Diagnostic.ts#L43)

___

### Strong

• **Strong** = ``"strong"``

An emphasized diagnostic.  Rendered to draw attention.

#### Defined in

[packages/matter.js/src/log/Diagnostic.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/log/Diagnostic.ts#L48)

___

### Via

• **Via** = ``"via"``

Path, resource or session identifier.

#### Defined in

[packages/matter.js/src/log/Diagnostic.ts:63](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/log/Diagnostic.ts#L63)

___

### Weak

• **Weak** = ``"weak"``

A deemphasized diagnostic.  Rendered to draw less attention than default rendering.

#### Defined in

[packages/matter.js/src/log/Diagnostic.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/log/Diagnostic.ts#L53)
