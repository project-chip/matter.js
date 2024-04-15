[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [AccountLogin](../modules/cluster_export.AccountLogin.md) / GetSetupPinResponse

# Interface: GetSetupPinResponse

[cluster/export](../modules/cluster_export.md).[AccountLogin](../modules/cluster_export.AccountLogin.md).GetSetupPinResponse

This message is sent in response to the GetSetupPIN command, and contains the Setup PIN code, or null when the
account identified in the request does not match the active account of the running Content App.

**`See`**

MatterSpecification.v11.Cluster § 6.2.4.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvGetSetupPinResponse`](../modules/cluster_export.AccountLogin.md#tlvgetsetuppinresponse)\>

  ↳ **`GetSetupPinResponse`**

## Table of contents

### Properties

- [setupPin](cluster_export.AccountLogin.GetSetupPinResponse.md#setuppin)

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

[packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts#L55)
