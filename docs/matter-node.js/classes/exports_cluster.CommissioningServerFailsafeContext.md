[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / CommissioningServerFailsafeContext

# Class: CommissioningServerFailsafeContext

[exports/cluster](../modules/exports_cluster.md).CommissioningServerFailsafeContext

[FailsafeContext](exports_common.FailsafeContext-1.md) implementation for [EndpointInterface](../interfaces/exports_cluster._internal_.EndpointInterface.md) API.

## Hierarchy

- [`FailsafeContext`](exports_common.FailsafeContext-1.md)

  ↳ **`CommissioningServerFailsafeContext`**

## Table of contents

### Constructors

- [constructor](exports_cluster.CommissioningServerFailsafeContext.md#constructor)

### Properties

- [#private](exports_cluster.CommissioningServerFailsafeContext.md##private)
- [#private](exports_cluster.CommissioningServerFailsafeContext.md##private-1)

### Accessors

- [associatedFabric](exports_cluster.CommissioningServerFailsafeContext.md#associatedfabric)
- [commissioned](exports_cluster.CommissioningServerFailsafeContext.md#commissioned)
- [construction](exports_cluster.CommissioningServerFailsafeContext.md#construction)
- [csrSessionId](exports_cluster.CommissioningServerFailsafeContext.md#csrsessionid)
- [fabricIndex](exports_cluster.CommissioningServerFailsafeContext.md#fabricindex)
- [forUpdateNoc](exports_cluster.CommissioningServerFailsafeContext.md#forupdatenoc)
- [hasRootCert](exports_cluster.CommissioningServerFailsafeContext.md#hasrootcert)

### Methods

- [addFabric](exports_cluster.CommissioningServerFailsafeContext.md#addfabric)
- [buildFabric](exports_cluster.CommissioningServerFailsafeContext.md#buildfabric)
- [buildUpdatedFabric](exports_cluster.CommissioningServerFailsafeContext.md#buildupdatedfabric)
- [close](exports_cluster.CommissioningServerFailsafeContext.md#close)
- [completeCommission](exports_cluster.CommissioningServerFailsafeContext.md#completecommission)
- [createCertificateSigningRequest](exports_cluster.CommissioningServerFailsafeContext.md#createcertificatesigningrequest)
- [extend](exports_cluster.CommissioningServerFailsafeContext.md#extend)
- [getFailSafeContext](exports_cluster.CommissioningServerFailsafeContext.md#getfailsafecontext)
- [getNextFabricIndex](exports_cluster.CommissioningServerFailsafeContext.md#getnextfabricindex)
- [removePaseSession](exports_cluster.CommissioningServerFailsafeContext.md#removepasesession)
- [restoreBreadcrumb](exports_cluster.CommissioningServerFailsafeContext.md#restorebreadcrumb)
- [restoreFabric](exports_cluster.CommissioningServerFailsafeContext.md#restorefabric)
- [restoreNetworkState](exports_cluster.CommissioningServerFailsafeContext.md#restorenetworkstate)
- [revokeFabric](exports_cluster.CommissioningServerFailsafeContext.md#revokefabric)
- [rollback](exports_cluster.CommissioningServerFailsafeContext.md#rollback)
- [setRootCert](exports_cluster.CommissioningServerFailsafeContext.md#setrootcert)
- [storeEndpointState](exports_cluster.CommissioningServerFailsafeContext.md#storeendpointstate)
- [updateFabric](exports_cluster.CommissioningServerFailsafeContext.md#updatefabric)
- [create](exports_cluster.CommissioningServerFailsafeContext.md#create)

## Constructors

### constructor

• **new CommissioningServerFailsafeContext**(`rootEndpoint`, `options`): [`CommissioningServerFailsafeContext`](exports_cluster.CommissioningServerFailsafeContext.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootEndpoint` | [`EndpointInterface`](../interfaces/exports_cluster._internal_.EndpointInterface.md) |
| `options` | [`Options`](../interfaces/exports_common.FailsafeContext.Options.md) |

#### Returns

[`CommissioningServerFailsafeContext`](exports_cluster.CommissioningServerFailsafeContext.md)

#### Overrides

[FailsafeContext](exports_common.FailsafeContext-1.md).[constructor](exports_common.FailsafeContext-1.md#constructor)

#### Defined in

packages/matter.js/dist/esm/cluster/server/CommissioningServerFailsafeContext.d.ts:14

## Properties

### #private

• `Private` **#private**: `any`

#### Inherited from

[FailsafeContext](exports_common.FailsafeContext-1.md).[#private](exports_common.FailsafeContext-1.md##private)

#### Defined in

packages/matter.js/dist/esm/cluster/server/CommissioningServerFailsafeContext.d.ts:13

___

### #private

• `Private` **#private**: `any`

#### Inherited from

FailsafeContext.#private

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:26

## Accessors

### associatedFabric

• `get` **associatedFabric**(): `undefined` \| [`Fabric`](exports_fabric.Fabric.md)

#### Returns

`undefined` \| [`Fabric`](exports_fabric.Fabric.md)

#### Inherited from

FailsafeContext.associatedFabric

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:32

___

### commissioned

• `get` **commissioned**(): [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[], `void`\>

#### Returns

[`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[], `void`\>

#### Inherited from

FailsafeContext.commissioned

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:31

___

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/exports_cluster._internal_.AsyncConstruction-1.md)\<[`FailsafeContext`](exports_common.FailsafeContext-1.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/exports_cluster._internal_.AsyncConstruction-1.md)\<[`FailsafeContext`](exports_common.FailsafeContext-1.md)\>

#### Inherited from

FailsafeContext.construction

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:30

___

### csrSessionId

• `get` **csrSessionId**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

FailsafeContext.csrSessionId

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:33

___

### fabricIndex

• `get` **fabricIndex**(): `undefined` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Returns

`undefined` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

FailsafeContext.fabricIndex

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:29

___

### forUpdateNoc

• `get` **forUpdateNoc**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Inherited from

FailsafeContext.forUpdateNoc

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:34

___

### hasRootCert

• `get` **hasRootCert**(): `boolean`

#### Returns

`boolean`

#### Inherited from

FailsafeContext.hasRootCert

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

#### Inherited from

[FailsafeContext](exports_common.FailsafeContext-1.md).[addFabric](exports_common.FailsafeContext-1.md#addfabric)

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

#### Inherited from

[FailsafeContext](exports_common.FailsafeContext-1.md).[buildFabric](exports_common.FailsafeContext-1.md#buildfabric)

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

#### Inherited from

[FailsafeContext](exports_common.FailsafeContext-1.md).[buildUpdatedFabric](exports_common.FailsafeContext-1.md#buildupdatedfabric)

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:54

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FailsafeContext](exports_common.FailsafeContext-1.md).[close](exports_common.FailsafeContext-1.md#close)

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:47

___

### completeCommission

▸ **completeCommission**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FailsafeContext](exports_common.FailsafeContext-1.md).[completeCommission](exports_common.FailsafeContext-1.md#completecommission)

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

#### Inherited from

[FailsafeContext](exports_common.FailsafeContext-1.md).[createCertificateSigningRequest](exports_common.FailsafeContext-1.md#createcertificatesigningrequest)

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

#### Inherited from

[FailsafeContext](exports_common.FailsafeContext-1.md).[extend](exports_common.FailsafeContext-1.md#extend)

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:28

___

### getFailSafeContext

▸ **getFailSafeContext**(): [`FailsafeTimer`](exports_common.FailsafeTimer.md)

#### Returns

[`FailsafeTimer`](exports_common.FailsafeTimer.md)

#### Inherited from

[FailsafeContext](exports_common.FailsafeContext-1.md).[getFailSafeContext](exports_common.FailsafeContext-1.md#getfailsafecontext)

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:37

___

### getNextFabricIndex

▸ **getNextFabricIndex**(): [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Returns

[`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

[FailsafeContext](exports_common.FailsafeContext-1.md).[getNextFabricIndex](exports_common.FailsafeContext-1.md#getnextfabricindex)

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:38

___

### removePaseSession

▸ **removePaseSession**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FailsafeContext](exports_common.FailsafeContext-1.md).[removePaseSession](exports_common.FailsafeContext-1.md#removepasesession)

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:46

___

### restoreBreadcrumb

▸ **restoreBreadcrumb**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[FailsafeContext](exports_common.FailsafeContext-1.md).[restoreBreadcrumb](exports_common.FailsafeContext-1.md#restorebreadcrumb)

#### Defined in

packages/matter.js/dist/esm/cluster/server/CommissioningServerFailsafeContext.d.ts:20

___

### restoreFabric

▸ **restoreFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

[FailsafeContext](exports_common.FailsafeContext-1.md).[restoreFabric](exports_common.FailsafeContext-1.md#restorefabric)

#### Defined in

packages/matter.js/dist/esm/cluster/server/CommissioningServerFailsafeContext.d.ts:17

___

### restoreNetworkState

▸ **restoreNetworkState**(): `Promise`\<`void`\>

Restore Cluster data when the FailSafe context expired.

#### Returns

`Promise`\<`void`\>

#### Overrides

[FailsafeContext](exports_common.FailsafeContext-1.md).[restoreNetworkState](exports_common.FailsafeContext-1.md#restorenetworkstate)

#### Defined in

packages/matter.js/dist/esm/cluster/server/CommissioningServerFailsafeContext.d.ts:18

___

### revokeFabric

▸ **revokeFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

[FailsafeContext](exports_common.FailsafeContext-1.md).[revokeFabric](exports_common.FailsafeContext-1.md#revokefabric)

#### Defined in

packages/matter.js/dist/esm/cluster/server/CommissioningServerFailsafeContext.d.ts:19

___

### rollback

▸ **rollback**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FailsafeContext](exports_common.FailsafeContext-1.md).[rollback](exports_common.FailsafeContext-1.md#rollback)

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

#### Inherited from

[FailsafeContext](exports_common.FailsafeContext-1.md).[setRootCert](exports_common.FailsafeContext-1.md#setrootcert)

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:49

___

### storeEndpointState

▸ **storeEndpointState**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[FailsafeContext](exports_common.FailsafeContext-1.md).[storeEndpointState](exports_common.FailsafeContext-1.md#storeendpointstate)

#### Defined in

packages/matter.js/dist/esm/cluster/server/CommissioningServerFailsafeContext.d.ts:16

___

### updateFabric

▸ **updateFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FailsafeContext](exports_common.FailsafeContext-1.md).[updateFabric](exports_common.FailsafeContext-1.md#updatefabric)

#### Defined in

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:40

___

### create

▸ **create**(`rootEndpoint`, `options`): `Promise`\<[`CommissioningServerFailsafeContext`](exports_cluster.CommissioningServerFailsafeContext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootEndpoint` | [`EndpointInterface`](../interfaces/exports_cluster._internal_.EndpointInterface.md) |
| `options` | [`Options`](../interfaces/exports_common.FailsafeContext.Options.md) |

#### Returns

`Promise`\<[`CommissioningServerFailsafeContext`](exports_cluster.CommissioningServerFailsafeContext.md)\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/CommissioningServerFailsafeContext.d.ts:15
