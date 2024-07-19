[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / GetCredentialStatusRequest

# Interface: GetCredentialStatusRequest

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).GetCredentialStatusRequest

Input to the DoorLock getCredentialStatus command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvGetCredentialStatusRequest`](../modules/cluster_export.DoorLock.md#tlvgetcredentialstatusrequest)\>

  ↳ **`GetCredentialStatusRequest`**

## Table of contents

### Properties

- [credential](cluster_export.DoorLock.GetCredentialStatusRequest.md#credential)

## Properties

### credential

• **credential**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>

#### Inherited from

TypeFromSchema.credential

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:406](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L406)
