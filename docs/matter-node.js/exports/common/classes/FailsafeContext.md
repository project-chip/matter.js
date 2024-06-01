[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/common](../README.md) / FailsafeContext

# Class: `abstract` FailsafeContext

A "timed operation" is a command or sequence of commands that operate with a failsafe timer that will abort the
operation if it does not complete within a specific window.

FailsafeContext maintains the failsafe timer and tracks information required to rollback state if the operation
aborts.

Timed operations are exclusive for a node.

## Extended by

- [`CommissioningServerFailsafeContext`](../../cluster/classes/CommissioningServerFailsafeContext.md)

## Constructors

### new FailsafeContext()

> **new FailsafeContext**(`options`): [`FailsafeContext`](FailsafeContext.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`Options`](../namespaces/FailsafeContext/interfaces/Options.md) |

#### Returns

[`FailsafeContext`](FailsafeContext.md)

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:30

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:29

## Accessors

### associatedFabric

> `get` **associatedFabric**(): `undefined` \| [`Fabric`](../../fabric/classes/Fabric.md)

#### Returns

`undefined` \| [`Fabric`](../../fabric/classes/Fabric.md)

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:35

***

### commissioned

> `get` **commissioned**(): [`AsyncObservable`](../../../util/export/interfaces/AsyncObservable.md)\<[], `void`\>

#### Returns

[`AsyncObservable`](../../../util/export/interfaces/AsyncObservable.md)\<[], `void`\>

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:34

***

### construction

> `get` **construction**(): [`AsyncConstruction`](../../cluster/-internal-/interfaces/AsyncConstruction.md)\<[`FailsafeContext`](FailsafeContext.md)\>

#### Returns

[`AsyncConstruction`](../../cluster/-internal-/interfaces/AsyncConstruction.md)\<[`FailsafeContext`](FailsafeContext.md)\>

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:33

***

### csrSessionId

> `get` **csrSessionId**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:36

***

### fabricIndex

> `get` **fabricIndex**(): `undefined` \| [`FabricIndex`](../../datatype/README.md#fabricindex)

#### Returns

`undefined` \| [`FabricIndex`](../../datatype/README.md#fabricindex)

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:32

***

### forUpdateNoc

> `get` **forUpdateNoc**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:37

***

### hasRootCert

> `get` **hasRootCert**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:38

## Methods

### addFabric()

> **addFabric**(`fabric`): `Promise`\<[`FabricIndex`](../../datatype/README.md#fabricindex)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |

#### Returns

`Promise`\<[`FabricIndex`](../../datatype/README.md#fabricindex)\>

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:42

***

### buildFabric()

> **buildFabric**(`nocData`): `Promise`\<[`Fabric`](../../fabric/classes/Fabric.md)\>

Build a new Fabric object for a new fabric for the "AddNoc" case of the Operational Credentials cluster.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nocData` | `object` |
| `nocData.adminVendorId` | [`VendorId`](../../datatype/README.md#vendorid) |
| `nocData.caseAdminSubject` | [`NodeId`](../../datatype/README.md#nodeid) |
| `nocData.icacValue` | `undefined` \| `Uint8Array` |
| `nocData.ipkValue` | `Uint8Array` |
| `nocData.nocValue` | `Uint8Array` |

#### Returns

`Promise`\<[`Fabric`](../../fabric/classes/Fabric.md)\>

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:59

***

### buildUpdatedFabric()

> **buildUpdatedFabric**(`nocValue`, `icacValue`): `Promise`\<[`Fabric`](../../fabric/classes/Fabric.md)\>

Build a new Fabric object based on an existing fabric for the "UpdateNoc" case of the Operational Credentials
cluster.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nocValue` | `Uint8Array` |
| `icacValue` | `undefined` \| `Uint8Array` |

#### Returns

`Promise`\<[`Fabric`](../../fabric/classes/Fabric.md)\>

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:57

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:50

***

### completeCommission()

> **completeCommission**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:39

***

### createCertificateSigningRequest()

> **createCertificateSigningRequest**(`isForUpdateNoc`, `sessionId`): `Uint8Array`

Handles a CSR from OperationalCredentials cluster and stores additional internal information for further
validity checks.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `isForUpdateNoc` | `boolean` |
| `sessionId` | `number` |

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:48

***

### extend()

> **extend**(`fabric`, `expiryLengthSeconds`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | `undefined` \| [`Fabric`](../../fabric/classes/Fabric.md) |
| `expiryLengthSeconds` | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:31

***

### getFailSafeContext()

> **getFailSafeContext**(): [`FailsafeTimer`](FailsafeTimer.md)

#### Returns

[`FailsafeTimer`](FailsafeTimer.md)

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:40

***

### getNextFabricIndex()

> **getNextFabricIndex**(): [`FabricIndex`](../../datatype/README.md#fabricindex)

#### Returns

[`FabricIndex`](../../datatype/README.md#fabricindex)

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:41

***

### removePaseSession()

> **removePaseSession**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:49

***

### restoreBreadcrumb()

> `abstract` **restoreBreadcrumb**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:72

***

### restoreFabric()

> **restoreFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:70

***

### restoreNetworkState()

> `abstract` **restoreNetworkState**(): `Promise`\<`void`\>

Restore Cluster data when the FailSafe context expired.

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:69

***

### revokeFabric()

> `abstract` **revokeFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:71

***

### rollback()

> `protected` **rollback**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:66

***

### setRootCert()

> **setRootCert**(`rootCert`): `void`

Handles adding a trusted root certificate from Operational Credentials cluster.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rootCert` | `Uint8Array` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:52

***

### storeEndpointState()

> `abstract` **storeEndpointState**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:67

***

### updateFabric()

> **updateFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:43
