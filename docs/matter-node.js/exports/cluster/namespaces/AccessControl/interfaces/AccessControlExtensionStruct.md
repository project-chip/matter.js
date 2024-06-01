[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [AccessControl](../README.md) / AccessControlExtensionStruct

# Interface: AccessControlExtensionStruct

## See

MatterSpecification.v11.Core § 9.10.4.6

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvAccessControlExtensionStruct`](../README.md#tlvaccesscontrolextensionstruct)\>

## Properties

### data

> **data**: `Uint8Array`

This field may be used by manufacturers to store arbitrary TLV-encoded data related to a fabric’s

Access Control Entries.

The contents shall consist of a top-level anonymous list; each list element shall include a profile-specific
tag encoded in fully-qualified form.

Administrators may iterate over this list of elements, and interpret selected elements at their discretion.
The content of each element is not specified, but may be coordinated among manufacturers at their discretion.

#### See

MatterSpecification.v11.Core § 9.10.4.6.1

#### Inherited from

`TypeFromSchema.data`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:206

***

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../datatype/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:207
