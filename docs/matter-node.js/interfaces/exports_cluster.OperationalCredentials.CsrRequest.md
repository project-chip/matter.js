[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OperationalCredentials](../modules/exports_cluster.OperationalCredentials.md) / CsrRequest

# Interface: CsrRequest

[exports/cluster](../modules/exports_cluster.md).[OperationalCredentials](../modules/exports_cluster.OperationalCredentials.md).CsrRequest

Input to the OperationalCredentials csrRequest command

**`See`**

MatterSpecification.v11.Core § 11.17.6.5

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvCsrRequest`](../modules/exports_cluster.OperationalCredentials.md#tlvcsrrequest)\>

  ↳ **`CsrRequest`**

## Table of contents

### Properties

- [csrNonce](exports_cluster.OperationalCredentials.CsrRequest.md#csrnonce)
- [isForUpdateNoc](exports_cluster.OperationalCredentials.CsrRequest.md#isforupdatenoc)

## Properties

### csrNonce

• **csrNonce**: `Uint8Array`

#### Inherited from

TypeFromSchema.csrNonce

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:216

___

### isForUpdateNoc

• `Optional` **isForUpdateNoc**: `boolean`

#### Inherited from

TypeFromSchema.isForUpdateNoc

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:217
