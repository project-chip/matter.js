[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/binding/export](../modules/behavior_definitions_binding_export.md) / [BindingBehavior](../modules/behavior_definitions_binding_export.BindingBehavior.md) / State

# Interface: State

[behavior/definitions/binding/export](../modules/behavior_definitions_binding_export.md).[BindingBehavior](../modules/behavior_definitions_binding_export.BindingBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_binding_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [binding](behavior_definitions_binding_export.BindingBehavior.State.md#binding)

## Properties

### binding

• **binding**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `cluster`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\> ; `endpoint`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `group`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `node`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]

Each entry shall represent a binding.

**`See`**

MatterSpecification.v11.Core § 9.6.6.1

#### Inherited from

StateType.binding

#### Defined in

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L81)
