[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DoorLock](../modules/exports_cluster.DoorLock.md) / ClearCredentialRequest

# Interface: ClearCredentialRequest

[exports/cluster](../modules/exports_cluster.md).[DoorLock](../modules/exports_cluster.DoorLock.md).ClearCredentialRequest

Input to the DoorLock clearCredential command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvClearCredentialRequest`](../modules/exports_cluster.DoorLock.md#tlvclearcredentialrequest)\>

  ↳ **`ClearCredentialRequest`**

## Table of contents

### Properties

- [credential](exports_cluster.DoorLock.ClearCredentialRequest.md#credential)

## Properties

### credential

• **credential**: ``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](exports_tlv.FieldType.md)\<[`CredentialType`](../enums/exports_cluster.DoorLock.CredentialType.md)\>  }\>

#### Inherited from

TypeFromSchema.credential

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:432
