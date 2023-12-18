[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / FailSafeManager

# Class: FailSafeManager

[exports/common](../modules/exports_common.md).FailSafeManager

Class to Handle one FailSafe context. This is mainly used when adding (Commissioning) or updating new Fabrics.

## Table of contents

### Constructors

- [constructor](exports_common.FailSafeManager.md#constructor)

### Properties

- [associatedFabric](exports_common.FailSafeManager.md#associatedfabric)
- [csrSessionId](exports_common.FailSafeManager.md#csrsessionid)
- [device](exports_common.FailSafeManager.md#device)
- [expiryCallback](exports_common.FailSafeManager.md#expirycallback)
- [fabricBuilder](exports_common.FailSafeManager.md#fabricbuilder)
- [failSafeTimer](exports_common.FailSafeManager.md#failsafetimer)
- [forUpdateNoc](exports_common.FailSafeManager.md#forupdatenoc)
- [maxCumulativeFailsafeTimer](exports_common.FailSafeManager.md#maxcumulativefailsafetimer)
- [rootEndpoint](exports_common.FailSafeManager.md#rootendpoint)
- [storeEndpointState](exports_common.FailSafeManager.md#storeendpointstate)
- [storedNetworkClusterState](exports_common.FailSafeManager.md#storednetworkclusterstate)

### Accessors

- [fabricIndex](exports_common.FailSafeManager.md#fabricindex)

### Methods

- [buildFabric](exports_common.FailSafeManager.md#buildfabric)
- [buildUpdatedFabric](exports_common.FailSafeManager.md#buildupdatedfabric)
- [complete](exports_common.FailSafeManager.md#complete)
- [createCertificateSigningRequest](exports_common.FailSafeManager.md#createcertificatesigningrequest)
- [expire](exports_common.FailSafeManager.md#expire)
- [reArm](exports_common.FailSafeManager.md#rearm)
- [restoreEndpointState](exports_common.FailSafeManager.md#restoreendpointstate)
- [setRootCert](exports_common.FailSafeManager.md#setrootcert)

## Constructors

### constructor

• **new FailSafeManager**(`device`, `associatedFabric`, `expiryLengthSeconds`, `maxCumulativeFailsafeSeconds`, `expiryCallback`, `rootEndpoint`): [`FailSafeManager`](exports_common.FailSafeManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | [`MatterDevice`](export._internal_.MatterDevice.md) |
| `associatedFabric` | `undefined` \| [`Fabric`](exports_fabric.Fabric.md) |
| `expiryLengthSeconds` | `number` |
| `maxCumulativeFailsafeSeconds` | `number` |
| `expiryCallback` | () => `Promise`\<`void`\> |
| `rootEndpoint` | [`Endpoint`](exports_device.Endpoint.md) |

#### Returns

[`FailSafeManager`](exports_common.FailSafeManager.md)

#### Defined in

packages/matter.js/dist/esm/common/FailSafeManager.d.ts:23

## Properties

### associatedFabric

• **associatedFabric**: `undefined` \| [`Fabric`](exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/esm/common/FailSafeManager.d.ts:14

___

### csrSessionId

• **csrSessionId**: `undefined` \| `number`

#### Defined in

packages/matter.js/dist/esm/common/FailSafeManager.d.ts:21

___

### device

• `Private` `Readonly` **device**: `any`

#### Defined in

packages/matter.js/dist/esm/common/FailSafeManager.d.ts:13

___

### expiryCallback

• `Private` `Readonly` **expiryCallback**: `any`

#### Defined in

packages/matter.js/dist/esm/common/FailSafeManager.d.ts:15

___

### fabricBuilder

• `Readonly` **fabricBuilder**: [`FabricBuilder`](exports_fabric.FabricBuilder.md)

#### Defined in

packages/matter.js/dist/esm/common/FailSafeManager.d.ts:17

___

### failSafeTimer

• **failSafeTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

packages/matter.js/dist/esm/common/FailSafeManager.d.ts:18

___

### forUpdateNoc

• **forUpdateNoc**: `undefined` \| `boolean`

#### Defined in

packages/matter.js/dist/esm/common/FailSafeManager.d.ts:22

___

### maxCumulativeFailsafeTimer

• `Private` **maxCumulativeFailsafeTimer**: `any`

#### Defined in

packages/matter.js/dist/esm/common/FailSafeManager.d.ts:19

___

### rootEndpoint

• `Readonly` **rootEndpoint**: [`Endpoint`](exports_device.Endpoint.md)

#### Defined in

packages/matter.js/dist/esm/common/FailSafeManager.d.ts:16

___

### storeEndpointState

• `Private` **storeEndpointState**: `any`

Store required CLuster data when opening the FailSafe context to allow to restore them on expiry.

#### Defined in

packages/matter.js/dist/esm/common/FailSafeManager.d.ts:25

___

### storedNetworkClusterState

• `Private` **storedNetworkClusterState**: `any`

#### Defined in

packages/matter.js/dist/esm/common/FailSafeManager.d.ts:20

## Accessors

### fabricIndex

• `get` **fabricIndex**(): `undefined` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Returns

`undefined` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Defined in

packages/matter.js/dist/esm/common/FailSafeManager.d.ts:28

## Methods

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

packages/matter.js/dist/esm/common/FailSafeManager.d.ts:48

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

packages/matter.js/dist/esm/common/FailSafeManager.d.ts:46

___

### complete

▸ **complete**(): `void`

Complete the FailSafe context. This is called when the commissioning is completed.

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/common/FailSafeManager.d.ts:34

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

packages/matter.js/dist/esm/common/FailSafeManager.d.ts:39

___

### expire

▸ **expire**(): `Promise`\<`void`\>

Expire the FailSafe context. This is called by the timer and can also be called manually if needed.

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/FailSafeManager.d.ts:32

___

### reArm

▸ **reArm**(`associatedFabric`, `expiryLengthSeconds`): `Promise`\<`void`\>

Handle "Re-Arming" an existing FailSafe context to extend the timer, expire or fail if not allowed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `associatedFabric` | `undefined` \| [`Fabric`](exports_fabric.Fabric.md) |
| `expiryLengthSeconds` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/FailSafeManager.d.ts:30

___

### restoreEndpointState

▸ **restoreEndpointState**(`endpoint?`): `void`

Restore Cluster data when the FailSafe context expired.

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint?` | [`Endpoint`](exports_device.Endpoint.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/common/FailSafeManager.d.ts:27

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

packages/matter.js/dist/esm/common/FailSafeManager.d.ts:41
