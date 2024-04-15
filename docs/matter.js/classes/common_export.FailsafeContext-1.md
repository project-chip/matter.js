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

[packages/matter.js/src/common/FailsafeContext.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L44)

## Properties

### #associatedFabric

• `Private` `Optional` **#associatedFabric**: [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L37)

___

### #commissioned

• `Private` **#commissioned**: [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L42)

___

### #construction

• `Private` **#construction**: [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`FailsafeContext`](common_export.FailsafeContext-1.md)\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L36)

___

### #csrSessionId

• `Private` `Optional` **#csrSessionId**: `number`

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L38)

___

### #fabricBuilder

• `Private` **#fabricBuilder**: [`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L40)

___

### #fabrics

• `Private` **#fabrics**: [`FabricManager`](fabric_export.FabricManager.md)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L34)

___

### #failsafe

• `Private` `Optional` **#failsafe**: [`FailsafeTimer`](common_export.FailsafeTimer.md)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L35)

___

### #forUpdateNoc

• `Private` `Optional` **#forUpdateNoc**: `boolean`

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L39)

___

### #sessions

• `Private` **#sessions**: [`SessionManager`](session_export.SessionManager.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L33)

## Accessors

### associatedFabric

• `get` **associatedFabric**(): `undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Returns

`undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L89)

___

### commissioned

• `get` **commissioned**(): [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[], `void`\>

#### Returns

[`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L85)

___

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`FailsafeContext`](common_export.FailsafeContext-1.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`FailsafeContext`](common_export.FailsafeContext-1.md)\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L81)

___

### csrSessionId

• `get` **csrSessionId**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L93)

___

### fabricIndex

• `get` **fabricIndex**(): `undefined` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Returns

`undefined` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L77)

___

### forUpdateNoc

• `get` **forUpdateNoc**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:97](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L97)

___

### hasRootCert

• `get` **hasRootCert**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L101)

## Methods

### #failSafeExpired

▸ **#failSafeExpired**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:243](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L243)

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

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:198](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L198)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:175](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L175)

___

### completeCommission

▸ **completeCommission**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

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

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L69)

___

### getFailSafeContext

▸ **getFailSafeContext**(): [`FailsafeTimer`](common_export.FailsafeTimer.md)

#### Returns

[`FailsafeTimer`](common_export.FailsafeTimer.md)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L129)

___

### getNextFabricIndex

▸ **getNextFabricIndex**(): [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Returns

[`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:134](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L134)

___

### removePaseSession

▸ **removePaseSession**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:168](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L168)

___

### restoreBreadcrumb

▸ **restoreBreadcrumb**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:317](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L317)

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

[packages/matter.js/src/common/FailsafeContext.ts:311](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L311)

___

### restoreNetworkState

▸ **restoreNetworkState**(): `Promise`\<`void`\>

Restore Cluster data when the FailSafe context expired.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:309](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L309)

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

[packages/matter.js/src/common/FailsafeContext.ts:315](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L315)

___

### rollback

▸ **rollback**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

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

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:187](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L187)

___

### storeEndpointState

▸ **storeEndpointState**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeContext.ts:306](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L306)

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

[packages/matter.js/src/common/FailsafeContext.ts:146](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeContext.ts#L146)
