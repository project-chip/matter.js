[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](model.md) / MergeModels

# Namespace: MergeModels

[model](model.md).MergeModels

## Table of contents

### Type Aliases

- [Priorities](model.MergeModels.md#priorities)

### Variables

- [DefaultPriorities](model.MergeModels.md#defaultpriorities)

## Type Aliases

### Priorities

Ƭ **Priorities**: `Object`

Priorities define rules that control how values are merged.

#### Index signature

▪ [typeName: `string`]: \{ `[fieldName: string]`: `string`[];  }

An element type or "*" to match all elements.

#### Defined in

[packages/matter.js/src/model/logic/MergeModels.ts:286](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/logic/MergeModels.ts#L286)

## Variables

### DefaultPriorities

• `Const` **DefaultPriorities**: [`Priorities`](model.MergeModels.md#priorities)

A default set of priorities for the variants included with matter.js.
We currently have "chip" as preferred over "spec" by default, but then
have overridden to reverse this for a lot of fields.  Should probably
revisit the default at some point.

#### Defined in

[packages/matter.js/src/model/logic/MergeModels.ts:304](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/model/logic/MergeModels.ts#L304)
