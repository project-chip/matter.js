[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Actions](../modules/exports_cluster.Actions.md) / EndpointListStruct

# Interface: EndpointListStruct

[exports/cluster](../modules/exports_cluster.md).[Actions](../modules/exports_cluster.Actions.md).EndpointListStruct

This data type holds the details of a single endpoint list, which relates to a set of endpoints that have some
logical relation, and contains the data fields below.

This field shall provide an unique identifier used to identify the endpoint list.

This field shall indicate the name (as assigned by the user or automatically by the server) associated with the
set of endpoints in this list. This can be used for identifying the action to the user by the client. Example:
"living room".

This field shall indicate the type of endpoint list, see EndpointListTypeEnum.

**`See`**

MatterSpecification.v11.Core § 9.14.4.7

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvEndpointListStruct`](../modules/exports_cluster.Actions.md#tlvendpointliststruct)\>

  ↳ **`EndpointListStruct`**

## Table of contents

### Properties

- [endpointListId](exports_cluster.Actions.EndpointListStruct.md#endpointlistid)
- [endpoints](exports_cluster.Actions.EndpointListStruct.md#endpoints)
- [name](exports_cluster.Actions.EndpointListStruct.md#name)
- [type](exports_cluster.Actions.EndpointListStruct.md#type)

## Properties

### endpointListId

• **endpointListId**: `number`

#### Inherited from

TypeFromSchema.endpointListId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:333

___

### endpoints

• **endpoints**: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

This field shall provide a list of endpoint numbers.

**`See`**

MatterSpecification.v11.Core § 9.14.4.7.1

#### Inherited from

TypeFromSchema.endpoints

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:341

___

### name

• **name**: `string`

#### Inherited from

TypeFromSchema.name

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:334

___

### type

• **type**: [`EndpointListType`](../enums/exports_cluster.Actions.EndpointListType.md)

#### Inherited from

TypeFromSchema.type

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:335
