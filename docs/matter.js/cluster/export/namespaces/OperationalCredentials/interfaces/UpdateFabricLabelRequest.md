[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [OperationalCredentials](../README.md) / UpdateFabricLabelRequest

# Interface: UpdateFabricLabelRequest

Input to the OperationalCredentials updateFabricLabel command

## See

MatterSpecification.v11.Core § 11.17.6.11

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvUpdateFabricLabelRequest`](../README.md#tlvupdatefabriclabelrequest)\>

## Properties

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:610](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L610)

***

### label

> **label**: `string`

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

#### See

MatterSpecification.v11.Core § 11.17.6.11.1

#### Inherited from

`TypeFromSchema.label`

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:608](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L608)
