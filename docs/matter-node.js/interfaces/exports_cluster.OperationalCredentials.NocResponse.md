[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OperationalCredentials](../modules/exports_cluster.OperationalCredentials.md) / NocResponse

# Interface: NocResponse

[exports/cluster](../modules/exports_cluster.md).[OperationalCredentials](../modules/exports_cluster.OperationalCredentials.md).NocResponse

This command shall be generated in response to the following commands:

  • AddNOC

  • UpdateNOC

  • UpdateFabricLabel

  • RemoveFabric

It provides status information about the success or failure of those commands.

**`See`**

MatterSpecification.v11.Core § 11.17.6.10

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvNocResponse`](../modules/exports_cluster.OperationalCredentials.md#tlvnocresponse)\>

  ↳ **`NocResponse`**

## Table of contents

### Properties

- [debugText](exports_cluster.OperationalCredentials.NocResponse.md#debugtext)
- [fabricIndex](exports_cluster.OperationalCredentials.NocResponse.md#fabricindex)
- [statusCode](exports_cluster.OperationalCredentials.NocResponse.md#statuscode)

## Properties

### debugText

• `Optional` **debugText**: `string`

This field may contain debugging textual information from the cluster implementation, which SHOULD NOT be
presented to user interfaces in any way. Its purpose is to help developers in troubleshooting errors and the
contents may go into logs or crash reports.

**`See`**

MatterSpecification.v11.Core § 11.17.6.10.3

#### Inherited from

TypeFromSchema.debugText

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:489

___

### fabricIndex

• `Optional` **fabricIndex**: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

This field shall be present whenever StatusCode has a value of OK. If present, it shall contain the Fabric
Index of the Fabric last added, removed or updated.

**`See`**

MatterSpecification.v11.Core § 11.17.6.10.2

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:481

___

### statusCode

• **statusCode**: [`NodeOperationalCertStatus`](../enums/exports_cluster.OperationalCredentials.NodeOperationalCertStatus.md)

This field shall contain an NOCStatus value representing the status of an operation involving a NOC.

**`See`**

MatterSpecification.v11.Core § 11.17.6.10.1

#### Inherited from

TypeFromSchema.statusCode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:474
