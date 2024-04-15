[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OtaSoftwareUpdateProvider](../modules/exports_cluster.OtaSoftwareUpdateProvider.md) / ApplyUpdateRequest

# Interface: ApplyUpdateRequest

[exports/cluster](../modules/exports_cluster.md).[OtaSoftwareUpdateProvider](../modules/exports_cluster.OtaSoftwareUpdateProvider.md).ApplyUpdateRequest

Input to the OtaSoftwareUpdateProvider applyUpdateRequest command

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.18

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvApplyUpdateRequest`](../modules/exports_cluster.OtaSoftwareUpdateProvider.md#tlvapplyupdaterequest)\>

  ↳ **`ApplyUpdateRequest`**

## Table of contents

### Properties

- [newVersion](exports_cluster.OtaSoftwareUpdateProvider.ApplyUpdateRequest.md#newversion)
- [updateToken](exports_cluster.OtaSoftwareUpdateProvider.ApplyUpdateRequest.md#updatetoken)

## Properties

### newVersion

• **newVersion**: `number`

#### Inherited from

TypeFromSchema.newVersion

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:107

___

### updateToken

• **updateToken**: `Uint8Array`

#### Inherited from

TypeFromSchema.updateToken

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:106
