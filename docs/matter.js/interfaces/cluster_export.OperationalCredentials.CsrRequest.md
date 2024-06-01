[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OperationalCredentials](../modules/cluster_export.OperationalCredentials.md) / CsrRequest

# Interface: CsrRequest

[cluster/export](../modules/cluster_export.md).[OperationalCredentials](../modules/cluster_export.OperationalCredentials.md).CsrRequest

Input to the OperationalCredentials csrRequest command

**`See`**

MatterSpecification.v11.Core § 11.17.6.5

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvCsrRequest`](../modules/cluster_export.OperationalCredentials.md#tlvcsrrequest)\>

  ↳ **`CsrRequest`**

## Table of contents

### Properties

- [csrNonce](cluster_export.OperationalCredentials.CsrRequest.md#csrnonce)
- [isForUpdateNoc](cluster_export.OperationalCredentials.CsrRequest.md#isforupdatenoc)

## Properties

### csrNonce

• **csrNonce**: `Uint8Array`

#### Inherited from

TypeFromSchema.csrNonce

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:249](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L249)

___

### isForUpdateNoc

• `Optional` **isForUpdateNoc**: `boolean`

#### Inherited from

TypeFromSchema.isForUpdateNoc

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:250](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L250)
