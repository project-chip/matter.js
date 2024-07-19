[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Actions](../modules/cluster_export.Actions.md) / EndpointListStruct

# Interface: EndpointListStruct

[cluster/export](../modules/cluster_export.md).[Actions](../modules/cluster_export.Actions.md).EndpointListStruct

This data type holds the details of a single endpoint list, which relates to a set of endpoints that have some
logical relation, and contains the data fields below.

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

This field shall provide an unique identifier used to identify the endpoint list.

**`See`**

MatterSpecification.v11.Core § 9.14.4.7.1

#### Inherited from

TypeFromSchema.endpointListId

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:329](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L329)

___

### endpoints

• **endpoints**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

This field shall provide a list of endpoint numbers.

**`See`**

MatterSpecification.v11.Core § 9.14.4.7.4

#### Inherited from

TypeFromSchema.endpoints

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:352](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L352)

___

### name

• **name**: `string`

This field shall indicate the name (as assigned by the user or automatically by the server) associated with
the set of endpoints in this list. This can be used for identifying the action to the user by the client.
Example: "living room".

**`See`**

MatterSpecification.v11.Core § 9.14.4.7.2

#### Inherited from

TypeFromSchema.name

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:338](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L338)

___

### type

• **type**: [`EndpointListType`](../enums/cluster_export.Actions.EndpointListType.md)

This field shall indicate the type of endpoint list, see EndpointListTypeEnum.

**`See`**

MatterSpecification.v11.Core § 9.14.4.7.3

#### Inherited from

TypeFromSchema.type

#### Defined in

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:345](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L345)
