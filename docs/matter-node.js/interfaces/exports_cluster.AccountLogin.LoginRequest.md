[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [AccountLogin](../modules/exports_cluster.AccountLogin.md) / LoginRequest

# Interface: LoginRequest

[exports/cluster](../modules/exports_cluster.md).[AccountLogin](../modules/exports_cluster.AccountLogin.md).LoginRequest

Input to the AccountLogin login command

**`See`**

MatterSpecification.v11.Cluster § 6.2.4.3

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvLoginRequest`](../modules/exports_cluster.AccountLogin.md#tlvloginrequest)\>

  ↳ **`LoginRequest`**

## Table of contents

### Properties

- [setupPin](exports_cluster.AccountLogin.LoginRequest.md#setuppin)
- [tempAccountIdentifier](exports_cluster.AccountLogin.LoginRequest.md#tempaccountidentifier)

## Properties

### setupPin

• **setupPin**: `string`

This field shall provide the setup PIN code as a text string at least 11 characters in length.

**`See`**

MatterSpecification.v11.Cluster § 6.2.4.3.2

#### Inherited from

TypeFromSchema.setupPin

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccountLoginCluster.d.ts:73

___

### tempAccountIdentifier

• **tempAccountIdentifier**: `string`

This field shall specify the client’s temporary account identifier.

**`See`**

MatterSpecification.v11.Cluster § 6.2.4.3.1

#### Inherited from

TypeFromSchema.tempAccountIdentifier

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccountLoginCluster.d.ts:67
