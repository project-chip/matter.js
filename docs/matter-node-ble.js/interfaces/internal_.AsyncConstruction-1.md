[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / AsyncConstruction

# Interface: AsyncConstruction\<T\>

[\<internal\>](../modules/internal_.md).AsyncConstruction

The promise implemented by an [AsyncConstructable](internal_.AsyncConstructable.md).

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Promise`\<`T`\>

  ↳ **`AsyncConstruction`**

## Table of contents

### Constructors

- [constructor](internal_.AsyncConstruction-1.md#constructor)

### Properties

- [change](internal_.AsyncConstruction-1.md#change)
- [error](internal_.AsyncConstruction-1.md#error)
- [ready](internal_.AsyncConstruction-1.md#ready)
- [status](internal_.AsyncConstruction-1.md#status)

### Methods

- [assert](internal_.AsyncConstruction-1.md#assert)
- [cancel](internal_.AsyncConstruction-1.md#cancel)
- [close](internal_.AsyncConstruction-1.md#close)
- [crashed](internal_.AsyncConstruction-1.md#crashed)
- [onCompletion](internal_.AsyncConstruction-1.md#oncompletion)
- [onError](internal_.AsyncConstruction-1.md#onerror)
- [onSuccess](internal_.AsyncConstruction-1.md#onsuccess)
- [setStatus](internal_.AsyncConstruction-1.md#setstatus)
- [start](internal_.AsyncConstruction-1.md#start)
- [toString](internal_.AsyncConstruction-1.md#tostring)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

Promise\<T\>.constructor

## Properties

### change

• `Readonly` **change**: [`Observable`](internal_.Observable.md)\<[status: Status, subject: T], `void`\>

Notifications of state change.  Normally you just await construction but this offers more granular events.

#### Defined in

matter.js/dist/esm/util/AsyncConstruction.d.ts:59

___

### error

• `Optional` `Readonly` **error**: `Error`

If construction ends with an error, the error is saved here.

#### Defined in

matter.js/dist/esm/util/AsyncConstruction.d.ts:51

___

### ready

• `Readonly` **ready**: `boolean`

Becomes true when construction is finished.

#### Defined in

matter.js/dist/esm/util/AsyncConstruction.d.ts:47

___

### status

• `Readonly` **status**: [`Status`](../enums/internal_.Status.md)

Status of the constructed object.

#### Defined in

matter.js/dist/esm/util/AsyncConstruction.d.ts:55

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

matter.js/dist/esm/util/AsyncConstruction.d.ts:77

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

matter.js/dist/esm/util/AsyncConstruction.d.ts:81

___

### cancel

▸ **cancel**(): `void`

AsyncConstruction may be cancellable.  If not this method does nothing.  Regardless you must wait for promise
resolution even if canceled.

#### Returns

`void`

#### Defined in

matter.js/dist/esm/util/AsyncConstruction.d.ts:73

___

### close

▸ **close**(`destructor`): `this`

Invoke destruction logic then move to destroyed status.

#### Parameters

| Name | Type |
| :------ | :------ |
| `destructor` | () => [`MaybePromise`](../modules/internal_.md#maybepromise) |

#### Returns

`this`

#### Defined in

matter.js/dist/esm/util/AsyncConstruction.d.ts:68

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

matter.js/dist/esm/util/AsyncConstruction.d.ts:94

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

matter.js/dist/esm/util/AsyncConstruction.d.ts:112

___

### onError

▸ **onError**(`actor`): `void`

Invoke a method after construction completes unsuccessfully.

Any error in this callback will replace the crash cause.

#### Parameters

| Name | Type |
| :------ | :------ |
| `actor` | (`error`: `Error`) => [`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/util/AsyncConstruction.d.ts:106

___

### onSuccess

▸ **onSuccess**(`actor`): `void`

Invoke a method after construction completes successfully.

Any error in this callback will crash construction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `actor` | () => [`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/util/AsyncConstruction.d.ts:100

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
| `status` | [`Status`](../enums/internal_.Status.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/util/AsyncConstruction.d.ts:90

___

### start

▸ **start**(`initializer?`): `void`

If you omit the initializer parameter to [AsyncConstruction](../modules/internal_.md#asyncconstruction) execution is deferred until you invoke this
method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initializer?` | () => [`MaybePromise`](../modules/internal_.md#maybepromise) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/util/AsyncConstruction.d.ts:64

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

matter.js/dist/esm/util/AsyncConstruction.d.ts:113
