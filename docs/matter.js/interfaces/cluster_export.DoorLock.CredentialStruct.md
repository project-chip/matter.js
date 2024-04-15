[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / CredentialStruct

# Interface: CredentialStruct

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).CredentialStruct

The CredentialStruct is used in LockOperation event and Get User Record Response command and shall indicate the
credential types and their corresponding indices (if any) for the event or user record.

**`See`**

MatterSpecification.v11.Cluster § 5.2.6.3

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvCredentialStruct`](../modules/cluster_export.DoorLock.md#tlvcredentialstruct)\>

  ↳ **`CredentialStruct`**

## Table of contents

### Properties

- [credentialIndex](cluster_export.DoorLock.CredentialStruct.md#credentialindex)
- [credentialType](cluster_export.DoorLock.CredentialStruct.md#credentialtype)

## Properties

### credentialIndex

• **credentialIndex**: `number`

This is the index of the specific credential used to authorize the lock operation in the list of credentials
identified by CredentialType (e.g. schedule, PIN, RFID, etc.). This shall be set to 0 if CredentialType is
ProgrammingPIN or does not correspond to a list that can be indexed into.

**`See`**

MatterSpecification.v11.Cluster § 5.2.6.3.2

#### Inherited from

TypeFromSchema.credentialIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:310](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L310)

___

### credentialType

• **credentialType**: [`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)

The credential type used to authorize the lock operation.

**`See`**

MatterSpecification.v11.Cluster § 5.2.6.3.1

#### Inherited from

TypeFromSchema.credentialType

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:301](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L301)
