[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](model.md) / MergedModel

# Namespace: MergedModel

[model](model.md).MergedModel

## Table of contents

### Type Aliases

- [Priorities](model.MergedModel.md#priorities)

### Variables

- [DefaultPriorities](model.MergedModel.md#defaultpriorities)

## Type Aliases

### Priorities

Ƭ **Priorities**: `Object`

Priorities define rules that control how values are merged.

#### Index signature

▪ [typeName: `string`]: \{ `[fieldName: string]`: `string`[];  }

An element type or "*" to match all elements.

#### Defined in

[packages/matter.js/src/model/logic/MergedModel.ts:271](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/MergedModel.ts#L271)

## Variables

### DefaultPriorities

• `Const` **DefaultPriorities**: [`Priorities`](model.MergedModel.md#priorities)

A default set of priorities for the variants included with matter.js. We currently have "chip" as preferred over
"spec" by default, but then have overridden to reverse this for a lot of fields.  Should probably revisit the
default at some point.

#### Defined in

[packages/matter.js/src/model/logic/MergedModel.ts:288](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/MergedModel.ts#L288)
