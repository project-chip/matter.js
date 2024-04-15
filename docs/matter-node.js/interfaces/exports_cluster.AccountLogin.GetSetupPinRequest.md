[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [AccountLogin](../modules/exports_cluster.AccountLogin.md) / GetSetupPinRequest

# Interface: GetSetupPinRequest

[exports/cluster](../modules/exports_cluster.md).[AccountLogin](../modules/exports_cluster.AccountLogin.md).GetSetupPinRequest

Input to the AccountLogin getSetupPin command

**`See`**

MatterSpecification.v11.Cluster § 6.2.4.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvGetSetupPinRequest`](../modules/exports_cluster.AccountLogin.md#tlvgetsetuppinrequest)\>

  ↳ **`GetSetupPinRequest`**

## Table of contents

### Properties

- [tempAccountIdentifier](exports_cluster.AccountLogin.GetSetupPinRequest.md#tempaccountidentifier)

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

packages/matter.js/dist/esm/cluster/definitions/AccountLoginCluster.d.ts:24
