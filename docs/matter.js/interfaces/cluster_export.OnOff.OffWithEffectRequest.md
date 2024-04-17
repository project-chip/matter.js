[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OnOff](../modules/cluster_export.OnOff.md) / OffWithEffectRequest

# Interface: OffWithEffectRequest

[cluster/export](../modules/cluster_export.md).[OnOff](../modules/cluster_export.OnOff.md).OffWithEffectRequest

Input to the OnOff offWithEffect command

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvOffWithEffectRequest`](../modules/cluster_export.OnOff.md#tlvoffwitheffectrequest)\>

  ↳ **`OffWithEffectRequest`**

## Table of contents

### Properties

- [effectIdentifier](cluster_export.OnOff.OffWithEffectRequest.md#effectidentifier)
- [effectVariant](cluster_export.OnOff.OffWithEffectRequest.md#effectvariant)

## Properties

### effectIdentifier

• **effectIdentifier**: [`OnOffEffectIdentifier`](../enums/cluster_export.OnOff.OnOffEffectIdentifier.md)

The EffectIdentifier field specifies the fading effect to use when turning the device off. This field shall
contain one of the non-reserved values listed in Values of the EffectIdentifier Field of the OffWithEffect
Command.

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.4.1

#### Inherited from

TypeFromSchema.effectIdentifier

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L61)

___

### effectVariant

• **effectVariant**: `number`

The EffectVariant field is used to indicate which variant of the effect, indicated in the EffectIdentifier
field, SHOULD be triggered. If the server does not support the given variant, it shall use the default
variant. This field is dependent on the value of the EffectIdentifier field and shall contain one of the
non-reserved values listed in Values of the EffectVariant Field of the OffWithEffect Command.

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.4.2

#### Inherited from

TypeFromSchema.effectVariant

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L71)
