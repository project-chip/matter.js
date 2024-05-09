[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DoorLock](../modules/exports_cluster.DoorLock.md) / GetCredentialStatusRequest

# Interface: GetCredentialStatusRequest

[exports/cluster](../modules/exports_cluster.md).[DoorLock](../modules/exports_cluster.DoorLock.md).GetCredentialStatusRequest

Input to the DoorLock getCredentialStatus command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvGetCredentialStatusRequest`](../modules/exports_cluster.DoorLock.md#tlvgetcredentialstatusrequest)\>

  ↳ **`GetCredentialStatusRequest`**

## Table of contents

### Properties

- [credential](exports_cluster.DoorLock.GetCredentialStatusRequest.md#credential)

## Properties

### credential

• **credential**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](exports_tlv.FieldType.md)\<[`CredentialType`](../enums/exports_cluster.DoorLock.CredentialType.md)\>  }\>

#### Inherited from

TypeFromSchema.credential

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:387
