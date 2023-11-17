[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / FailSafeManager

# Class: FailSafeManager

[<internal>](../modules/internal_.md).FailSafeManager

Class to Handle one FailSafe context. This is mainly used when adding (Commissioning) or updating new Fabrics.

## Table of contents

### Constructors

- [constructor](internal_.FailSafeManager.md#constructor)

### Properties

- [associatedFabric](internal_.FailSafeManager.md#associatedfabric)
- [csrSessionId](internal_.FailSafeManager.md#csrsessionid)
- [device](internal_.FailSafeManager.md#device)
- [expiryCallback](internal_.FailSafeManager.md#expirycallback)
- [fabricBuilder](internal_.FailSafeManager.md#fabricbuilder)
- [failSafeTimer](internal_.FailSafeManager.md#failsafetimer)
- [forUpdateNoc](internal_.FailSafeManager.md#forupdatenoc)
- [maxCumulativeFailsafeTimer](internal_.FailSafeManager.md#maxcumulativefailsafetimer)
- [rootEndpoint](internal_.FailSafeManager.md#rootendpoint)
- [storeEndpointState](internal_.FailSafeManager.md#storeendpointstate)
- [storedNetworkClusterState](internal_.FailSafeManager.md#storednetworkclusterstate)

### Accessors

- [fabricIndex](internal_.FailSafeManager.md#fabricindex)

### Methods

- [buildFabric](internal_.FailSafeManager.md#buildfabric)
- [buildUpdatedFabric](internal_.FailSafeManager.md#buildupdatedfabric)
- [complete](internal_.FailSafeManager.md#complete)
- [createCertificateSigningRequest](internal_.FailSafeManager.md#createcertificatesigningrequest)
- [expire](internal_.FailSafeManager.md#expire)
- [reArm](internal_.FailSafeManager.md#rearm)
- [restoreEndpointState](internal_.FailSafeManager.md#restoreendpointstate)
- [setRootCert](internal_.FailSafeManager.md#setrootcert)

## Constructors

### constructor

• **new FailSafeManager**(`device`, `associatedFabric`, `expiryLengthSeconds`, `maxCumulativeFailsafeSeconds`, `expiryCallback`, `rootEndpoint`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | [`MatterDevice`](internal_.MatterDevice.md) |
| `associatedFabric` | `undefined` \| [`Fabric`](internal_.Fabric.md) |
| `expiryLengthSeconds` | `number` |
| `maxCumulativeFailsafeSeconds` | `number` |
| `expiryCallback` | () => `Promise`<`void`\> |
| `rootEndpoint` | [`Endpoint`](internal_.Endpoint.md) |

#### Defined in

matter.js/dist/esm/common/FailSafeManager.d.ts:23

## Properties

### associatedFabric

• **associatedFabric**: `undefined` \| [`Fabric`](internal_.Fabric.md)

#### Defined in

matter.js/dist/esm/common/FailSafeManager.d.ts:14

___

### csrSessionId

• **csrSessionId**: `undefined` \| `number`

#### Defined in

matter.js/dist/esm/common/FailSafeManager.d.ts:21

___

### device

• `Private` `Readonly` **device**: `any`

#### Defined in

matter.js/dist/esm/common/FailSafeManager.d.ts:13

___

### expiryCallback

• `Private` `Readonly` **expiryCallback**: `any`

#### Defined in

matter.js/dist/esm/common/FailSafeManager.d.ts:15

___

### fabricBuilder

• `Readonly` **fabricBuilder**: [`FabricBuilder`](internal_.FabricBuilder.md)

#### Defined in

matter.js/dist/esm/common/FailSafeManager.d.ts:17

___

### failSafeTimer

• **failSafeTimer**: [`Timer`](../interfaces/internal_.Timer.md)

#### Defined in

matter.js/dist/esm/common/FailSafeManager.d.ts:18

___

### forUpdateNoc

• **forUpdateNoc**: `undefined` \| `boolean`

#### Defined in

matter.js/dist/esm/common/FailSafeManager.d.ts:22

___

### maxCumulativeFailsafeTimer

• `Private` **maxCumulativeFailsafeTimer**: `any`

#### Defined in

matter.js/dist/esm/common/FailSafeManager.d.ts:19

___

### rootEndpoint

• `Readonly` **rootEndpoint**: [`Endpoint`](internal_.Endpoint.md)

#### Defined in

matter.js/dist/esm/common/FailSafeManager.d.ts:16

___

### storeEndpointState

• `Private` **storeEndpointState**: `any`

Store required CLuster data when opening the FailSafe context to allow to restore them on expiry.

#### Defined in

matter.js/dist/esm/common/FailSafeManager.d.ts:25

___

### storedNetworkClusterState

• `Private` **storedNetworkClusterState**: `any`

#### Defined in

matter.js/dist/esm/common/FailSafeManager.d.ts:20

## Accessors

### fabricIndex

• `get` **fabricIndex**(): `undefined` \| [`FabricIndex`](../modules/internal_.md#fabricindex)

#### Returns

`undefined` \| [`FabricIndex`](../modules/internal_.md#fabricindex)

#### Defined in

matter.js/dist/esm/common/FailSafeManager.d.ts:28

## Methods

### buildFabric

▸ **buildFabric**(`nocData`): `Promise`<[`Fabric`](internal_.Fabric.md)\>

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

`Promise`<[`Fabric`](internal_.Fabric.md)\>

#### Defined in

matter.js/dist/esm/common/FailSafeManager.d.ts:48

___

### buildUpdatedFabric

▸ **buildUpdatedFabric**(`nocValue`, `icacValue`): `Promise`<[`Fabric`](internal_.Fabric.md)\>

Build a new Fabric object based on an existing fabric for the "UpdateNoc" case of the Operational Credentials
cluster.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nocValue` | `Uint8Array` |
| `icacValue` | `undefined` \| `Uint8Array` |

#### Returns

`Promise`<[`Fabric`](internal_.Fabric.md)\>

#### Defined in

matter.js/dist/esm/common/FailSafeManager.d.ts:46

___

### complete

▸ **complete**(): `void`

Complete the FailSafe context. This is called when the commissioning is completed.

#### Returns

`void`

#### Defined in

matter.js/dist/esm/common/FailSafeManager.d.ts:34

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

matter.js/dist/esm/common/FailSafeManager.d.ts:39

___

### expire

▸ **expire**(): `Promise`<`void`\>

Expire the FailSafe context. This is called by the timer and can also be called manually if needed.

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/esm/common/FailSafeManager.d.ts:32

___

### reArm

▸ **reArm**(`associatedFabric`, `expiryLengthSeconds`): `Promise`<`void`\>

Handle "Re-Arming" an existing FailSafe context to extend the timer, expire or fail if not allowed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `associatedFabric` | `undefined` \| [`Fabric`](internal_.Fabric.md) |
| `expiryLengthSeconds` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/esm/common/FailSafeManager.d.ts:30

___

### restoreEndpointState

▸ **restoreEndpointState**(`endpoint?`): `void`

Restore Cluster data when the FailSafe context expired.

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint?` | [`Endpoint`](internal_.Endpoint.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/common/FailSafeManager.d.ts:27

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

matter.js/dist/esm/common/FailSafeManager.d.ts:41
