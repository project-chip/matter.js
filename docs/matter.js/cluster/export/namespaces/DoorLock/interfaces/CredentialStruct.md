[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [DoorLock](../README.md) / CredentialStruct

# Interface: CredentialStruct

The CredentialStruct is used in LockOperation event and Get User Record Response command and shall indicate the
credential types and their corresponding indices (if any) for the event or user record.

## See

MatterSpecification.v11.Cluster § 5.2.6.3

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvCredentialStruct`](../README.md#tlvcredentialstruct)\>

## Properties

### credentialIndex

> **credentialIndex**: `number`

This is the index of the specific credential used to authorize the lock operation in the list of credentials
identified by CredentialType (e.g. schedule, PIN, RFID, etc.). This shall be set to 0 if CredentialType is
ProgrammingPIN or does not correspond to a list that can be indexed into.

#### See

MatterSpecification.v11.Cluster § 5.2.6.3.2

#### Inherited from

`TypeFromSchema.credentialIndex`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:310](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L310)

***

### credentialType

> **credentialType**: [`CredentialType`](../enumerations/CredentialType.md)

The credential type used to authorize the lock operation.

#### See

MatterSpecification.v11.Cluster § 5.2.6.3.1

#### Inherited from

`TypeFromSchema.credentialType`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:301](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L301)
