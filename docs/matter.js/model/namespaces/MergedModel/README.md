[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [model](../../README.md) / MergedModel

# Namespace: MergedModel

## Type Aliases

### Priorities

> **Priorities**: `object`

Priorities define rules that control how values are merged.

#### Index signature

 \[`typeName`: `string`\]: `object`

#### Source

[packages/matter.js/src/model/logic/MergedModel.ts:271](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/MergedModel.ts#L271)

## Variables

### DefaultPriorities

> `const` **DefaultPriorities**: [`Priorities`](README.md#priorities)

A default set of priorities for the variants included with matter.js. We currently have "chip" as preferred over
"spec" by default, but then have overridden to reverse this for a lot of fields.  Should probably revisit the
default at some point.

#### Source

[packages/matter.js/src/model/logic/MergedModel.ts:288](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/MergedModel.ts#L288)
