[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Identify](../modules/cluster_export.Identify.md) / TriggerEffectRequest

# Interface: TriggerEffectRequest

[cluster/export](../modules/cluster_export.md).[Identify](../modules/cluster_export.Identify.md).TriggerEffectRequest

Input to the Identify triggerEffect command

**`See`**

MatterSpecification.v11.Cluster § 1.2.6.3

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvTriggerEffectRequest`](../modules/cluster_export.Identify.md#tlvtriggereffectrequest)\>

  ↳ **`TriggerEffectRequest`**

## Table of contents

### Properties

- [effectIdentifier](cluster_export.Identify.TriggerEffectRequest.md#effectidentifier)
- [effectVariant](cluster_export.Identify.TriggerEffectRequest.md#effectvariant)

## Properties

### effectIdentifier

• **effectIdentifier**: [`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)

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

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:165](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L165)

___

### effectVariant

• **effectVariant**: [`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)

This field is used to indicate which variant of the effect, indicated in the EffectIdentifier field, SHOULD
be triggered. If a device does not support the given variant, it shall use the default variant. This field
shall contain one of the values listed below:

Table 4. Values of the EffectVariant Field of the TriggerEffect Command

**`See`**

MatterSpecification.v11.Cluster § 1.2.6.3.2

#### Inherited from

TypeFromSchema.effectVariant

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:176](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L176)
