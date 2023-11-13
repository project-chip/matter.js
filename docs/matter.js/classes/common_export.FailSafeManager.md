[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](../modules/common_export.md) / FailSafeManager

# Class: FailSafeManager

[common/export](../modules/common_export.md).FailSafeManager

Class to Handle one FailSafe context. This is mainly used when adding (Commissioning) or updating new Fabrics.

## Table of contents

### Constructors

- [constructor](common_export.FailSafeManager.md#constructor)

### Properties

- [associatedFabric](common_export.FailSafeManager.md#associatedfabric)
- [csrSessionId](common_export.FailSafeManager.md#csrsessionid)
- [device](common_export.FailSafeManager.md#device)
- [expiryCallback](common_export.FailSafeManager.md#expirycallback)
- [fabricBuilder](common_export.FailSafeManager.md#fabricbuilder)
- [failSafeTimer](common_export.FailSafeManager.md#failsafetimer)
- [forUpdateNoc](common_export.FailSafeManager.md#forupdatenoc)
- [maxCumulativeFailsafeTimer](common_export.FailSafeManager.md#maxcumulativefailsafetimer)
- [rootEndpoint](common_export.FailSafeManager.md#rootendpoint)
- [storedNetworkClusterState](common_export.FailSafeManager.md#storednetworkclusterstate)

### Accessors

- [fabricIndex](common_export.FailSafeManager.md#fabricindex)

### Methods

- [buildFabric](common_export.FailSafeManager.md#buildfabric)
- [buildUpdatedFabric](common_export.FailSafeManager.md#buildupdatedfabric)
- [complete](common_export.FailSafeManager.md#complete)
- [createCertificateSigningRequest](common_export.FailSafeManager.md#createcertificatesigningrequest)
- [expire](common_export.FailSafeManager.md#expire)
- [reArm](common_export.FailSafeManager.md#rearm)
- [restoreEndpointState](common_export.FailSafeManager.md#restoreendpointstate)
- [setRootCert](common_export.FailSafeManager.md#setrootcert)
- [storeEndpointState](common_export.FailSafeManager.md#storeendpointstate)

## Constructors

### constructor

• **new FailSafeManager**(`device`, `associatedFabric`, `expiryLengthSeconds`, `maxCumulativeFailsafeSeconds`, `expiryCallback`, `rootEndpoint`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | [`MatterDevice`](export._internal_.MatterDevice.md) |
| `associatedFabric` | `undefined` \| [`Fabric`](fabric_export.Fabric.md) |
| `expiryLengthSeconds` | `number` |
| `maxCumulativeFailsafeSeconds` | `number` |
| `expiryCallback` | () => `Promise`<`void`\> |
| `rootEndpoint` | [`Endpoint`](device_export.Endpoint.md) |

#### Defined in

[packages/matter.js/src/common/FailSafeManager.ts:30](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/common/FailSafeManager.ts#L30)

## Properties

### associatedFabric

• **associatedFabric**: `undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/common/FailSafeManager.ts:32](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/common/FailSafeManager.ts#L32)

___

### csrSessionId

• **csrSessionId**: `undefined` \| `number`

#### Defined in

[packages/matter.js/src/common/FailSafeManager.ts:27](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/common/FailSafeManager.ts#L27)

___

### device

• `Private` `Readonly` **device**: [`MatterDevice`](export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/common/FailSafeManager.ts:31](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/common/FailSafeManager.ts#L31)

___

### expiryCallback

• `Private` `Readonly` **expiryCallback**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

##### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/common/FailSafeManager.ts:35](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/common/FailSafeManager.ts#L35)

___

### fabricBuilder

• `Readonly` **fabricBuilder**: [`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Defined in

[packages/matter.js/src/common/FailSafeManager.ts:20](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/common/FailSafeManager.ts#L20)

___

### failSafeTimer

• **failSafeTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/common/FailSafeManager.ts:21](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/common/FailSafeManager.ts#L21)

___

### forUpdateNoc

• **forUpdateNoc**: `undefined` \| `boolean`

#### Defined in

[packages/matter.js/src/common/FailSafeManager.ts:28](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/common/FailSafeManager.ts#L28)

___

### maxCumulativeFailsafeTimer

• `Private` **maxCumulativeFailsafeTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/common/FailSafeManager.ts:22](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/common/FailSafeManager.ts#L22)

___

### rootEndpoint

• `Readonly` **rootEndpoint**: [`Endpoint`](device_export.Endpoint.md)

#### Defined in

[packages/matter.js/src/common/FailSafeManager.ts:36](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/common/FailSafeManager.ts#L36)

___

### storedNetworkClusterState

• `Private` **storedNetworkClusterState**: `Map`<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber), [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `connected`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>[]\>

#### Defined in

[packages/matter.js/src/common/FailSafeManager.ts:23](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/common/FailSafeManager.ts#L23)

## Accessors

### fabricIndex

• `get` **fabricIndex**(): `undefined` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Returns

`undefined` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/common/FailSafeManager.ts:79](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/common/FailSafeManager.ts#L79)

## Methods

### buildFabric

▸ **buildFabric**(`nocData`): `Promise`<[`Fabric`](fabric_export.Fabric.md)\>

Build a new Fabric object for a new fabric for the "AddNoc" case of the Operational Credentials cluster.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nocData` | `Object` |
| `nocData.adminVendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |
| `nocData.caseAdminSubject` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `nocData.icacValue` | `undefined` \| `Uint8Array` |
| `nocData.ipkValue` | `Uint8Array` |
| `nocData.nocValue` | `Uint8Array` |

#### Returns

`Promise`<[`Fabric`](fabric_export.Fabric.md)\>

#### Defined in

[packages/matter.js/src/common/FailSafeManager.ts:163](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/common/FailSafeManager.ts#L163)

___

### buildUpdatedFabric

▸ **buildUpdatedFabric**(`nocValue`, `icacValue`): `Promise`<[`Fabric`](fabric_export.Fabric.md)\>

Build a new Fabric object based on an existing fabric for the "UpdateNoc" case of the Operational Credentials
cluster.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nocValue` | `Uint8Array` |
| `icacValue` | `undefined` \| `Uint8Array` |

#### Returns

`Promise`<[`Fabric`](fabric_export.Fabric.md)\>

#### Defined in

[packages/matter.js/src/common/FailSafeManager.ts:152](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/common/FailSafeManager.ts#L152)

___

### complete

▸ **complete**(): `void`

Complete the FailSafe context. This is called when the commissioning is completed.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/common/FailSafeManager.ts:118](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/common/FailSafeManager.ts#L118)

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

[packages/matter.js/src/common/FailSafeManager.ts:127](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/common/FailSafeManager.ts#L127)

___

### expire

▸ **expire**(): `Promise`<`void`\>

Expire the FailSafe context. This is called by the timer and can also be called manually if needed.

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/common/FailSafeManager.ts:111](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/common/FailSafeManager.ts#L111)

___

### reArm

▸ **reArm**(`associatedFabric`, `expiryLengthSeconds`): `Promise`<`void`\>

Handle "Re-Arming" an existing FailSafe context to extend the timer, expire or fail if not allowed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `associatedFabric` | `undefined` \| [`Fabric`](fabric_export.Fabric.md) |
| `expiryLengthSeconds` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/common/FailSafeManager.ts:84](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/common/FailSafeManager.ts#L84)

___

### restoreEndpointState

▸ **restoreEndpointState**(`endpoint?`): `void`

Restore Cluster data when the FailSafe context expired.

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/common/FailSafeManager.ts:60](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/common/FailSafeManager.ts#L60)

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

[packages/matter.js/src/common/FailSafeManager.ts:141](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/common/FailSafeManager.ts#L141)

___

### storeEndpointState

▸ `Private` **storeEndpointState**(`endpoint?`): `void`

Store required CLuster data when opening the FailSafe context to allow to restore them on expiry.

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/common/FailSafeManager.ts:46](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/common/FailSafeManager.ts#L46)
