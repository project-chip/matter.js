[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / common

# Module: common

## Table of contents

### Classes

- [MatterError](../classes/common.MatterError.md)

### Interfaces

- [Broadcaster](../interfaces/common.Broadcaster.md)
- [Scanner](../interfaces/common.Scanner.md)

### Type Aliases

- [MatterServer](common.md#matterserver)

### Functions

- [tryCatch](common.md#trycatch)
- [tryCatchAsync](common.md#trycatchasync)

## Type Aliases

### MatterServer

Ƭ **MatterServer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ip` | `string` |
| `port` | `number` |

#### Defined in

[packages/matter.js/src/common/Scanner.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/common/Scanner.ts#L10)

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

[packages/matter.js/src/common/TryCatchHandler.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/common/TryCatchHandler.ts#L19)

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

[packages/matter.js/src/common/TryCatchHandler.ts:43](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/common/TryCatchHandler.ts#L43)
