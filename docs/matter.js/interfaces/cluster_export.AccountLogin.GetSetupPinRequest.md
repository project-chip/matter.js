[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [AccountLogin](../modules/cluster_export.AccountLogin.md) / GetSetupPinRequest

# Interface: GetSetupPinRequest

[cluster/export](../modules/cluster_export.md).[AccountLogin](../modules/cluster_export.AccountLogin.md).GetSetupPinRequest

Input to the AccountLogin getSetupPin command

**`See`**

MatterSpecification.v11.Cluster § 6.2.4.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvGetSetupPinRequest`](../modules/cluster_export.AccountLogin.md#tlvgetsetuppinrequest)\>

  ↳ **`GetSetupPinRequest`**

## Table of contents

### Properties

- [tempAccountIdentifier](cluster_export.AccountLogin.GetSetupPinRequest.md#tempaccountidentifier)

## Properties

### tempAccountIdentifier

• **tempAccountIdentifier**: `string`

This attribute shall specify the client’s Temporary Account Identifier. The length of this field shall be at
least 16 characters to protect the account holder against password guessing attacks.

**`See`**

MatterSpecification.v11.Cluster § 6.2.4.1.1

#### Inherited from

TypeFromSchema.tempAccountIdentifier

#### Defined in

[packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts:32](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts#L32)
