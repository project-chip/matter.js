[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](../modules/common_export.md) / ReadOnlyError

# Class: ReadOnlyError

[common/export](../modules/common_export.md).ReadOnlyError

Thrown for write attempts against immutable data.

## Hierarchy

- [`ImplementationError`](common_export.ImplementationError.md)

  ↳ **`ReadOnlyError`**

## Table of contents

### Constructors

- [constructor](common_export.ReadOnlyError.md#constructor)

## Constructors

### constructor

• **new ReadOnlyError**(`message?`): [`ReadOnlyError`](common_export.ReadOnlyError.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `"This view is read-only"` |

#### Returns

[`ReadOnlyError`](common_export.ReadOnlyError.md)

#### Overrides

[ImplementationError](common_export.ImplementationError.md).[constructor](common_export.ImplementationError.md#constructor)

#### Defined in

[packages/matter.js/src/common/MatterError.ts:41](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/common/MatterError.ts#L41)
