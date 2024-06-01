[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Actions](../README.md) / EndpointListStruct

# Interface: EndpointListStruct

This data type holds the details of a single endpoint list, which relates to a set of endpoints that have some
logical relation, and contains the data fields below.

## See

MatterSpecification.v11.Core § 9.14.4.7

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvEndpointListStruct`](../README.md#tlvendpointliststruct)\>

## Properties

### endpointListId

> **endpointListId**: `number`

This field shall provide an unique identifier used to identify the endpoint list.

#### See

MatterSpecification.v11.Core § 9.14.4.7.1

#### Inherited from

`TypeFromSchema.endpointListId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:330

***

### endpoints

> **endpoints**: [`EndpointNumber`](../../../../datatype/README.md#endpointnumber)[]

This field shall provide a list of endpoint numbers.

#### See

MatterSpecification.v11.Core § 9.14.4.7.4

#### Inherited from

`TypeFromSchema.endpoints`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:350

***

### name

> **name**: `string`

This field shall indicate the name (as assigned by the user or automatically by the server) associated with
the set of endpoints in this list. This can be used for identifying the action to the user by the client.
Example: "living room".

#### See

MatterSpecification.v11.Core § 9.14.4.7.2

#### Inherited from

`TypeFromSchema.name`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:338

***

### type

> **type**: [`EndpointListType`](../enumerations/EndpointListType.md)

This field shall indicate the type of endpoint list, see EndpointListTypeEnum.

#### See

MatterSpecification.v11.Core § 9.14.4.7.3

#### Inherited from

`TypeFromSchema.type`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:344
