[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / CommissioningServerFailsafeContext

# Class: CommissioningServerFailsafeContext

[FailsafeContext](../../../common/export/classes/FailsafeContext.md) implementation for [EndpointInterface](../../../endpoint/export/interfaces/EndpointInterface.md) API.

## Extends

- [`FailsafeContext`](../../../common/export/classes/FailsafeContext.md)

## Constructors

### new CommissioningServerFailsafeContext()

> **new CommissioningServerFailsafeContext**(`rootEndpoint`, `options`): [`CommissioningServerFailsafeContext`](CommissioningServerFailsafeContext.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rootEndpoint` | [`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md) |
| `options` | [`Options`](../../../common/export/namespaces/FailsafeContext/interfaces/Options.md) |

#### Returns

[`CommissioningServerFailsafeContext`](CommissioningServerFailsafeContext.md)

#### Overrides

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`constructor`](../../../common/export/classes/FailsafeContext.md#constructors)

#### Source

[packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts#L28)

## Properties

### #associatedFabric?

> `private` `optional` **#associatedFabric**: [`Fabric`](../../../fabric/export/classes/Fabric.md)

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`#associatedFabric`](../../../common/export/classes/FailsafeContext.md##associatedfabric)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L40)

***

### #commissioned

> `private` **#commissioned**: [`AsyncObservable`](../../../util/export/interfaces/AsyncObservable.md)\<[], `void`\>

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`#commissioned`](../../../common/export/classes/FailsafeContext.md##commissioned)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L45)

***

### #construction

> `private` **#construction**: [`AsyncConstruction`](../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md)\>

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`#construction`](../../../common/export/classes/FailsafeContext.md##construction)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L39)

***

### #csrSessionId?

> `private` `optional` **#csrSessionId**: `number`

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`#csrSessionId`](../../../common/export/classes/FailsafeContext.md##csrsessionid)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L41)

***

### #fabricBuilder

> `private` **#fabricBuilder**: [`FabricBuilder`](../../../fabric/export/classes/FabricBuilder.md)

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`#fabricBuilder`](../../../common/export/classes/FailsafeContext.md##fabricbuilder)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L43)

***

### #fabrics

> `private` **#fabrics**: [`FabricManager`](../../../fabric/export/classes/FabricManager.md)

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`#fabrics`](../../../common/export/classes/FailsafeContext.md##fabrics)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L37)

***

### #failsafe?

> `private` `optional` **#failsafe**: [`FailsafeTimer`](../../../common/export/classes/FailsafeTimer.md)

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`#failsafe`](../../../common/export/classes/FailsafeContext.md##failsafe)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L38)

***

### #forUpdateNoc?

> `private` `optional` **#forUpdateNoc**: `boolean`

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`#forUpdateNoc`](../../../common/export/classes/FailsafeContext.md##forupdatenoc)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L42)

***

### #rootEndpoint

> `private` **#rootEndpoint**: [`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md)

#### Source

[packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts#L22)

***

### #sessions

> `private` **#sessions**: [`SessionManager`](../../../session/export/classes/SessionManager.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`#sessions`](../../../common/export/classes/FailsafeContext.md##sessions)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L36)

***

### #storedNetworkClusterState

> `private` **#storedNetworkClusterState**: `Map`\<[`EndpointNumber`](../../../datatype/export/README.md#endpointnumber), [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

#### Source

[packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts#L23)

## Accessors

### associatedFabric

> `get` **associatedFabric**(): `undefined` \| [`Fabric`](../../../fabric/export/classes/Fabric.md)

#### Returns

`undefined` \| [`Fabric`](../../../fabric/export/classes/Fabric.md)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L92)

***

### commissioned

> `get` **commissioned**(): [`AsyncObservable`](../../../util/export/interfaces/AsyncObservable.md)\<[], `void`\>

#### Returns

[`AsyncObservable`](../../../util/export/interfaces/AsyncObservable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L88)

***

### construction

> `get` **construction**(): [`AsyncConstruction`](../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md)\>

#### Returns

[`AsyncConstruction`](../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md)\>

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L84)

***

### csrSessionId

> `get` **csrSessionId**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:96](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L96)

***

### fabricIndex

> `get` **fabricIndex**(): `undefined` \| [`FabricIndex`](../../../datatype/export/README.md#fabricindex)

#### Returns

`undefined` \| [`FabricIndex`](../../../datatype/export/README.md#fabricindex)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L80)

***

### forUpdateNoc

> `get` **forUpdateNoc**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:100](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L100)

***

### hasRootCert

> `get` **hasRootCert**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:104](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L104)

## Methods

### #failSafeExpired()

> `private` **#failSafeExpired**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`#failSafeExpired`](../../../common/export/classes/FailsafeContext.md##failsafeexpired)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:242](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L242)

***

### #restoreEndpointState()

> `private` **#restoreEndpointState**(`endpoint`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts#L83)

***

### #storeEndpointState()

> `private` **#storeEndpointState**(`endpoint`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts#L70)

***

### addFabric()

> **addFabric**(`fabric`): `Promise`\<[`FabricIndex`](../../../datatype/export/README.md#fabricindex)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |

#### Returns

`Promise`\<[`FabricIndex`](../../../datatype/export/README.md#fabricindex)\>

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`addFabric`](../../../common/export/classes/FailsafeContext.md#addfabric)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:141](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L141)

***

### buildFabric()

> **buildFabric**(`nocData`): `Promise`\<[`Fabric`](../../../fabric/export/classes/Fabric.md)\>

Build a new Fabric object for a new fabric for the "AddNoc" case of the Operational Credentials cluster.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nocData` | `object` |
| `nocData.adminVendorId` | [`VendorId`](../../../datatype/export/README.md#vendorid) |
| `nocData.caseAdminSubject` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `nocData.icacValue` | `undefined` \| `Uint8Array` |
| `nocData.ipkValue` | `Uint8Array` |
| `nocData.nocValue` | `Uint8Array` |

#### Returns

`Promise`\<[`Fabric`](../../../fabric/export/classes/Fabric.md)\>

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`buildFabric`](../../../common/export/classes/FailsafeContext.md#buildfabric)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:206](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L206)

***

### buildUpdatedFabric()

> **buildUpdatedFabric**(`nocValue`, `icacValue`): `Promise`\<[`Fabric`](../../../fabric/export/classes/Fabric.md)\>

Build a new Fabric object based on an existing fabric for the "UpdateNoc" case of the Operational Credentials
cluster.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nocValue` | `Uint8Array` |
| `icacValue` | `undefined` \| `Uint8Array` |

#### Returns

`Promise`\<[`Fabric`](../../../fabric/export/classes/Fabric.md)\>

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`buildUpdatedFabric`](../../../common/export/classes/FailsafeContext.md#buildupdatedfabric)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:196](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L196)

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`close`](../../../common/export/classes/FailsafeContext.md#close)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:176](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L176)

***

### completeCommission()

> **completeCommission**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`completeCommission`](../../../common/export/classes/FailsafeContext.md#completecommission)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:108](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L108)

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

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`createCertificateSigningRequest`](../../../common/export/classes/FailsafeContext.md#createcertificatesigningrequest)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:158](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L158)

***

### extend()

> **extend**(`fabric`, `expiryLengthSeconds`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | `undefined` \| [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `expiryLengthSeconds` | `number` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`extend`](../../../common/export/classes/FailsafeContext.md#extend)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L72)

***

### getFailSafeContext()

> **getFailSafeContext**(): [`FailsafeTimer`](../../../common/export/classes/FailsafeTimer.md)

#### Returns

[`FailsafeTimer`](../../../common/export/classes/FailsafeTimer.md)

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`getFailSafeContext`](../../../common/export/classes/FailsafeContext.md#getfailsafecontext)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L132)

***

### getNextFabricIndex()

> **getNextFabricIndex**(): [`FabricIndex`](../../../datatype/export/README.md#fabricindex)

#### Returns

[`FabricIndex`](../../../datatype/export/README.md#fabricindex)

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`getNextFabricIndex`](../../../common/export/classes/FailsafeContext.md#getnextfabricindex)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:137](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L137)

***

### removePaseSession()

> **removePaseSession**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`removePaseSession`](../../../common/export/classes/FailsafeContext.md#removepasesession)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:169](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L169)

***

### restoreBreadcrumb()

> **restoreBreadcrumb**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`restoreBreadcrumb`](../../../common/export/classes/FailsafeContext.md#restorebreadcrumb)

#### Source

[packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts#L65)

***

### restoreFabric()

> **restoreFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`restoreFabric`](../../../common/export/classes/FailsafeContext.md#restorefabric)

#### Source

[packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts#L41)

***

### restoreNetworkState()

> **restoreNetworkState**(): `Promise`\<`void`\>

Restore Cluster data when the FailSafe context expired.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`restoreNetworkState`](../../../common/export/classes/FailsafeContext.md#restorenetworkstate)

#### Source

[packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts#L48)

***

### revokeFabric()

> **revokeFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`revokeFabric`](../../../common/export/classes/FailsafeContext.md#revokefabric)

#### Source

[packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts#L52)

***

### rollback()

> `protected` **rollback**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`rollback`](../../../common/export/classes/FailsafeContext.md#rollback)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:248](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L248)

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

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`setRootCert`](../../../common/export/classes/FailsafeContext.md#setrootcert)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:188](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L188)

***

### storeEndpointState()

> **storeEndpointState**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`storeEndpointState`](../../../common/export/classes/FailsafeContext.md#storeendpointstate)

#### Source

[packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts#L37)

***

### updateFabric()

> **updateFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`FailsafeContext`](../../../common/export/classes/FailsafeContext.md).[`updateFabric`](../../../common/export/classes/FailsafeContext.md#updatefabric)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:149](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L149)

***

### create()

> `static` **create**(`rootEndpoint`, `options`): `Promise`\<[`CommissioningServerFailsafeContext`](CommissioningServerFailsafeContext.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rootEndpoint` | [`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md) |
| `options` | [`Options`](../../../common/export/namespaces/FailsafeContext/interfaces/Options.md) |

#### Returns

`Promise`\<[`CommissioningServerFailsafeContext`](CommissioningServerFailsafeContext.md)\>

#### Source

[packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/CommissioningServerFailsafeContext.ts#L33)
