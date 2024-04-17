[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [AccountLogin](../modules/exports_cluster.AccountLogin.md) / GetSetupPinResponse

# Interface: GetSetupPinResponse

[exports/cluster](../modules/exports_cluster.md).[AccountLogin](../modules/exports_cluster.AccountLogin.md).GetSetupPinResponse

This message is sent in response to the GetSetupPIN command, and contains the Setup PIN code, or null when the
account identified in the request does not match the active account of the running Content App.

**`See`**

MatterSpecification.v11.Cluster § 6.2.4.2

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvGetSetupPinResponse`](../modules/exports_cluster.AccountLogin.md#tlvgetsetuppinresponse)\>

  ↳ **`GetSetupPinResponse`**

## Table of contents

### Properties

- [setupPin](exports_cluster.AccountLogin.GetSetupPinResponse.md#setuppin)

## Properties

### setupPin

• **setupPin**: ``null`` \| `string`

This field shall provide the setup PIN code as a text string at least 11 characters in length or null to
indicate that the accounts do not match.

**`See`**

MatterSpecification.v11.Cluster § 6.2.4.2.1

#### Inherited from

TypeFromSchema.setupPin

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccountLoginCluster.d.ts:46
