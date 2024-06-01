[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OperationalCredentials](../README.md) / CsrRequest

# Interface: CsrRequest

Input to the OperationalCredentials csrRequest command

## See

MatterSpecification.v11.Core § 11.17.6.5

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvCsrRequest`](../README.md#tlvcsrrequest)\>

## Properties

### csrNonce

> **csrNonce**: `Uint8Array`

#### Inherited from

`TypeFromSchema.csrNonce`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:216

***

### isForUpdateNoc?

> `optional` **isForUpdateNoc**: `boolean`

#### Inherited from

`TypeFromSchema.isForUpdateNoc`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:217
