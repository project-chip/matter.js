[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OperationalCredentials](../modules/exports_cluster.OperationalCredentials.md) / UpdateNocRequest

# Interface: UpdateNocRequest

[exports/cluster](../modules/exports_cluster.md).[OperationalCredentials](../modules/exports_cluster.OperationalCredentials.md).UpdateNocRequest

Input to the OperationalCredentials updateNoc command

**`See`**

MatterSpecification.v11.Core § 11.17.6.9

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvUpdateNocRequest`](../modules/exports_cluster.OperationalCredentials.md#tlvupdatenocrequest)\>

  ↳ **`UpdateNocRequest`**

## Table of contents

### Properties

- [fabricIndex](exports_cluster.OperationalCredentials.UpdateNocRequest.md#fabricindex)
- [icacValue](exports_cluster.OperationalCredentials.UpdateNocRequest.md#icacvalue)
- [nocValue](exports_cluster.OperationalCredentials.UpdateNocRequest.md#nocvalue)

## Properties

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:516

___

### icacValue

• `Optional` **icacValue**: `Uint8Array`

#### Inherited from

TypeFromSchema.icacValue

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:515

___

### nocValue

• **nocValue**: `Uint8Array`

#### Inherited from

TypeFromSchema.nocValue

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:514
