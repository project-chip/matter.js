[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [behavior/cluster/export](../../../README.md) / [\<internal\>](../../README.md) / EndpointType

# Namespace: EndpointType

## Index

### Interfaces

- [Options](interfaces/Options.md)
- [Requirements](interfaces/Requirements.md)

## References

### Empty

Re-exports [Empty](../../interfaces/Empty.md)

## Type Aliases

### For\<T\>

> **For**\<`T`\>: `object`

A fully typed [EndpointType](../../README.md#endpointtype) defined by [EndpointType.Options](interfaces/Options.md).

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Options`](interfaces/Options.md) |

#### Type declaration

##### behaviors

> **behaviors**: `T`\[`"behaviors"`\] *extends* [`SupportedBehaviors`](../../README.md#supportedbehaviors) ? `T`\[`"behaviors"`\] : `object`

##### deviceClass

> **deviceClass**: [`DeviceClasses`](../../../../../../device/export/enumerations/DeviceClasses.md)

##### deviceRevision

> **deviceRevision**: `number`

##### deviceType

> **deviceType**: [`DeviceTypeId`](../../../../../../datatype/export/README.md#devicetypeid)

##### name

> **name**: `T`\[`"name"`\]

##### requirements

> **requirements**: `T`\[`"requirements"`\] *extends* [`Requirements`](interfaces/Requirements.md) ? `T`\[`"requirements"`\] : `object`

#### Source

[packages/matter.js/src/endpoint/type/EndpointType.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/EndpointType.ts#L47)
