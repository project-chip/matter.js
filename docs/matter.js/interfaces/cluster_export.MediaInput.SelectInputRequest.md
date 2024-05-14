[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [MediaInput](../modules/cluster_export.MediaInput.md) / SelectInputRequest

# Interface: SelectInputRequest

[cluster/export](../modules/cluster_export.md).[MediaInput](../modules/cluster_export.MediaInput.md).SelectInputRequest

Input to the MediaInput selectInput command

**`See`**

MatterSpecification.v11.Cluster § 6.9.4.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvSelectInputRequest`](../modules/cluster_export.MediaInput.md#tlvselectinputrequest)\>

  ↳ **`SelectInputRequest`**

## Table of contents

### Properties

- [index](cluster_export.MediaInput.SelectInputRequest.md#index)

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

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:116](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L116)
