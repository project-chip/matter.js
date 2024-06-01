[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [DoorLock](../README.md) / GetCredentialStatusRequest

# Interface: GetCredentialStatusRequest

Input to the DoorLock getCredentialStatus command

## See

MatterSpecification.v11.Cluster § 5.2.4

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvGetCredentialStatusRequest`](../README.md#tlvgetcredentialstatusrequest)\>

## Properties

### credential

> **credential**: [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

#### Type declaration

##### credentialIndex

> **credentialIndex**: [`FieldType`](../../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This is the index of the specific credential used to authorize the lock operation in the list of credentials
identified by CredentialType (e.g. schedule, PIN, RFID, etc.). This shall be set to 0 if CredentialType is
ProgrammingPIN or does not correspond to a list that can be indexed into.

###### See

MatterSpecification.v11.Cluster § 5.2.6.3.2

##### credentialType

> **credentialType**: [`FieldType`](../../../../../tlv/export/interfaces/FieldType.md)\<[`CredentialType`](../enumerations/CredentialType.md)\>

The credential type used to authorize the lock operation.

###### See

MatterSpecification.v11.Cluster § 5.2.6.3.1

#### Inherited from

`TypeFromSchema.credential`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:406](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L406)
