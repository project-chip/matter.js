[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / CommissioningServerFailsafeContext

# Class: CommissioningServerFailsafeContext

[FailsafeContext](../../common/classes/FailsafeContext.md) implementation for [EndpointInterface](../-internal-/interfaces/EndpointInterface.md) API.

## Extends

- [`FailsafeContext`](../../common/classes/FailsafeContext.md)

## Constructors

### new CommissioningServerFailsafeContext()

> **new CommissioningServerFailsafeContext**(`rootEndpoint`, `options`): [`CommissioningServerFailsafeContext`](CommissioningServerFailsafeContext.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rootEndpoint` | [`EndpointInterface`](../-internal-/interfaces/EndpointInterface.md) |
| `options` | [`Options`](../../common/namespaces/FailsafeContext/interfaces/Options.md) |

#### Returns

[`CommissioningServerFailsafeContext`](CommissioningServerFailsafeContext.md)

#### Overrides

[`FailsafeContext`](../../common/classes/FailsafeContext.md).[`constructor`](../../common/classes/FailsafeContext.md#constructors)

#### Source

packages/matter.js/dist/esm/cluster/server/CommissioningServerFailsafeContext.d.ts:14

## Properties

### #private

> `private` **#private**: `any`

#### Inherited from

[`FailsafeContext`](../../common/classes/FailsafeContext.md).[`#private`](../../common/classes/FailsafeContext.md##private)

#### Source

packages/matter.js/dist/esm/cluster/server/CommissioningServerFailsafeContext.d.ts:13

***

### #private

> `private` **#private**: `any`

#### Inherited from

`FailsafeContext.#private`

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:29

## Accessors

### associatedFabric

> `get` **associatedFabric**(): `undefined` \| [`Fabric`](../../fabric/classes/Fabric.md)

#### Returns

`undefined` \| [`Fabric`](../../fabric/classes/Fabric.md)

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:35

***

### commissioned

> `get` **commissioned**(): [`AsyncObservable`](../../../util/export/interfaces/AsyncObservable.md)\<[], `void`\>

#### Returns

[`AsyncObservable`](../../../util/export/interfaces/AsyncObservable.md)\<[], `void`\>

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:34

***

### construction

> `get` **construction**(): [`AsyncConstruction`](../-internal-/interfaces/AsyncConstruction.md)\<[`FailsafeContext`](../../common/classes/FailsafeContext.md)\>

#### Returns

[`AsyncConstruction`](../-internal-/interfaces/AsyncConstruction.md)\<[`FailsafeContext`](../../common/classes/FailsafeContext.md)\>

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:33

***

### csrSessionId

> `get` **csrSessionId**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:36

***

### fabricIndex

> `get` **fabricIndex**(): `undefined` \| [`FabricIndex`](../../datatype/README.md#fabricindex)

#### Returns

`undefined` \| [`FabricIndex`](../../datatype/README.md#fabricindex)

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:32

***

### forUpdateNoc

> `get` **forUpdateNoc**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:37

***

### hasRootCert

> `get` **hasRootCert**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:38

## Methods

### addFabric()

> **addFabric**(`fabric`): `Promise`\<[`FabricIndex`](../../datatype/README.md#fabricindex)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |

#### Returns

`Promise`\<[`FabricIndex`](../../datatype/README.md#fabricindex)\>

#### Inherited from

[`FailsafeContext`](../../common/classes/FailsafeContext.md).[`addFabric`](../../common/classes/FailsafeContext.md#addfabric)

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:42

***

### buildFabric()

> **buildFabric**(`nocData`): `Promise`\<[`Fabric`](../../fabric/classes/Fabric.md)\>

Build a new Fabric object for a new fabric for the "AddNoc" case of the Operational Credentials cluster.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nocData` | `object` |
| `nocData.adminVendorId` | [`VendorId`](../../datatype/README.md#vendorid) |
| `nocData.caseAdminSubject` | [`NodeId`](../../datatype/README.md#nodeid) |
| `nocData.icacValue` | `undefined` \| `Uint8Array` |
| `nocData.ipkValue` | `Uint8Array` |
| `nocData.nocValue` | `Uint8Array` |

#### Returns

`Promise`\<[`Fabric`](../../fabric/classes/Fabric.md)\>

#### Inherited from

[`FailsafeContext`](../../common/classes/FailsafeContext.md).[`buildFabric`](../../common/classes/FailsafeContext.md#buildfabric)

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:59

***

### buildUpdatedFabric()

> **buildUpdatedFabric**(`nocValue`, `icacValue`): `Promise`\<[`Fabric`](../../fabric/classes/Fabric.md)\>

Build a new Fabric object based on an existing fabric for the "UpdateNoc" case of the Operational Credentials
cluster.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nocValue` | `Uint8Array` |
| `icacValue` | `undefined` \| `Uint8Array` |

#### Returns

`Promise`\<[`Fabric`](../../fabric/classes/Fabric.md)\>

#### Inherited from

[`FailsafeContext`](../../common/classes/FailsafeContext.md).[`buildUpdatedFabric`](../../common/classes/FailsafeContext.md#buildupdatedfabric)

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:57

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`FailsafeContext`](../../common/classes/FailsafeContext.md).[`close`](../../common/classes/FailsafeContext.md#close)

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:50

***

### completeCommission()

> **completeCommission**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`FailsafeContext`](../../common/classes/FailsafeContext.md).[`completeCommission`](../../common/classes/FailsafeContext.md#completecommission)

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:39

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

[`FailsafeContext`](../../common/classes/FailsafeContext.md).[`createCertificateSigningRequest`](../../common/classes/FailsafeContext.md#createcertificatesigningrequest)

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:48

***

### extend()

> **extend**(`fabric`, `expiryLengthSeconds`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | `undefined` \| [`Fabric`](../../fabric/classes/Fabric.md) |
| `expiryLengthSeconds` | `number` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`FailsafeContext`](../../common/classes/FailsafeContext.md).[`extend`](../../common/classes/FailsafeContext.md#extend)

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:31

***

### getFailSafeContext()

> **getFailSafeContext**(): [`FailsafeTimer`](../../common/classes/FailsafeTimer.md)

#### Returns

[`FailsafeTimer`](../../common/classes/FailsafeTimer.md)

#### Inherited from

[`FailsafeContext`](../../common/classes/FailsafeContext.md).[`getFailSafeContext`](../../common/classes/FailsafeContext.md#getfailsafecontext)

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:40

***

### getNextFabricIndex()

> **getNextFabricIndex**(): [`FabricIndex`](../../datatype/README.md#fabricindex)

#### Returns

[`FabricIndex`](../../datatype/README.md#fabricindex)

#### Inherited from

[`FailsafeContext`](../../common/classes/FailsafeContext.md).[`getNextFabricIndex`](../../common/classes/FailsafeContext.md#getnextfabricindex)

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:41

***

### removePaseSession()

> **removePaseSession**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`FailsafeContext`](../../common/classes/FailsafeContext.md).[`removePaseSession`](../../common/classes/FailsafeContext.md#removepasesession)

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:49

***

### restoreBreadcrumb()

> **restoreBreadcrumb**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[`FailsafeContext`](../../common/classes/FailsafeContext.md).[`restoreBreadcrumb`](../../common/classes/FailsafeContext.md#restorebreadcrumb)

#### Source

packages/matter.js/dist/esm/cluster/server/CommissioningServerFailsafeContext.d.ts:20

***

### restoreFabric()

> **restoreFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`FailsafeContext`](../../common/classes/FailsafeContext.md).[`restoreFabric`](../../common/classes/FailsafeContext.md#restorefabric)

#### Source

packages/matter.js/dist/esm/cluster/server/CommissioningServerFailsafeContext.d.ts:17

***

### restoreNetworkState()

> **restoreNetworkState**(): `Promise`\<`void`\>

Restore Cluster data when the FailSafe context expired.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`FailsafeContext`](../../common/classes/FailsafeContext.md).[`restoreNetworkState`](../../common/classes/FailsafeContext.md#restorenetworkstate)

#### Source

packages/matter.js/dist/esm/cluster/server/CommissioningServerFailsafeContext.d.ts:18

***

### revokeFabric()

> **revokeFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`FailsafeContext`](../../common/classes/FailsafeContext.md).[`revokeFabric`](../../common/classes/FailsafeContext.md#revokefabric)

#### Source

packages/matter.js/dist/esm/cluster/server/CommissioningServerFailsafeContext.d.ts:19

***

### rollback()

> `protected` **rollback**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`FailsafeContext`](../../common/classes/FailsafeContext.md).[`rollback`](../../common/classes/FailsafeContext.md#rollback)

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:66

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

[`FailsafeContext`](../../common/classes/FailsafeContext.md).[`setRootCert`](../../common/classes/FailsafeContext.md#setrootcert)

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:52

***

### storeEndpointState()

> **storeEndpointState**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[`FailsafeContext`](../../common/classes/FailsafeContext.md).[`storeEndpointState`](../../common/classes/FailsafeContext.md#storeendpointstate)

#### Source

packages/matter.js/dist/esm/cluster/server/CommissioningServerFailsafeContext.d.ts:16

***

### updateFabric()

> **updateFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`FailsafeContext`](../../common/classes/FailsafeContext.md).[`updateFabric`](../../common/classes/FailsafeContext.md#updatefabric)

#### Source

packages/matter.js/dist/esm/common/FailsafeContext.d.ts:43

***

### create()

> `static` **create**(`rootEndpoint`, `options`): `Promise`\<[`CommissioningServerFailsafeContext`](CommissioningServerFailsafeContext.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rootEndpoint` | [`EndpointInterface`](../-internal-/interfaces/EndpointInterface.md) |
| `options` | [`Options`](../../common/namespaces/FailsafeContext/interfaces/Options.md) |

#### Returns

`Promise`\<[`CommissioningServerFailsafeContext`](CommissioningServerFailsafeContext.md)\>

#### Source

packages/matter.js/dist/esm/cluster/server/CommissioningServerFailsafeContext.d.ts:15
