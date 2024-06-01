[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OperationalCredentials](../README.md) / NocResponse

# Interface: NocResponse

This command shall be generated in response to the following commands:

  • AddNOC

  • UpdateNOC

  • UpdateFabricLabel

  • RemoveFabric

It provides status information about the success or failure of those commands.

## See

MatterSpecification.v11.Core § 11.17.6.10

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvNocResponse`](../README.md#tlvnocresponse)\>

## Properties

### debugText?

> `optional` **debugText**: `string`

This field may contain debugging textual information from the cluster implementation, which SHOULD NOT be
presented to user interfaces in any way. Its purpose is to help developers in troubleshooting errors and the
contents may go into logs or crash reports.

#### See

MatterSpecification.v11.Core § 11.17.6.10.3

#### Inherited from

`TypeFromSchema.debugText`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:492

***

### fabricIndex?

> `optional` **fabricIndex**: [`FabricIndex`](../../../../datatype/README.md#fabricindex)

This field shall be present whenever StatusCode has a value of OK. If present, it shall contain the Fabric
Index of the Fabric last added, removed or updated.

#### See

MatterSpecification.v11.Core § 11.17.6.10.2

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:484

***

### statusCode

> **statusCode**: [`NodeOperationalCertStatus`](../enumerations/NodeOperationalCertStatus.md)

This field shall contain an NOCStatus value representing the status of an operation involving a NOC.

#### See

MatterSpecification.v11.Core § 11.17.6.10.1

#### Inherited from

`TypeFromSchema.statusCode`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:477
