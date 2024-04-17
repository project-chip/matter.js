[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Identify](../modules/exports_cluster.Identify.md) / TriggerEffectRequest

# Interface: TriggerEffectRequest

[exports/cluster](../modules/exports_cluster.md).[Identify](../modules/exports_cluster.Identify.md).TriggerEffectRequest

Input to the Identify triggerEffect command

**`See`**

MatterSpecification.v11.Cluster § 1.2.6.3

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvTriggerEffectRequest`](../modules/exports_cluster.Identify.md#tlvtriggereffectrequest)\>

  ↳ **`TriggerEffectRequest`**

## Table of contents

### Properties

- [effectIdentifier](exports_cluster.Identify.TriggerEffectRequest.md#effectidentifier)
- [effectVariant](exports_cluster.Identify.TriggerEffectRequest.md#effectvariant)

## Properties

### effectIdentifier

• **effectIdentifier**: [`EffectIdentifier`](../enums/exports_cluster.Identify.EffectIdentifier.md)

This field specifies the identify effect to use. All values of the EffectIdentifier shall be supported.
Implementors may deviate from the example light effects in the table below, but they SHOULD indicate during
testing how they handle each effect.

This field shall contain one of the non-reserved values listed below.

Table 3. Values of the EffectIdentifier Field of the TriggerEffect Command

**`See`**

MatterSpecification.v11.Cluster § 1.2.6.3.1

#### Inherited from

TypeFromSchema.effectIdentifier

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:138

___

### effectVariant

• **effectVariant**: [`Default`](../enums/exports_cluster.Identify.EffectVariant.md#default)

This field is used to indicate which variant of the effect, indicated in the EffectIdentifier field, SHOULD
be triggered. If a device does not support the given variant, it shall use the default variant. This field
shall contain one of the values listed below:

Table 4. Values of the EffectVariant Field of the TriggerEffect Command

**`See`**

MatterSpecification.v11.Cluster § 1.2.6.3.2

#### Inherited from

TypeFromSchema.effectVariant

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:148
