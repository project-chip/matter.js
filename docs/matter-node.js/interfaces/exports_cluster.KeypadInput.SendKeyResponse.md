[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [KeypadInput](../modules/exports_cluster.KeypadInput.md) / SendKeyResponse

# Interface: SendKeyResponse

[exports/cluster](../modules/exports_cluster.md).[KeypadInput](../modules/exports_cluster.KeypadInput.md).SendKeyResponse

This command shall be generated in response to a SendKey command.

**`See`**

MatterSpecification.v11.Cluster § 6.8.3.2

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvSendKeyResponse`](../modules/exports_cluster.KeypadInput.md#tlvsendkeyresponse)\>

  ↳ **`SendKeyResponse`**

## Table of contents

### Properties

- [status](exports_cluster.KeypadInput.SendKeyResponse.md#status)

## Properties

### status

• **status**: [`Status`](../enums/exports_cluster.KeypadInput.Status.md)

This shall indicate the of the command.

**`See`**

MatterSpecification.v11.Cluster § 6.8.3.2.1

#### Inherited from

TypeFromSchema.status

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:149
