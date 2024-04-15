[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / PromiseTimeoutError

# Class: PromiseTimeoutError

[util/export](../modules/util_export.md).PromiseTimeoutError

Thrown when a timed promise times out.

## Hierarchy

- [`MatterError`](common_export.MatterError.md)

  ↳ **`PromiseTimeoutError`**

## Table of contents

### Constructors

- [constructor](util_export.PromiseTimeoutError.md#constructor)

## Constructors

### constructor

• **new PromiseTimeoutError**(`message?`): [`PromiseTimeoutError`](util_export.PromiseTimeoutError.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `"Operation timed out"` |

#### Returns

[`PromiseTimeoutError`](util_export.PromiseTimeoutError.md)

#### Overrides

[MatterError](common_export.MatterError.md).[constructor](common_export.MatterError.md#constructor)

#### Defined in

[packages/matter.js/src/util/Promises.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Promises.ts#L69)
