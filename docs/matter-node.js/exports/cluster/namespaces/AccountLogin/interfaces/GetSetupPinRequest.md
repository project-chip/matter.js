[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [AccountLogin](../README.md) / GetSetupPinRequest

# Interface: GetSetupPinRequest

Input to the AccountLogin getSetupPin command

## See

MatterSpecification.v11.Cluster § 6.2.4.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvGetSetupPinRequest`](../README.md#tlvgetsetuppinrequest)\>

## Properties

### tempAccountIdentifier

> **tempAccountIdentifier**: `string`

This attribute shall specify the client’s Temporary Account Identifier. The length of this field shall be at
least 16 characters to protect the account holder against password guessing attacks.

#### See

MatterSpecification.v11.Cluster § 6.2.4.1.1

#### Inherited from

`TypeFromSchema.tempAccountIdentifier`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccountLoginCluster.d.ts:24
