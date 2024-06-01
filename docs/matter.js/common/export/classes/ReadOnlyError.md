[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [common/export](../README.md) / ReadOnlyError

# Class: ReadOnlyError

Thrown for write attempts against immutable data.

## Extends

- [`ImplementationError`](ImplementationError.md)

## Constructors

### new ReadOnlyError()

> **new ReadOnlyError**(`message`): [`ReadOnlyError`](ReadOnlyError.md)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `"This view is read-only"` |

#### Returns

[`ReadOnlyError`](ReadOnlyError.md)

#### Overrides

[`ImplementationError`](ImplementationError.md).[`constructor`](ImplementationError.md#constructors)

#### Source

[packages/matter.js/src/common/MatterError.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/MatterError.ts#L41)
