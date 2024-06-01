[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OperationalCredentials](../README.md) / UpdateNocRequest

# Interface: UpdateNocRequest

Input to the OperationalCredentials updateNoc command

## See

MatterSpecification.v11.Core § 11.17.6.9

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvUpdateNocRequest`](../README.md#tlvupdatenocrequest)\>

## Properties

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../datatype/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:519

***

### icacValue?

> `optional` **icacValue**: `Uint8Array`

#### Inherited from

`TypeFromSchema.icacValue`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:518

***

### nocValue

> **nocValue**: `Uint8Array`

#### Inherited from

`TypeFromSchema.nocValue`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:517
