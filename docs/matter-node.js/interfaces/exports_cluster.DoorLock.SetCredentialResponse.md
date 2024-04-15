[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DoorLock](../modules/exports_cluster.DoorLock.md) / SetCredentialResponse

# Interface: SetCredentialResponse

[exports/cluster](../modules/exports_cluster.md).[DoorLock](../modules/exports_cluster.DoorLock.md).SetCredentialResponse

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvSetCredentialResponse`](../modules/exports_cluster.DoorLock.md#tlvsetcredentialresponse)\>

  ↳ **`SetCredentialResponse`**

## Table of contents

### Properties

- [nextCredentialIndex](exports_cluster.DoorLock.SetCredentialResponse.md#nextcredentialindex)
- [status](exports_cluster.DoorLock.SetCredentialResponse.md#status)
- [userIndex](exports_cluster.DoorLock.SetCredentialResponse.md#userindex)

## Properties

### nextCredentialIndex

• **nextCredentialIndex**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.nextCredentialIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:374

___

### status

• **status**: [`DlStatus`](../enums/exports_cluster.DoorLock.DlStatus.md)

#### Inherited from

TypeFromSchema.status

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:372

___

### userIndex

• **userIndex**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.userIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:373
