[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/cluster/export](../../README.md) / [\<internal\>](../README.md) / ValidationLocation

# Interface: ValidationLocation

Contextual information tracked during validation.

## Properties

### choices?

> `optional` **choices**: `Record`\<`string`, [`Choice`](../namespaces/ValidationLocation/interfaces/Choice.md)\>

Choice conformance requires context from the parent object.  This
context is passed here.

#### Source

[packages/matter.js/src/behavior/state/validation/location.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/validation/location.ts#L29)

***

### location?

> `optional` **location**: `string`[]

Path used to create fully-qualified name for diagnostic messages.

#### Source

[packages/matter.js/src/behavior/state/validation/location.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/validation/location.ts#L34)

***

### path

> **path**: [`DataModelPath`](DataModelPath.md)

The path to scrutinize, used for diagnostic messages.

#### Source

[packages/matter.js/src/behavior/state/validation/location.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/validation/location.ts#L17)

***

### siblings?

> `optional` **siblings**: [`Struct`](../README.md#struct)

To validate conformance and constraints we require access to sibling
values.  They are passed here when validating a record.

#### Source

[packages/matter.js/src/behavior/state/validation/location.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/validation/location.ts#L23)
