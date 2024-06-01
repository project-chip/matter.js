[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [DoorLock](../README.md) / GetCredentialStatusResponse

# Interface: GetCredentialStatusResponse

## See

MatterSpecification.v11.Cluster § 5.2.4

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvGetCredentialStatusResponse`](../README.md#tlvgetcredentialstatusresponse)\>

## Properties

### creatorFabricIndex

> **creatorFabricIndex**: `null` \| [`FabricIndex`](../../../../datatype/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.creatorFabricIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:417

***

### credentialExists

> **credentialExists**: `boolean`

#### Inherited from

`TypeFromSchema.credentialExists`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:415

***

### lastModifiedFabricIndex

> **lastModifiedFabricIndex**: `null` \| [`FabricIndex`](../../../../datatype/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.lastModifiedFabricIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:418

***

### nextCredentialIndex

> **nextCredentialIndex**: `null` \| `number`

#### Inherited from

`TypeFromSchema.nextCredentialIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:419

***

### userIndex

> **userIndex**: `null` \| `number`

#### Inherited from

`TypeFromSchema.userIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:416
