[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / KeypadInput

# Namespace: KeypadInput

## Index

### Enumerations

- [CecKeyCode](enumerations/CecKeyCode.md)
- [Feature](enumerations/Feature.md)
- [Status](enumerations/Status.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [SendKeyRequest](interfaces/SendKeyRequest.md)
- [SendKeyResponse](interfaces/SendKeyResponse.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all KeypadInput clusters.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.sendKey

> `readonly` **sendKey**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall process a keycode as input to the media device.

If a second SendKey request with the same KeyCode value is received within 200ms, then the endpoint will
consider the first key press to be a press and hold. When such a repeat KeyCode value is not received
within 200ms, then the endpoint will consider the last key press to be a release.

###### See

MatterSpecification.v11.Cluster § 6.8.3.1

##### extensions

> `readonly` **extensions**: readonly []

This metadata controls which KeypadInputCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.locationKeys

> `readonly` **locationKeys**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

LocationKeys

Supports CEC keys 0x0A (Settings) and 0x09 (Home)

##### features.navigationKeyCodes

> `readonly` **navigationKeyCodes**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

NavigationKeyCodes

Supports UP, DOWN, LEFT, RIGHT, SELECT, BACK, EXIT, MENU

##### features.numberKeys

> `readonly` **numberKeys**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

NumberKeys

Supports numeric input 0..9

##### id

> `readonly` **id**: `1289` = `0x509`

##### name

> `readonly` **name**: `"KeypadInput"` = `"KeypadInput"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:201](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L201)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:265](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L265)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.sendKey

> `readonly` **sendKey**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

Upon receipt, this shall process a keycode as input to the media device.

If a second SendKey request with the same KeyCode value is received within 200ms, then the endpoint will
consider the first key press to be a press and hold. When such a repeat KeyCode value is not received
within 200ms, then the endpoint will consider the last key press to be a release.

###### See

MatterSpecification.v11.Cluster § 6.8.3.1

##### extensions

> `readonly` **extensions**: readonly []

This metadata controls which KeypadInputCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.locationKeys

> `readonly` **locationKeys**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

LocationKeys

Supports CEC keys 0x0A (Settings) and 0x09 (Home)

##### features.navigationKeyCodes

> `readonly` **navigationKeyCodes**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

NavigationKeyCodes

Supports UP, DOWN, LEFT, RIGHT, SELECT, BACK, EXIT, MENU

##### features.numberKeys

> `readonly` **numberKeys**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

NumberKeys

Supports numeric input 0..9

##### id

> `readonly` **id**: `1289` = `0x509`

##### name

> `readonly` **name**: `"KeypadInput"` = `"KeypadInput"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:252](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L252)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:268](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L268)

***

### TlvSendKeyRequest

> `const` **TlvSendKeyRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the KeypadInput sendKey command

#### See

MatterSpecification.v11.Cluster § 6.8.3.1

#### Type declaration

##### keyCode

> **keyCode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`CecKeyCode`](enumerations/CecKeyCode.md)\>

This shall indicate the key code to process.

###### See

MatterSpecification.v11.Cluster § 6.8.3.1.1

#### Source

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:113](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L113)

***

### TlvSendKeyResponse

> `const` **TlvSendKeyResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This command shall be generated in response to a SendKey command.

#### See

MatterSpecification.v11.Cluster § 6.8.3.2

#### Type declaration

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`Status`](enumerations/Status.md)\>

This shall indicate the of the command.

###### See

MatterSpecification.v11.Cluster § 6.8.3.2.1

#### Source

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:154](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L154)
