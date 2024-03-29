[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [AccountLogin](../modules/cluster_export.AccountLogin.md) / LoginRequest

# Interface: LoginRequest

[cluster/export](../modules/cluster_export.md).[AccountLogin](../modules/cluster_export.AccountLogin.md).LoginRequest

Input to the AccountLogin login command

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.2.4.3

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvLoginRequest`](../modules/cluster_export.AccountLogin.md#tlvloginrequest)\>

  ↳ **`LoginRequest`**

## Table of contents

### Properties

- [setupPin](cluster_export.AccountLogin.LoginRequest.md#setuppin)
- [tempAccountIdentifier](cluster_export.AccountLogin.LoginRequest.md#tempaccountidentifier)

## Properties

### setupPin

• **setupPin**: `string`

This field shall provide the setup PIN code as a text string at least 11 characters in length.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.2.4.3.2

#### Inherited from

TypeFromSchema.setupPin

#### Defined in

[packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts:85](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts#L85)

___

### tempAccountIdentifier

• **tempAccountIdentifier**: `string`

This field shall specify the client’s temporary account identifier.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.2.4.3.1

#### Inherited from

TypeFromSchema.tempAccountIdentifier

#### Defined in

[packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts:78](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts#L78)
