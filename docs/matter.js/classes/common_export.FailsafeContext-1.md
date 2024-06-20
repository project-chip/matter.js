[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](../modules/common_export.md) / FailsafeContext

# Class: FailsafeContext

[common/export](../modules/common_export.md).FailsafeContext

A "timed operation" is a command or sequence of commands that operate with a failsafe timer that will abort the
operation if it does not complete within a specific window.

FailsafeContext maintains the failsafe timer and tracks information required to rollback state if the operation
aborts.

Timed operations are exclusive for a node.

## Hierarchy

- **`FailsafeContext`**

  ↳ [`CommissioningServerFailsafeContext`](cluster_export.CommissioningServerFailsafeContext.md)

## Table of contents

### Constructors

- [constructor](common_export.FailsafeContext-1.md#constructor)

### Properties

- [#associatedFabric](common_export.FailsafeContext-1.md##associatedfabric)
- [#commissioned](common_export.FailsafeContext-1.md##commissioned)
- [#construction](common_export.FailsafeContext-1.md##construction)
- [#csrSessionId](common_export.FailsafeContext-1.md##csrsessionid)
- [#fabricBuilder](common_export.FailsafeContext-1.md##fabricbuilder)
- [#fabrics](common_export.FailsafeContext-1.md##fabrics)
- [#failsafe](common_export.FailsafeContext-1.md##failsafe)
- [#forUpdateNoc](common_export.FailsafeContext-1.md##forupdatenoc)
- [#sessions](common_export.FailsafeContext-1.md##sessions)

### Accessors

- [associatedFabric](common_export.FailsafeContext-1.md#associatedfabric)
- [commissioned](common_export.FailsafeContext-1.md#commissioned)
- [construction](common_export.FailsafeContext-1.md#construction)
- [csrSessionId](common_export.FailsafeContext-1.md#csrsessionid)
- [fabricIndex](common_export.FailsafeContext-1.md#fabricindex)
- [forUpdateNoc](common_export.FailsafeContext-1.md#forupdatenoc)
- [hasRootCert](common_export.FailsafeContext-1.md#hasrootcert)

### Methods

- [#failSafeExpired](common_export.FailsafeContext-1.md##failsafeexpired)
- [addFabric](common_export.FailsafeContext-1.md#addfabric)
- [buildFabric](common_export.FailsafeContext-1.md#buildfabric)
- [buildUpdatedFabric](common_export.FailsafeContext-1.md#buildupdatedfabric)
- [close](common_export.FailsafeContext-1.md#close)
- [completeCommission](common_export.FailsafeContext-1.md#completecommission)
- [createCertificateSigningRequest](common_export.FailsafeContext-1.md#createcertificatesigningrequest)
- [extend](common_export.FailsafeContext-1.md#extend)
- [getFailSafeContext](common_export.FailsafeContext-1.md#getfailsafecontext)
- [getNextFabricIndex](common_export.FailsafeContext-1.md#getnextfabricindex)
- [removePaseSession](common_export.FailsafeContext-1.md#removepasesession)
- [restoreBreadcrumb](common_export.FailsafeContext-1.md#restorebreadcrumb)
- [restoreFabric](common_export.FailsafeContext-1.md#restorefabric)
- [restoreNetworkState](common_export.FailsafeContext-1.md#restorenetworkstate)
- [revokeFabric](common_export.FailsafeContext-1.md#revokefabric)
- [rollback](common_export.FailsafeContext-1.md#rollback)
- [setRootCert](common_export.FailsafeContext-1.md#setrootcert)
- [storeEndpointState](common_export.FailsafeContext-1.md#storeendpointstate)
- [updateFabric](common_export.FailsafeContext-1.md#updatefabric)

## Constructors

### constructor

• **new FailsafeContext**(`options`): [`FailsafeContext`](common_export.FailsafeContext-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Options`](../interfaces/common_export.FailsafeContext.Options.md) |

#### Returns

[`FailsafeContext`](common_export.FailsafeContext-1.md)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:47](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L47)

## Properties

### #associatedFabric

• `Private` `Optional` **#associatedFabric**: [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:40](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L40)

___

### #commissioned

• `Private` **#commissioned**: [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:45](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L45)

___

### #construction

• `Private` **#construction**: [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`FailsafeContext`](common_export.FailsafeContext-1.md)\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:39](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L39)

___

### #csrSessionId

• `Private` `Optional` **#csrSessionId**: `number`

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:41](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L41)

___

### #fabricBuilder

• `Private` **#fabricBuilder**: [`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:43](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L43)

___

### #fabrics

• `Private` **#fabrics**: [`FabricManager`](fabric_export.FabricManager.md)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:37](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L37)

___

### #failsafe

• `Private` `Optional` **#failsafe**: [`FailsafeTimer`](common_export.FailsafeTimer.md)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:38](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L38)

___

### #forUpdateNoc

• `Private` `Optional` **#forUpdateNoc**: `boolean`

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:42](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L42)

___

### #sessions

• `Private` **#sessions**: [`SessionManager`](session_export.SessionManager.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:36](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L36)

## Accessors

### associatedFabric

• `get` **associatedFabric**(): `undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Returns

`undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:92](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L92)

___

### commissioned

• `get` **commissioned**(): [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[], `void`\>

#### Returns

[`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:88](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L88)

___

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`FailsafeContext`](common_export.FailsafeContext-1.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`FailsafeContext`](common_export.FailsafeContext-1.md)\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:84](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L84)

___

### csrSessionId

• `get` **csrSessionId**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:96](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L96)

___

### fabricIndex

• `get` **fabricIndex**(): `undefined` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Returns

`undefined` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:80](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L80)

___

### forUpdateNoc

• `get` **forUpdateNoc**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:100](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L100)

___

### hasRootCert

• `get` **hasRootCert**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:104](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L104)

## Methods

### #failSafeExpired

▸ **#failSafeExpired**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:242](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L242)

___

### addFabric

▸ **addFabric**(`fabric`): `Promise`\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`Promise`\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:141](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L141)

___

### buildFabric

▸ **buildFabric**(`nocData`): `Promise`\<[`Fabric`](fabric_export.Fabric.md)\>

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

`Promise`\<[`Fabric`](fabric_export.Fabric.md)\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:206](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L206)

___

### buildUpdatedFabric

▸ **buildUpdatedFabric**(`nocValue`, `icacValue`): `Promise`\<[`Fabric`](fabric_export.Fabric.md)\>

Build a new Fabric object based on an existing fabric for the "UpdateNoc" case of the Operational Credentials
cluster.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nocValue` | `Uint8Array` |
| `icacValue` | `undefined` \| `Uint8Array` |

#### Returns

`Promise`\<[`Fabric`](fabric_export.Fabric.md)\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:196](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L196)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:176](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L176)

___

### completeCommission

▸ **completeCommission**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:108](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L108)

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

[packages/matter.js/src/common/FailsafeContext.ts:158](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L158)

___

### extend

▸ **extend**(`fabric`, `expiryLengthSeconds`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | `undefined` \| [`Fabric`](fabric_export.Fabric.md) |
| `expiryLengthSeconds` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:72](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L72)

___

### getFailSafeContext

▸ **getFailSafeContext**(): [`FailsafeTimer`](common_export.FailsafeTimer.md)

#### Returns

[`FailsafeTimer`](common_export.FailsafeTimer.md)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:132](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L132)

___

### getNextFabricIndex

▸ **getNextFabricIndex**(): [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Returns

[`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:137](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L137)

___

### removePaseSession

▸ **removePaseSession**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:169](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L169)

___

### restoreBreadcrumb

▸ **restoreBreadcrumb**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:316](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L316)

___

### restoreFabric

▸ **restoreFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:310](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L310)

___

### restoreNetworkState

▸ **restoreNetworkState**(): `Promise`\<`void`\>

Restore Cluster data when the FailSafe context expired.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:308](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L308)

___

### revokeFabric

▸ **revokeFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:314](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L314)

___

### rollback

▸ **rollback**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:248](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L248)

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

[packages/matter.js/src/common/FailsafeContext.ts:188](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L188)

___

### storeEndpointState

▸ **storeEndpointState**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:305](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L305)

___

### updateFabric

▸ **updateFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:149](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/FailsafeContext.ts#L149)
