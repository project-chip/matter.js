[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/model](../../README.md) / MergedModel

# Namespace: MergedModel

## Type Aliases

### Priorities

> **Priorities**: `object`

Priorities define rules that control how values are merged.

#### Index signature

 \[`typeName`: `string`\]: `object`

#### Source

packages/matter.js/dist/esm/model/logic/MergedModel.d.ts:16

## Variables

### DefaultPriorities

> `const` **DefaultPriorities**: [`Priorities`](README.md#priorities)

A default set of priorities for the variants included with matter.js. We currently have "chip" as preferred over
"spec" by default, but then have overridden to reverse this for a lot of fields.  Should probably revisit the
default at some point.

#### Source

packages/matter.js/dist/esm/model/logic/MergedModel.d.ts:32
