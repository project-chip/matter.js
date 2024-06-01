[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [AccountLogin](../README.md) / LoginRequest

# Interface: LoginRequest

Input to the AccountLogin login command

## See

MatterSpecification.v11.Cluster § 6.2.4.3

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvLoginRequest`](../README.md#tlvloginrequest)\>

## Properties

### setupPin

> **setupPin**: `string`

This field shall provide the setup PIN code as a text string at least 11 characters in length.

#### See

MatterSpecification.v11.Cluster § 6.2.4.3.2

#### Inherited from

`TypeFromSchema.setupPin`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccountLoginCluster.d.ts:73

***

### tempAccountIdentifier

> **tempAccountIdentifier**: `string`

This field shall specify the client’s temporary account identifier.

#### See

MatterSpecification.v11.Cluster § 6.2.4.3.1

#### Inherited from

`TypeFromSchema.tempAccountIdentifier`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccountLoginCluster.d.ts:67
