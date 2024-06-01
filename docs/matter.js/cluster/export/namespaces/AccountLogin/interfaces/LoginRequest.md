[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [AccountLogin](../README.md) / LoginRequest

# Interface: LoginRequest

Input to the AccountLogin login command

## See

MatterSpecification.v11.Cluster § 6.2.4.3

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvLoginRequest`](../README.md#tlvloginrequest)\>

## Properties

### setupPin

> **setupPin**: `string`

This field shall provide the setup PIN code as a text string at least 11 characters in length.

#### See

MatterSpecification.v11.Cluster § 6.2.4.3.2

#### Inherited from

`TypeFromSchema.setupPin`

#### Source

[packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts#L84)

***

### tempAccountIdentifier

> **tempAccountIdentifier**: `string`

This field shall specify the client’s temporary account identifier.

#### See

MatterSpecification.v11.Cluster § 6.2.4.3.1

#### Inherited from

`TypeFromSchema.tempAccountIdentifier`

#### Source

[packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts#L77)
