[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [common/export](../README.md) / FailsafeContext

# Class: `abstract` FailsafeContext

A "timed operation" is a command or sequence of commands that operate with a failsafe timer that will abort the
operation if it does not complete within a specific window.

FailsafeContext maintains the failsafe timer and tracks information required to rollback state if the operation
aborts.

Timed operations are exclusive for a node.

## Extended by

- [`CommissioningServerFailsafeContext`](../../../cluster/export/classes/CommissioningServerFailsafeContext.md)

## Constructors

### new FailsafeContext()

> **new FailsafeContext**(`options`): [`FailsafeContext`](FailsafeContext.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`Options`](../namespaces/FailsafeContext/interfaces/Options.md) |

#### Returns

[`FailsafeContext`](FailsafeContext.md)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L47)

## Properties

### #associatedFabric?

> `private` `optional` **#associatedFabric**: [`Fabric`](../../../fabric/export/classes/Fabric.md)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L40)

***

### #commissioned

> `private` **#commissioned**: [`AsyncObservable`](../../../util/export/interfaces/AsyncObservable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L45)

***

### #construction

> `private` **#construction**: [`AsyncConstruction`](../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`FailsafeContext`](FailsafeContext.md)\>

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L39)

***

### #csrSessionId?

> `private` `optional` **#csrSessionId**: `number`

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L41)

***

### #fabricBuilder

> `private` **#fabricBuilder**: [`FabricBuilder`](../../../fabric/export/classes/FabricBuilder.md)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L43)

***

### #fabrics

> `private` **#fabrics**: [`FabricManager`](../../../fabric/export/classes/FabricManager.md)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L37)

***

### #failsafe?

> `private` `optional` **#failsafe**: [`FailsafeTimer`](FailsafeTimer.md)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L38)

***

### #forUpdateNoc?

> `private` `optional` **#forUpdateNoc**: `boolean`

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L42)

***

### #sessions

> `private` **#sessions**: [`SessionManager`](../../../session/export/classes/SessionManager.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\>

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L36)

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

> `get` **construction**(): [`AsyncConstruction`](../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`FailsafeContext`](FailsafeContext.md)\>

#### Returns

[`AsyncConstruction`](../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`FailsafeContext`](FailsafeContext.md)\>

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

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:242](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L242)

***

### addFabric()

> **addFabric**(`fabric`): `Promise`\<[`FabricIndex`](../../../datatype/export/README.md#fabricindex)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |

#### Returns

`Promise`\<[`FabricIndex`](../../../datatype/export/README.md#fabricindex)\>

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

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:196](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L196)

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:176](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L176)

***

### completeCommission()

> **completeCommission**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

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

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L72)

***

### getFailSafeContext()

> **getFailSafeContext**(): [`FailsafeTimer`](FailsafeTimer.md)

#### Returns

[`FailsafeTimer`](FailsafeTimer.md)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L132)

***

### getNextFabricIndex()

> **getNextFabricIndex**(): [`FabricIndex`](../../../datatype/export/README.md#fabricindex)

#### Returns

[`FabricIndex`](../../../datatype/export/README.md#fabricindex)

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:137](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L137)

***

### removePaseSession()

> **removePaseSession**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:169](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L169)

***

### restoreBreadcrumb()

> `abstract` **restoreBreadcrumb**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:316](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L316)

***

### restoreFabric()

> **restoreFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:310](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L310)

***

### restoreNetworkState()

> `abstract` **restoreNetworkState**(): `Promise`\<`void`\>

Restore Cluster data when the FailSafe context expired.

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:308](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L308)

***

### revokeFabric()

> `abstract` **revokeFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:314](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L314)

***

### rollback()

> `protected` **rollback**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

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

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:188](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L188)

***

### storeEndpointState()

> `abstract` **storeEndpointState**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:305](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L305)

***

### updateFabric()

> **updateFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/common/FailsafeContext.ts:149](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeContext.ts#L149)
