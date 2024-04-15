[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / AsyncConstruction

# Interface: AsyncConstruction\<T\>

[behavior/cluster/export](../modules/behavior_cluster_export.md).[\<internal\>](../modules/behavior_cluster_export._internal_.md).AsyncConstruction

The promise implemented by an [AsyncConstructable](behavior_cluster_export._internal_.AsyncConstructable.md).

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Promise`\<`T`\>

  ↳ **`AsyncConstruction`**

## Table of contents

### Constructors

- [constructor](behavior_cluster_export._internal_.AsyncConstruction-1.md#constructor)

### Properties

- [change](behavior_cluster_export._internal_.AsyncConstruction-1.md#change)
- [error](behavior_cluster_export._internal_.AsyncConstruction-1.md#error)
- [ready](behavior_cluster_export._internal_.AsyncConstruction-1.md#ready)
- [status](behavior_cluster_export._internal_.AsyncConstruction-1.md#status)

### Methods

- [assert](behavior_cluster_export._internal_.AsyncConstruction-1.md#assert)
- [cancel](behavior_cluster_export._internal_.AsyncConstruction-1.md#cancel)
- [close](behavior_cluster_export._internal_.AsyncConstruction-1.md#close)
- [crashed](behavior_cluster_export._internal_.AsyncConstruction-1.md#crashed)
- [onCompletion](behavior_cluster_export._internal_.AsyncConstruction-1.md#oncompletion)
- [onError](behavior_cluster_export._internal_.AsyncConstruction-1.md#onerror)
- [onSuccess](behavior_cluster_export._internal_.AsyncConstruction-1.md#onsuccess)
- [setStatus](behavior_cluster_export._internal_.AsyncConstruction-1.md#setstatus)
- [start](behavior_cluster_export._internal_.AsyncConstruction-1.md#start)
- [toString](behavior_cluster_export._internal_.AsyncConstruction-1.md#tostring)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

Promise\<T\>.constructor

## Properties

### change

• `Readonly` **change**: [`Observable`](util_export.Observable.md)\<[status: Status, subject: T], `void`\>

Notifications of state change.  Normally you just await construction but this offers more granular events.

#### Defined in

[packages/matter.js/src/util/AsyncConstruction.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/AsyncConstruction.ts#L73)

___

### error

• `Optional` `Readonly` **error**: `Error`

If construction ends with an error, the error is saved here.

#### Defined in

[packages/matter.js/src/util/AsyncConstruction.ts:63](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/AsyncConstruction.ts#L63)

___

### ready

• `Readonly` **ready**: `boolean`

Becomes true when construction is finished.

#### Defined in

[packages/matter.js/src/util/AsyncConstruction.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/AsyncConstruction.ts#L58)

___

### status

• `Readonly` **status**: [`Status`](../enums/common_export.Lifecycle.Status.md)

Status of the constructed object.

#### Defined in

[packages/matter.js/src/util/AsyncConstruction.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/AsyncConstruction.ts#L68)

## Methods

### assert

▸ **assert**(`description?`): `void`

Throws an error if construction is ongoing or incomplete.

#### Parameters

| Name | Type |
| :------ | :------ |
| `description?` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/util/AsyncConstruction.ts:95](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/AsyncConstruction.ts#L95)

▸ **assert**\<`T`\>(`description`, `dependency`): `T`

Asserts construction is complete and that an object is defined.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `dependency` | `undefined` \| `T` |

#### Returns

`T`

#### Defined in

[packages/matter.js/src/util/AsyncConstruction.ts:100](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/AsyncConstruction.ts#L100)

___

### cancel

▸ **cancel**(): `void`

AsyncConstruction may be cancellable.  If not this method does nothing.  Regardless you must wait for promise
resolution even if canceled.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/util/AsyncConstruction.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/AsyncConstruction.ts#L90)

___

### close

▸ **close**(`destructor`): `this`

Invoke destruction logic then move to destroyed status.

#### Parameters

| Name | Type |
| :------ | :------ |
| `destructor` | () => [`MaybePromise`](../modules/util_export.md#maybepromise) |

#### Returns

`this`

#### Defined in

[packages/matter.js/src/util/AsyncConstruction.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/AsyncConstruction.ts#L84)

___

### crashed

▸ **crashed**(`cause`, `invokeDefaultHandler?`): `void`

Force "crashed" state with the specified error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cause` | `any` |
| `invokeDefaultHandler?` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/util/AsyncConstruction.ts:115](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/AsyncConstruction.ts#L115)

___

### onCompletion

▸ **onCompletion**(`actor`): `void`

Invoke a method after construction completes successfully or onsuccessfully.

Any error in this callback will crash construction or replace the crash cause.

#### Parameters

| Name | Type |
| :------ | :------ |
| `actor` | () => `void` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/util/AsyncConstruction.ts:136](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/AsyncConstruction.ts#L136)

___

### onError

▸ **onError**(`actor`): `void`

Invoke a method after construction completes unsuccessfully.

Any error in this callback will replace the crash cause.

#### Parameters

| Name | Type |
| :------ | :------ |
| `actor` | (`error`: `Error`) => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/util/AsyncConstruction.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/AsyncConstruction.ts#L129)

___

### onSuccess

▸ **onSuccess**(`actor`): `void`

Invoke a method after construction completes successfully.

Any error in this callback will crash construction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `actor` | () => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/util/AsyncConstruction.ts:122](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/AsyncConstruction.ts#L122)

___

### setStatus

▸ **setStatus**(`status`): `void`

Manually force a specific status.

This offers flexibility in component lifecycle management including resetting component to inactive state and
broadcasting lifecycle changes.

This method fails if initialization is ongoing; await completion first.

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`Status`](../enums/common_export.Lifecycle.Status.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/util/AsyncConstruction.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/AsyncConstruction.ts#L110)

___

### start

▸ **start**(`initializer?`): `void`

If you omit the initializer parameter to [AsyncConstruction](../modules/behavior_cluster_export._internal_.md#asyncconstruction) execution is deferred until you invoke this
method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initializer?` | () => [`MaybePromise`](../modules/util_export.md#maybepromise) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/util/AsyncConstruction.ts:79](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/AsyncConstruction.ts#L79)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/matter.js/src/util/AsyncConstruction.ts:138](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/AsyncConstruction.ts#L138)
