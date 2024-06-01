[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OperationalCredentials](../modules/exports_cluster.OperationalCredentials.md) / UpdateFabricLabelRequest

# Interface: UpdateFabricLabelRequest

[exports/cluster](../modules/exports_cluster.md).[OperationalCredentials](../modules/exports_cluster.OperationalCredentials.md).UpdateFabricLabelRequest

Input to the OperationalCredentials updateFabricLabel command

**`See`**

MatterSpecification.v11.Core § 11.17.6.11

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvUpdateFabricLabelRequest`](../modules/exports_cluster.OperationalCredentials.md#tlvupdatefabriclabelrequest)\>

  ↳ **`UpdateFabricLabelRequest`**

## Table of contents

### Properties

- [fabricIndex](exports_cluster.OperationalCredentials.UpdateFabricLabelRequest.md#fabricindex)
- [label](exports_cluster.OperationalCredentials.UpdateFabricLabelRequest.md#label)

## Properties

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:555

___

### label

• **label**: `string`

This field shall contain the label to set for the fabric associated with the current secure session.

Effect on Receipt

If the Label field is identical to a Label already in use by a Fabric within the Fabrics list that is not
the accessing fabric, then an NOCResponse with a StatusCode of LabelConflict shall be returned for the
command and there shall NOT be any permanent changes to any Fabric data.

Otherwise, the Label field for the accesing fabric shall immediately be updated to reflect the

Label argument provided. Following the update, an NOCResponse with a StatusCode of OK shall be returned.

If the command was invoked within a fail-safe context after a successful UpdateNOC command, then the label
update shall apply to the pending update state that will be reverted if fail-safe expires prior to a
CommissioningComplete command. In other words, label updates apply to the state of the Fabrics Attribute as
currently visible, even for an existing fabric currently in process of being updated.

**`See`**

MatterSpecification.v11.Core § 11.17.6.11.1

#### Inherited from

TypeFromSchema.label

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:554
