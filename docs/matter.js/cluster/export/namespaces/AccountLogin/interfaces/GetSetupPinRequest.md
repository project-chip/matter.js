[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [AccountLogin](../README.md) / GetSetupPinRequest

# Interface: GetSetupPinRequest

Input to the AccountLogin getSetupPin command

## See

MatterSpecification.v11.Cluster § 6.2.4.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvGetSetupPinRequest`](../README.md#tlvgetsetuppinrequest)\>

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

[packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts#L32)
