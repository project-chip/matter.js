[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / FailsafeContext

# Class: FailsafeContext

[\<internal\>](../modules/internal_.md).FailsafeContext

A "timed operation" is a command or sequence of commands that operate with a failsafe timer that will abort the
operation if it does not complete within a specific window.

FailsafeContext maintains the failsafe timer and tracks information required to rollback state if the operation
aborts.

Timed operations are exclusive for a node.

## Table of contents

### Constructors

- [constructor](internal_.FailsafeContext-1.md#constructor)

### Properties

- [#private](internal_.FailsafeContext-1.md##private)

### Accessors

- [associatedFabric](internal_.FailsafeContext-1.md#associatedfabric)
- [commissioned](internal_.FailsafeContext-1.md#commissioned)
- [construction](internal_.FailsafeContext-1.md#construction)
- [csrSessionId](internal_.FailsafeContext-1.md#csrsessionid)
- [fabricIndex](internal_.FailsafeContext-1.md#fabricindex)
- [forUpdateNoc](internal_.FailsafeContext-1.md#forupdatenoc)
- [hasRootCert](internal_.FailsafeContext-1.md#hasrootcert)

### Methods

- [addFabric](internal_.FailsafeContext-1.md#addfabric)
- [buildFabric](internal_.FailsafeContext-1.md#buildfabric)
- [buildUpdatedFabric](internal_.FailsafeContext-1.md#buildupdatedfabric)
- [close](internal_.FailsafeContext-1.md#close)
- [completeCommission](internal_.FailsafeContext-1.md#completecommission)
- [createCertificateSigningRequest](internal_.FailsafeContext-1.md#createcertificatesigningrequest)
- [extend](internal_.FailsafeContext-1.md#extend)
- [getFailSafeContext](internal_.FailsafeContext-1.md#getfailsafecontext)
- [getNextFabricIndex](internal_.FailsafeContext-1.md#getnextfabricindex)
- [removePaseSession](internal_.FailsafeContext-1.md#removepasesession)
- [restoreBreadcrumb](internal_.FailsafeContext-1.md#restorebreadcrumb)
- [restoreFabric](internal_.FailsafeContext-1.md#restorefabric)
- [restoreNetworkState](internal_.FailsafeContext-1.md#restorenetworkstate)
- [revokeFabric](internal_.FailsafeContext-1.md#revokefabric)
- [rollback](internal_.FailsafeContext-1.md#rollback)
- [setRootCert](internal_.FailsafeContext-1.md#setrootcert)
- [storeEndpointState](internal_.FailsafeContext-1.md#storeendpointstate)
- [updateFabric](internal_.FailsafeContext-1.md#updatefabric)

## Constructors

### constructor

• **new FailsafeContext**(`options`): [`FailsafeContext`](internal_.FailsafeContext-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Options`](../interfaces/internal_.FailsafeContext.Options.md) |

#### Returns

[`FailsafeContext`](internal_.FailsafeContext-1.md)

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:27

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:26

## Accessors

### associatedFabric

• `get` **associatedFabric**(): `undefined` \| [`Fabric`](internal_.Fabric.md)

#### Returns

`undefined` \| [`Fabric`](internal_.Fabric.md)

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:32

___

### commissioned

• `get` **commissioned**(): [`AsyncObservable`](../interfaces/internal_.AsyncObservable.md)\<[], `void`\>

#### Returns

[`AsyncObservable`](../interfaces/internal_.AsyncObservable.md)\<[], `void`\>

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:31

___

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/internal_.AsyncConstruction-1.md)\<[`FailsafeContext`](internal_.FailsafeContext-1.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/internal_.AsyncConstruction-1.md)\<[`FailsafeContext`](internal_.FailsafeContext-1.md)\>

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:30

___

### csrSessionId

• `get` **csrSessionId**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:33

___

### fabricIndex

• `get` **fabricIndex**(): `undefined` \| [`FabricIndex`](../modules/internal_.md#fabricindex)

#### Returns

`undefined` \| [`FabricIndex`](../modules/internal_.md#fabricindex)

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:29

___

### forUpdateNoc

• `get` **forUpdateNoc**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:34

___

### hasRootCert

• `get` **hasRootCert**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:35

## Methods

### addFabric

▸ **addFabric**(`fabric`): `Promise`\<[`FabricIndex`](../modules/internal_.md#fabricindex)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |

#### Returns

`Promise`\<[`FabricIndex`](../modules/internal_.md#fabricindex)\>

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:39

___

### buildFabric

▸ **buildFabric**(`nocData`): `Promise`\<[`Fabric`](internal_.Fabric.md)\>

Build a new Fabric object for a new fabric for the "AddNoc" case of the Operational Credentials cluster.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nocData` | `Object` |
| `nocData.adminVendorId` | [`VendorId`](../modules/internal_.md#vendorid) |
| `nocData.caseAdminSubject` | [`NodeId`](../modules/internal_.md#nodeid) |
| `nocData.icacValue` | `undefined` \| `Uint8Array` |
| `nocData.ipkValue` | `Uint8Array` |
| `nocData.nocValue` | `Uint8Array` |

#### Returns

`Promise`\<[`Fabric`](internal_.Fabric.md)\>

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:56

___

### buildUpdatedFabric

▸ **buildUpdatedFabric**(`nocValue`, `icacValue`): `Promise`\<[`Fabric`](internal_.Fabric.md)\>

Build a new Fabric object based on an existing fabric for the "UpdateNoc" case of the Operational Credentials
cluster.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nocValue` | `Uint8Array` |
| `icacValue` | `undefined` \| `Uint8Array` |

#### Returns

`Promise`\<[`Fabric`](internal_.Fabric.md)\>

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:54

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:47

___

### completeCommission

▸ **completeCommission**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:36

___

### createCertificateSigningRequest

▸ **createCertificateSigningRequest**(`isForUpdateNoc`, `sessionId`): `Uint8Array`

Handles a CSR from OperationalCredentials cluster and stores additional internal information for further
validity checks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `isForUpdateNoc` | `boolean` |
| `sessionId` | `number` |

#### Returns

`Uint8Array`

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:45

___

### extend

▸ **extend**(`fabric`, `expiryLengthSeconds`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | `undefined` \| [`Fabric`](internal_.Fabric.md) |
| `expiryLengthSeconds` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:28

___

### getFailSafeContext

▸ **getFailSafeContext**(): [`FailsafeTimer`](internal_.FailsafeTimer.md)

#### Returns

[`FailsafeTimer`](internal_.FailsafeTimer.md)

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:37

___

### getNextFabricIndex

▸ **getNextFabricIndex**(): [`FabricIndex`](../modules/internal_.md#fabricindex)

#### Returns

[`FabricIndex`](../modules/internal_.md#fabricindex)

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:38

___

### removePaseSession

▸ **removePaseSession**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:46

___

### restoreBreadcrumb

▸ **restoreBreadcrumb**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:69

___

### restoreFabric

▸ **restoreFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:67

___

### restoreNetworkState

▸ **restoreNetworkState**(): `Promise`\<`void`\>

Restore Cluster data when the FailSafe context expired.

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:66

___

### revokeFabric

▸ **revokeFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:68

___

### rollback

▸ **rollback**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:63

___

### setRootCert

▸ **setRootCert**(`rootCert`): `void`

Handles adding a trusted root certificate from Operational Credentials cluster.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootCert` | `Uint8Array` |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:49

___

### storeEndpointState

▸ **storeEndpointState**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:64

___

### updateFabric

▸ **updateFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/common/FailsafeContext.d.ts:40
