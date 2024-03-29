[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](exports_model.md) / MergedModel

# Namespace: MergedModel

[exports/model](exports_model.md).MergedModel

## Table of contents

### Type Aliases

- [Priorities](exports_model.MergedModel.md#priorities)

### Variables

- [DefaultPriorities](exports_model.MergedModel.md#defaultpriorities)

## Type Aliases

### Priorities

Ƭ **Priorities**: `Object`

Priorities define rules that control how values are merged.

#### Index signature

▪ [typeName: `string`]: \{ `[fieldName: string]`: `string`[];  }

An element type or "*" to match all elements.

#### Defined in

packages/matter.js/dist/esm/model/logic/MergedModel.d.ts:16

## Variables

### DefaultPriorities

• `Const` **DefaultPriorities**: [`Priorities`](exports_model.MergedModel.md#priorities)

A default set of priorities for the variants included with matter.js. We currently have "chip" as preferred over
"spec" by default, but then have overridden to reverse this for a lot of fields.  Should probably revisit the
default at some point.

#### Defined in

packages/matter.js/dist/esm/model/logic/MergedModel.d.ts:32
