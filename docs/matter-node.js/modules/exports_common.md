[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/common

# Module: exports/common

## Table of contents

### Classes

- [MatterError](../classes/exports_common.MatterError.md)

### Interfaces

- [Broadcaster](../interfaces/exports_common.Broadcaster.md)
- [Scanner](../interfaces/exports_common.Scanner.md)

### Type Aliases

- [MatterServer](exports_common.md#matterserver)

### Functions

- [tryCatch](exports_common.md#trycatch)
- [tryCatchAsync](exports_common.md#trycatchasync)

## Type Aliases

### MatterServer

Ƭ **MatterServer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ip` | `string` |
| `port` | `number` |

#### Defined in

packages/matter.js/dist/cjs/common/Scanner.d.ts:8

## Functions

### tryCatch

▸ **tryCatch**<`T`, `E`\>(`codeBlock`, `errorType`, `fallbackValueOrFunction`): `T`

Try to execute the code block and catch the error if it is of the given type.
If the error is of the given type, the fallback value or the result of the function is returned.
If the function returns undefined or the error type do not match, the error is normally thrown and not handled.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends `Error` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `codeBlock` | () => `T` | Code block to execute |
| `errorType` | [`ClassExtends`](util.md#classextends)<`E`\> | Errortype to catch and handle |
| `fallbackValueOrFunction` | `T` \| [`ErrorHandler`](index._internal_.md#errorhandler)<`T`, `E`\> | Fallback value or function to compute the fallback value |

#### Returns

`T`

#### Defined in

packages/matter.js/dist/cjs/common/TryCatchHandler.d.ts:17

___

### tryCatchAsync

▸ **tryCatchAsync**<`T`, `E`\>(`codeBlock`, `errorType`, `fallbackValueOrFunction`): `Promise`<`T`\>

Try to execute the async code block and catch the error if it is of the given type.
If the error is of the given type, the fallback value or the result of the function is returned.
If the function returns undefined or the error type do not match, the error is normally thrown and not handled.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends `Error` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `codeBlock` | () => `Promise`<`T`\> | Async code block to execute |
| `errorType` | [`ClassExtends`](util.md#classextends)<`E`\> | Errortype to catch and handle |
| `fallbackValueOrFunction` | `T` \| [`ErrorHandler`](index._internal_.md#errorhandler)<`T`, `E`\> | Fallback value or function to compute the fallback value |

#### Returns

`Promise`<`T`\>

#### Defined in

packages/matter.js/dist/cjs/common/TryCatchHandler.d.ts:27
