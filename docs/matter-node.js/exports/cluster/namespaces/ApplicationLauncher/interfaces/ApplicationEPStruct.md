[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ApplicationLauncher](../README.md) / ApplicationEPStruct

# Interface: ApplicationEPStruct

This specifies an app along with its corresponding endpoint.

## See

MatterSpecification.v11.Cluster § 6.4.5.3

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvApplicationEPStruct`](../README.md#tlvapplicationepstruct)\>

## Properties

### application

> **application**: [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>

#### Type declaration

##### applicationId

> **applicationId**: [`FieldType`](../../../../tlv/interfaces/FieldType.md)\<`string`\>

This shall indicate the application identifier, expressed as a string, such as "PruneVideo" or "Company X".
This field shall be unique within a catalog.

For the DIAL registry catalog, this value shall be the DIAL prefix (see [DIAL Registry]).

###### See

MatterSpecification.v11.Cluster § 6.4.5.2.2

##### catalogVendorId

> **catalogVendorId**: [`FieldType`](../../../../tlv/interfaces/FieldType.md)\<`number`\>

This shall indicate the CSA-issued vendor ID for the catalog. The DIAL registry shall use value 0x0000.

Content App Platform providers will have their own catalog vendor ID (set to their own Vendor ID) and will
assign an ApplicationID to each Content App.

###### See

MatterSpecification.v11.Cluster § 6.4.5.2.1

#### Inherited from

`TypeFromSchema.application`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:51

***

### endpoint?

> `optional` **endpoint**: [`EndpointNumber`](../../../../datatype/README.md#endpointnumber)

#### Inherited from

`TypeFromSchema.endpoint`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:71
