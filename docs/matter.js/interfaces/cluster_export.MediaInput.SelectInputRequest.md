[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [MediaInput](../modules/cluster_export.MediaInput.md) / SelectInputRequest

# Interface: SelectInputRequest

[cluster/export](../modules/cluster_export.md).[MediaInput](../modules/cluster_export.MediaInput.md).SelectInputRequest

Input to the MediaInput selectInput command

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.9.4.1

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

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.9.4.1.1

#### Inherited from

TypeFromSchema.index

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:117](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L117)
