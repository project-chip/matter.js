[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [KeypadInput](../modules/cluster_export.KeypadInput.md) / SendKeyResponse

# Interface: SendKeyResponse

[cluster/export](../modules/cluster_export.md).[KeypadInput](../modules/cluster_export.KeypadInput.md).SendKeyResponse

This command shall be generated in response to a SendKey command.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.8.3.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvSendKeyResponse`](../modules/cluster_export.KeypadInput.md#tlvsendkeyresponse)\>

  ↳ **`SendKeyResponse`**

## Table of contents

### Properties

- [status](cluster_export.KeypadInput.SendKeyResponse.md#status)

## Properties

### status

• **status**: [`Status`](../enums/cluster_export.KeypadInput.Status.md)

This shall indicate the of the command.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.8.3.2.1

#### Inherited from

TypeFromSchema.status

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:161](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L161)
