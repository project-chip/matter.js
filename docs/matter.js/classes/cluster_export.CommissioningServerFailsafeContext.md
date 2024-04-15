[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / CommissioningServerFailsafeContext

# Class: CommissioningServerFailsafeContext

[cluster/export](../modules/cluster_export.md).CommissioningServerFailsafeContext

[FailsafeContext](common_export.FailsafeContext-1.md) implementation for [EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md) API.

## Hierarchy

- [`FailsafeContext`](common_export.FailsafeContext-1.md)

  ↳ **`CommissioningServerFailsafeContext`**

## Table of contents

### Constructors

- [constructor](cluster_export.CommissioningServerFailsafeContext.md#constructor)

### Properties

- [#associatedFabric](cluster_export.CommissioningServerFailsafeContext.md##associatedfabric)
- [#commissioned](cluster_export.CommissioningServerFailsafeContext.md##commissioned)
- [#construction](cluster_export.CommissioningServerFailsafeContext.md##construction)
- [#csrSessionId](cluster_export.CommissioningServerFailsafeContext.md##csrsessionid)
- [#fabricBuilder](cluster_export.CommissioningServerFailsafeContext.md##fabricbuilder)
- [#fabrics](cluster_export.CommissioningServerFailsafeContext.md##fabrics)
- [#failsafe](cluster_export.CommissioningServerFailsafeContext.md##failsafe)
- [#forUpdateNoc](cluster_export.CommissioningServerFailsafeContext.md##forupdatenoc)
- [#rootEndpoint](cluster_export.CommissioningServerFailsafeContext.md##rootendpoint)
- [#sessions](cluster_export.CommissioningServerFailsafeContext.md##sessions)
- [#storedNetworkClusterState](cluster_export.CommissioningServerFailsafeContext.md##storednetworkclusterstate)

### Accessors

- [associatedFabric](cluster_export.CommissioningServerFailsafeContext.md#associatedfabric)
- [commissioned](cluster_export.CommissioningServerFailsafeContext.md#commissioned)
- [construction](cluster_export.CommissioningServerFailsafeContext.md#construction)
- [csrSessionId](cluster_export.CommissioningServerFailsafeContext.md#csrsessionid)
- [fabricIndex](cluster_export.CommissioningServerFailsafeContext.md#fabricindex)
- [forUpdateNoc](cluster_export.CommissioningServerFailsafeContext.md#forupdatenoc)
- [hasRootCert](cluster_export.CommissioningServerFailsafeContext.md#hasrootcert)

### Methods

- [#failSafeExpired](cluster_export.CommissioningServerFailsafeContext.md##failsafeexpired)
- [#restoreEndpointState](cluster_export.CommissioningServerFailsafeContext.md##restoreendpointstate)
- [#storeEndpointState](cluster_export.CommissioningServerFailsafeContext.md##storeendpointstate)
- [addFabric](cluster_export.CommissioningServerFailsafeContext.md#addfabric)
- [buildFabric](cluster_export.CommissioningServerFailsafeContext.md#buildfabric)
- [buildUpdatedFabric](cluster_export.CommissioningServerFailsafeContext.md#buildupdatedfabric)
- [close](cluster_export.CommissioningServerFailsafeContext.md#close)
- [completeCommission](cluster_export.CommissioningServerFailsafeContext.md#completecommission)
- [createCertificateSigningRequest](cluster_export.CommissioningServerFailsafeContext.md#createcertificatesigningrequest)
- [extend](cluster_export.CommissioningServerFailsafeContext.md#extend)
- [getFailSafeContext](cluster_export.CommissioningServerFailsafeContext.md#getfailsafecontext)
- [getNextFabricIndex](cluster_export.CommissioningServerFailsafeContext.md#getnextfabricindex)
- [removePaseSession](cluster_export.CommissioningServerFailsafeContext.md#removepasesession)
- [restoreBreadcrumb](cluster_export.CommissioningServerFailsafeContext.md#restorebreadcrumb)
- [restoreFabric](cluster_export.CommissioningServerFailsafeContext.md#restorefabric)
- [restoreNetworkState](cluster_export.CommissioningServerFailsafeContext.md#restorenetworkstate)
- [revokeFabric](cluster_export.CommissioningServerFailsafeContext.md#revokefabric)
- [rollback](cluster_export.CommissioningServerFailsafeContext.md#rollback)
- [setRootCert](cluster_export.CommissioningServerFailsafeContext.md#setrootcert)
- [storeEndpointState](cluster_export.CommissioningServerFailsafeContext.md#storeendpointstate)
- [updateFabric](cluster_export.CommissioningServerFailsafeContext.md#updatefabric)
- [create](cluster_export.CommissioningServerFailsafeContext.md#create)

## Constructors

### constructor

• **new CommissioningServerFailsafeContext**(`rootEndpoint`, `options`): [`CommissioningServerFailsafeContext`](cluster_export.CommissioningServerFailsafeContext.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootEndpoint` | [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md) |
| `options` | [`Options`](../interfaces/common_export.FailsafeContext.Options.md) |

#### Returns

[`CommissioningServerFailsafeContext`](cluster_export.CommissioningServerFailsafeContext.md)

#### Overrides

[FailsafeContext](common_export.FailsafeContext-1.md).[constructor](common_export.FailsafeContext-1.md#constructor)

#### Defined in

[packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts#L28)

## Properties

### #associatedFabric

• `Private` `Optional` **#associatedFabric**: [`Fabric`](fabric_export.Fabric.md)

#### Inherited from

[FailsafeContext](common_export.FailsafeContext-1.md).[#associatedFabric](common_export.FailsafeContext-1.md##associatedfabric)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L37)

___

### #commissioned

• `Private` **#commissioned**: [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[], `void`\>

#### Inherited from

[FailsafeContext](common_export.FailsafeContext-1.md).[#commissioned](common_export.FailsafeContext-1.md##commissioned)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L42)

___

### #construction

• `Private` **#construction**: [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`FailsafeContext`](common_export.FailsafeContext-1.md)\>

#### Inherited from

[FailsafeContext](common_export.FailsafeContext-1.md).[#construction](common_export.FailsafeContext-1.md##construction)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L36)

___

### #csrSessionId

• `Private` `Optional` **#csrSessionId**: `number`

#### Inherited from

[FailsafeContext](common_export.FailsafeContext-1.md).[#csrSessionId](common_export.FailsafeContext-1.md##csrsessionid)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L38)

___

### #fabricBuilder

• `Private` **#fabricBuilder**: [`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Inherited from

[FailsafeContext](common_export.FailsafeContext-1.md).[#fabricBuilder](common_export.FailsafeContext-1.md##fabricbuilder)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L40)

___

### #fabrics

• `Private` **#fabrics**: [`FabricManager`](fabric_export.FabricManager.md)

#### Inherited from

[FailsafeContext](common_export.FailsafeContext-1.md).[#fabrics](common_export.FailsafeContext-1.md##fabrics)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L34)

___

### #failsafe

• `Private` `Optional` **#failsafe**: [`FailsafeTimer`](common_export.FailsafeTimer.md)

#### Inherited from

[FailsafeContext](common_export.FailsafeContext-1.md).[#failsafe](common_export.FailsafeContext-1.md##failsafe)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L35)

___

### #forUpdateNoc

• `Private` `Optional` **#forUpdateNoc**: `boolean`

#### Inherited from

[FailsafeContext](common_export.FailsafeContext-1.md).[#forUpdateNoc](common_export.FailsafeContext-1.md##forupdatenoc)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L39)

___

### #rootEndpoint

• `Private` **#rootEndpoint**: [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md)

#### Defined in

[packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts#L22)

___

### #sessions

• `Private` **#sessions**: [`SessionManager`](session_export.SessionManager.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

[FailsafeContext](common_export.FailsafeContext-1.md).[#sessions](common_export.FailsafeContext-1.md##sessions)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L33)

___

### #storedNetworkClusterState

• `Private` **#storedNetworkClusterState**: `Map`\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber), [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `connected`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>[]\>

#### Defined in

[packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts#L23)

## Accessors

### associatedFabric

• `get` **associatedFabric**(): `undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Returns

`undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Inherited from

FailsafeContext.associatedFabric

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L89)

___

### commissioned

• `get` **commissioned**(): [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[], `void`\>

#### Returns

[`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[], `void`\>

#### Inherited from

FailsafeContext.commissioned

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L85)

___

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`FailsafeContext`](common_export.FailsafeContext-1.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`FailsafeContext`](common_export.FailsafeContext-1.md)\>

#### Inherited from

FailsafeContext.construction

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L81)

___

### csrSessionId

• `get` **csrSessionId**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

FailsafeContext.csrSessionId

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L93)

___

### fabricIndex

• `get` **fabricIndex**(): `undefined` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Returns

`undefined` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Inherited from

FailsafeContext.fabricIndex

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L77)

___

### forUpdateNoc

• `get` **forUpdateNoc**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Inherited from

FailsafeContext.forUpdateNoc

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:97](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L97)

___

### hasRootCert

• `get` **hasRootCert**(): `boolean`

#### Returns

`boolean`

#### Inherited from

FailsafeContext.hasRootCert

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L101)

## Methods

### #failSafeExpired

▸ **#failSafeExpired**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FailsafeContext](common_export.FailsafeContext-1.md).[#failSafeExpired](common_export.FailsafeContext-1.md##failsafeexpired)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:243](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L243)

___

### #restoreEndpointState

▸ **#restoreEndpointState**(`endpoint`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts#L83)

___

### #storeEndpointState

▸ **#storeEndpointState**(`endpoint`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts#L70)

___

### addFabric

▸ **addFabric**(`fabric`): `Promise`\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`Promise`\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>

#### Inherited from

[FailsafeContext](common_export.FailsafeContext-1.md).[addFabric](common_export.FailsafeContext-1.md#addfabric)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:138](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L138)

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

#### Inherited from

[FailsafeContext](common_export.FailsafeContext-1.md).[buildFabric](common_export.FailsafeContext-1.md#buildfabric)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:209](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L209)

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

#### Inherited from

[FailsafeContext](common_export.FailsafeContext-1.md).[buildUpdatedFabric](common_export.FailsafeContext-1.md#buildupdatedfabric)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:198](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L198)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FailsafeContext](common_export.FailsafeContext-1.md).[close](common_export.FailsafeContext-1.md#close)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:175](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L175)

___

### completeCommission

▸ **completeCommission**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FailsafeContext](common_export.FailsafeContext-1.md).[completeCommission](common_export.FailsafeContext-1.md#completecommission)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:105](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L105)

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

[FailsafeContext](common_export.FailsafeContext-1.md).[createCertificateSigningRequest](common_export.FailsafeContext-1.md#createcertificatesigningrequest)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:155](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L155)

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

#### Inherited from

[FailsafeContext](common_export.FailsafeContext-1.md).[extend](common_export.FailsafeContext-1.md#extend)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L69)

___

### getFailSafeContext

▸ **getFailSafeContext**(): [`FailsafeTimer`](common_export.FailsafeTimer.md)

#### Returns

[`FailsafeTimer`](common_export.FailsafeTimer.md)

#### Inherited from

[FailsafeContext](common_export.FailsafeContext-1.md).[getFailSafeContext](common_export.FailsafeContext-1.md#getfailsafecontext)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L129)

___

### getNextFabricIndex

▸ **getNextFabricIndex**(): [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Returns

[`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Inherited from

[FailsafeContext](common_export.FailsafeContext-1.md).[getNextFabricIndex](common_export.FailsafeContext-1.md#getnextfabricindex)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:134](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L134)

___

### removePaseSession

▸ **removePaseSession**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FailsafeContext](common_export.FailsafeContext-1.md).[removePaseSession](common_export.FailsafeContext-1.md#removepasesession)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:168](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L168)

___

### restoreBreadcrumb

▸ **restoreBreadcrumb**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[FailsafeContext](common_export.FailsafeContext-1.md).[restoreBreadcrumb](common_export.FailsafeContext-1.md#restorebreadcrumb)

#### Defined in

[packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts:65](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts#L65)

___

### restoreFabric

▸ **restoreFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

[FailsafeContext](common_export.FailsafeContext-1.md).[restoreFabric](common_export.FailsafeContext-1.md#restorefabric)

#### Defined in

[packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts#L41)

___

### restoreNetworkState

▸ **restoreNetworkState**(): `Promise`\<`void`\>

Restore Cluster data when the FailSafe context expired.

#### Returns

`Promise`\<`void`\>

#### Overrides

[FailsafeContext](common_export.FailsafeContext-1.md).[restoreNetworkState](common_export.FailsafeContext-1.md#restorenetworkstate)

#### Defined in

[packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts#L48)

___

### revokeFabric

▸ **revokeFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

[FailsafeContext](common_export.FailsafeContext-1.md).[revokeFabric](common_export.FailsafeContext-1.md#revokefabric)

#### Defined in

[packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts#L52)

___

### rollback

▸ **rollback**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FailsafeContext](common_export.FailsafeContext-1.md).[rollback](common_export.FailsafeContext-1.md#rollback)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:249](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L249)

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

[FailsafeContext](common_export.FailsafeContext-1.md).[setRootCert](common_export.FailsafeContext-1.md#setrootcert)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:187](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L187)

___

### storeEndpointState

▸ **storeEndpointState**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[FailsafeContext](common_export.FailsafeContext-1.md).[storeEndpointState](common_export.FailsafeContext-1.md#storeendpointstate)

#### Defined in

[packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts#L37)

___

### updateFabric

▸ **updateFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FailsafeContext](common_export.FailsafeContext-1.md).[updateFabric](common_export.FailsafeContext-1.md#updatefabric)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:146](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L146)

___

### create

▸ **create**(`rootEndpoint`, `options`): `Promise`\<[`CommissioningServerFailsafeContext`](cluster_export.CommissioningServerFailsafeContext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootEndpoint` | [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md) |
| `options` | [`Options`](../interfaces/common_export.FailsafeContext.Options.md) |

#### Returns

`Promise`\<[`CommissioningServerFailsafeContext`](cluster_export.CommissioningServerFailsafeContext.md)\>

#### Defined in

[packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts#L33)
