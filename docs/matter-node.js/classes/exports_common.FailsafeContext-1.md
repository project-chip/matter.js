[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / FailsafeContext

# Class: FailsafeContext

[exports/common](../modules/exports_common.md).FailsafeContext

A "timed operation" is a command or sequence of commands that operate with a failsafe timer that will abort the
operation if it does not complete within a specific window.

FailsafeContext maintains the failsafe timer and tracks information required to rollback state if the operation
aborts.

Timed operations are exclusive for a node.

## Hierarchy

- **`FailsafeContext`**

  ↳ [`CommissioningServerFailsafeContext`](exports_cluster.CommissioningServerFailsafeContext.md)

## Table of contents

### Constructors

- [constructor](exports_common.FailsafeContext-1.md#constructor)

### Properties

- [#private](exports_common.FailsafeContext-1.md##private)

### Accessors

- [associatedFabric](exports_common.FailsafeContext-1.md#associatedfabric)
- [commissioned](exports_common.FailsafeContext-1.md#commissioned)
- [construction](exports_common.FailsafeContext-1.md#construction)
- [csrSessionId](exports_common.FailsafeContext-1.md#csrsessionid)
- [fabricIndex](exports_common.FailsafeContext-1.md#fabricindex)
- [forUpdateNoc](exports_common.FailsafeContext-1.md#forupdatenoc)
- [hasRootCert](exports_common.FailsafeContext-1.md#hasrootcert)

### Methods

- [addFabric](exports_common.FailsafeContext-1.md#addfabric)
- [buildFabric](exports_common.FailsafeContext-1.md#buildfabric)
- [buildUpdatedFabric](exports_common.FailsafeContext-1.md#buildupdatedfabric)
- [close](exports_common.FailsafeContext-1.md#close)
- [completeCommission](exports_common.FailsafeContext-1.md#completecommission)
- [createCertificateSigningRequest](exports_common.FailsafeContext-1.md#createcertificatesigningrequest)
- [extend](exports_common.FailsafeContext-1.md#extend)
- [getFailSafeContext](exports_common.FailsafeContext-1.md#getfailsafecontext)
- [getNextFabricIndex](exports_common.FailsafeContext-1.md#getnextfabricindex)
- [removePaseSession](exports_common.FailsafeContext-1.md#removepasesession)
- [restoreBreadcrumb](exports_common.FailsafeContext-1.md#restorebreadcrumb)
- [restoreFabric](exports_common.FailsafeContext-1.md#restorefabric)
- [restoreNetworkState](exports_common.FailsafeContext-1.md#restorenetworkstate)
- [revokeFabric](exports_common.FailsafeContext-1.md#revokefabric)
- [rollback](exports_common.FailsafeContext-1.md#rollback)
- [setRootCert](exports_common.FailsafeContext-1.md#setrootcert)
- [storeEndpointState](exports_common.FailsafeContext-1.md#storeendpointstate)
- [updateFabric](exports_common.FailsafeContext-1.md#updatefabric)

## Constructors

### constructor

• **new FailsafeContext**(`options`): [`FailsafeContext`](exports_common.FailsafeContext-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Options`](../interfaces/exports_common.FailsafeContext.Options.md) |

#### Returns

[`FailsafeContext`](exports_common.FailsafeContext-1.md)

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:27

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:26

## Accessors

### associatedFabric

• `get` **associatedFabric**(): `undefined` \| [`Fabric`](exports_fabric.Fabric.md)

#### Returns

`undefined` \| [`Fabric`](exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:32

___

### commissioned

• `get` **commissioned**(): [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[], `void`\>

#### Returns

[`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[], `void`\>

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:31

___

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/exports_cluster._internal_.AsyncConstruction-1.md)\<[`FailsafeContext`](exports_common.FailsafeContext-1.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/exports_cluster._internal_.AsyncConstruction-1.md)\<[`FailsafeContext`](exports_common.FailsafeContext-1.md)\>

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:30

___

### csrSessionId

• `get` **csrSessionId**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:33

___

### fabricIndex

• `get` **fabricIndex**(): `undefined` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Returns

`undefined` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:29

___

### forUpdateNoc

• `get` **forUpdateNoc**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:34

___

### hasRootCert

• `get` **hasRootCert**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:35

## Methods

### addFabric

▸ **addFabric**(`fabric`): `Promise`\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`Promise`\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:39

___

### buildFabric

▸ **buildFabric**(`nocData`): `Promise`\<[`Fabric`](exports_fabric.Fabric.md)\>

Build a new Fabric object for a new fabric for the "AddNoc" case of the Operational Credentials cluster.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nocData` | `Object` |
| `nocData.adminVendorId` | [`VendorId`](../modules/exports_datatype.md#vendorid) |
| `nocData.caseAdminSubject` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `nocData.icacValue` | `undefined` \| `Uint8Array` |
| `nocData.ipkValue` | `Uint8Array` |
| `nocData.nocValue` | `Uint8Array` |

#### Returns

`Promise`\<[`Fabric`](exports_fabric.Fabric.md)\>

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:56

___

### buildUpdatedFabric

▸ **buildUpdatedFabric**(`nocValue`, `icacValue`): `Promise`\<[`Fabric`](exports_fabric.Fabric.md)\>

Build a new Fabric object based on an existing fabric for the "UpdateNoc" case of the Operational Credentials
cluster.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nocValue` | `Uint8Array` |
| `icacValue` | `undefined` \| `Uint8Array` |

#### Returns

`Promise`\<[`Fabric`](exports_fabric.Fabric.md)\>

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:54

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:47

___

### completeCommission

▸ **completeCommission**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:36

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

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:45

___

### extend

▸ **extend**(`fabric`, `expiryLengthSeconds`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | `undefined` \| [`Fabric`](exports_fabric.Fabric.md) |
| `expiryLengthSeconds` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:28

___

### getFailSafeContext

▸ **getFailSafeContext**(): [`FailsafeTimer`](exports_common.FailsafeTimer.md)

#### Returns

[`FailsafeTimer`](exports_common.FailsafeTimer.md)

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:37

___

### getNextFabricIndex

▸ **getNextFabricIndex**(): [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Returns

[`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:38

___

### removePaseSession

▸ **removePaseSession**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:46

___

### restoreBreadcrumb

▸ **restoreBreadcrumb**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:69

___

### restoreFabric

▸ **restoreFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:67

___

### restoreNetworkState

▸ **restoreNetworkState**(): `Promise`\<`void`\>

Restore Cluster data when the FailSafe context expired.

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:66

___

### revokeFabric

▸ **revokeFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:68

___

### rollback

▸ **rollback**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:63

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

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:49

___

### storeEndpointState

▸ **storeEndpointState**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:64

___

### updateFabric

▸ **updateFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:40
