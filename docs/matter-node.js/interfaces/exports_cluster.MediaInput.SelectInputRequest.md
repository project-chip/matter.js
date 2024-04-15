[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [MediaInput](../modules/exports_cluster.MediaInput.md) / SelectInputRequest

# Interface: SelectInputRequest

[exports/cluster](../modules/exports_cluster.md).[MediaInput](../modules/exports_cluster.MediaInput.md).SelectInputRequest

Input to the MediaInput selectInput command

**`See`**

MatterSpecification.v11.Cluster § 6.9.4.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvSelectInputRequest`](../modules/exports_cluster.MediaInput.md#tlvselectinputrequest)\>

  ↳ **`SelectInputRequest`**

## Table of contents

### Properties

- [index](exports_cluster.MediaInput.SelectInputRequest.md#index)

## Properties

### index

• **index**: `number`

This shall indicate the index field of the InputInfoStruct from the InputList attribute in which to change
to.

**`See`**

MatterSpecification.v11.Cluster § 6.9.4.1.1

#### Inherited from

TypeFromSchema.index

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:103
