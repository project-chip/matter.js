[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [OperationalCredentials](../README.md) / CsrRequest

# Interface: CsrRequest

Input to the OperationalCredentials csrRequest command

## See

MatterSpecification.v11.Core § 11.17.6.5

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvCsrRequest`](../README.md#tlvcsrrequest)\>

## Properties

### csrNonce

> **csrNonce**: `Uint8Array`

#### Inherited from

`TypeFromSchema.csrNonce`

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:249](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L249)

***

### isForUpdateNoc?

> `optional` **isForUpdateNoc**: `boolean`

#### Inherited from

`TypeFromSchema.isForUpdateNoc`

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:250](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L250)
