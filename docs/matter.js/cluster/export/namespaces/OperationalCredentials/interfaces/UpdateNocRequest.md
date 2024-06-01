[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [OperationalCredentials](../README.md) / UpdateNocRequest

# Interface: UpdateNocRequest

Input to the OperationalCredentials updateNoc command

## See

MatterSpecification.v11.Core § 11.17.6.9

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvUpdateNocRequest`](../README.md#tlvupdatenocrequest)\>

## Properties

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:572](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L572)

***

### icacValue?

> `optional` **icacValue**: `Uint8Array`

#### Inherited from

`TypeFromSchema.icacValue`

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:571](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L571)

***

### nocValue

> **nocValue**: `Uint8Array`

#### Inherited from

`TypeFromSchema.nocValue`

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:570](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L570)
