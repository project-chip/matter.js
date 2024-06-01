[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / [\<internal\>](../README.md) / AsyncConstruction

# Interface: AsyncConstruction\<T\>

The promise implemented by an [AsyncConstructable](AsyncConstructable.md).

## Extends

- `Promise`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Constructors

## Properties

### change

> `readonly` **change**: [`Observable`](../../../../util/export/interfaces/Observable.md)\<[[`Status`](../../../common/namespaces/Lifecycle/enumerations/Status.md), `T`], `void`\>

Notifications of state change.  Normally you just await construction but this offers more granular events.

#### Source

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:59

***

### error?

> `optional` `readonly` **error**: `Error`

If construction ends with an error, the error is saved here.

#### Source

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:51

***

### ready

> `readonly` **ready**: `boolean`

Becomes true when construction is finished.

#### Source

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:47

***

### status

> `readonly` **status**: [`Status`](../../../common/namespaces/Lifecycle/enumerations/Status.md)

Status of the constructed object.

#### Source

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:55

## Methods

### assert()

#### assert(description)

> **assert**(`description`?): `void`

Throws an error if construction is ongoing or incomplete.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `description`? | `string` |

##### Returns

`void`

##### Source

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:77

#### assert(description, dependency)

> **assert**\<`T`\>(`description`, `dependency`): `T`

Asserts construction is complete and that an object is defined.

##### Type parameters

| Type parameter |
| :------ |
| `T` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `description` | `string` |
| `dependency` | `undefined` \| `T` |

##### Returns

`T`

##### Source

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:81

***

### cancel()

> **cancel**(): `void`

AsyncConstruction may be cancellable.  If not this method does nothing.  Regardless you must wait for promise
resolution even if canceled.

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:73

***

### close()

> **close**(`destructor`): `this`

Invoke destruction logic then move to destroyed status.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `destructor` | () => [`MaybePromise`](../../../../util/export/README.md#maybepromiset) |

#### Returns

`this`

#### Source

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:68

***

### crashed()

> **crashed**(`cause`, `invokeDefaultHandler`?): `void`

Force "crashed" state with the specified error.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cause` | `any` |
| `invokeDefaultHandler`? | `boolean` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:94

***

### onCompletion()

> **onCompletion**(`actor`): `void`

Invoke a method after construction completes successfully or onsuccessfully.

Any error in this callback will crash construction or replace the crash cause.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `actor` | () => `void` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:112

***

### onError()

> **onError**(`actor`): `void`

Invoke a method after construction completes unsuccessfully.

Any error in this callback will replace the crash cause.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `actor` | (`error`) => [`MaybePromise`](../../../../util/export/README.md#maybepromiset)\<`void`\> |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:106

***

### onSuccess()

> **onSuccess**(`actor`): `void`

Invoke a method after construction completes successfully.

Any error in this callback will crash construction.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `actor` | () => [`MaybePromise`](../../../../util/export/README.md#maybepromiset)\<`void`\> |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:100

***

### setStatus()

> **setStatus**(`status`): `void`

Manually force a specific status.

This offers flexibility in component lifecycle management including resetting component to inactive state and
broadcasting lifecycle changes.

This method fails if initialization is ongoing; await completion first.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `status` | [`Status`](../../../common/namespaces/Lifecycle/enumerations/Status.md) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:90

***

### start()

> **start**(`initializer`?): `void`

If you omit the initializer parameter to [AsyncConstruction](../README.md#asyncconstruction) execution is deferred until you invoke this
method.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `initializer`? | () => [`MaybePromise`](../../../../util/export/README.md#maybepromiset) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:64

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:113
