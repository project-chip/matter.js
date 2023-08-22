[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](exports_model.md) / MergeModels

# Namespace: MergeModels

[exports/model](exports_model.md).MergeModels

## Table of contents

### Type Aliases

- [Priorities](exports_model.MergeModels.md#priorities)

### Variables

- [DefaultPriorities](exports_model.MergeModels.md#defaultpriorities)

## Type Aliases

### Priorities

Ƭ **Priorities**: `Object`

Priorities define rules that control how values are merged.

#### Index signature

▪ [typeName: `string`]: { `[fieldName: string]`: `string`[];  }

#### Defined in

packages/matter.js/dist/cjs/model/logic/MergeModels.d.ts:16

## Variables

### DefaultPriorities

• `Const` **DefaultPriorities**: [`Priorities`](exports_model.MergeModels.md#priorities)

A default set of priorities for the variants included with matter.js.
We currently have "chip" as preferred over "spec" by default, but then
have overridden to reverse this for a lot of fields.  Should probably
revisit the default at some point.

#### Defined in

packages/matter.js/dist/cjs/model/logic/MergeModels.d.ts:33
