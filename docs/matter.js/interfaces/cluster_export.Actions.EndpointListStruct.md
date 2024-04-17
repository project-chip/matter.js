[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / EndpointListStruct

# Interface: EndpointListStruct

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).EndpointListStruct

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

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvEndpointListStruct`](../modules/cluster_export.Actions.md#tlvendpointliststruct)\>

  ↳ **`EndpointListStruct`**

## Table of contents

### Properties

- [endpointListId](cluster_export.Actions.EndpointListStruct.md#endpointlistid)
- [endpoints](cluster_export.Actions.EndpointListStruct.md#endpoints)
- [name](cluster_export.Actions.EndpointListStruct.md#name)
- [type](cluster_export.Actions.EndpointListStruct.md#type)

## Properties

### endpointListId

• **endpointListId**: `number`

#### Inherited from

TypeFromSchema.endpointListId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:332](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L332)

___

### endpoints

• **endpoints**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

This field shall provide a list of endpoint numbers.

**`See`**

MatterSpecification.v11.Core § 9.14.4.7.1

#### Inherited from

TypeFromSchema.endpoints

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:341](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L341)

___

### name

• **name**: `string`

#### Inherited from

TypeFromSchema.name

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:333](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L333)

___

### type

• **type**: [`EndpointListType`](../enums/cluster_export.Actions.EndpointListType.md)

#### Inherited from

TypeFromSchema.type

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:334](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L334)
