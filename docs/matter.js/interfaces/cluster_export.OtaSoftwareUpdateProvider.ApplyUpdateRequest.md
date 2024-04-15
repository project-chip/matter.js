[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OtaSoftwareUpdateProvider](../modules/cluster_export.OtaSoftwareUpdateProvider.md) / ApplyUpdateRequest

# Interface: ApplyUpdateRequest

[cluster/export](../modules/cluster_export.md).[OtaSoftwareUpdateProvider](../modules/cluster_export.OtaSoftwareUpdateProvider.md).ApplyUpdateRequest

Input to the OtaSoftwareUpdateProvider applyUpdateRequest command

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.18

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvApplyUpdateRequest`](../modules/cluster_export.OtaSoftwareUpdateProvider.md#tlvapplyupdaterequest)\>

  ↳ **`ApplyUpdateRequest`**

## Table of contents

### Properties

- [newVersion](cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateRequest.md#newversion)
- [updateToken](cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateRequest.md#updatetoken)

## Properties

### newVersion

• **newVersion**: `number`

#### Inherited from

TypeFromSchema.newVersion

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L127)

___

### updateToken

• **updateToken**: `Uint8Array`

#### Inherited from

TypeFromSchema.updateToken

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:126](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L126)
