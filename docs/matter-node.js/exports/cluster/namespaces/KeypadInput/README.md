[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / KeypadInput

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

> `readonly` **sendKey**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

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

> `readonly` **locationKeys**: [`BitFlag`](../../../schema/README.md#bitflag)

LocationKeys

Supports CEC keys 0x0A (Settings) and 0x09 (Home)

##### features.navigationKeyCodes

> `readonly` **navigationKeyCodes**: [`BitFlag`](../../../schema/README.md#bitflag)

NavigationKeyCodes

Supports UP, DOWN, LEFT, RIGHT, SELECT, BACK, EXIT, MENU

##### features.numberKeys

> `readonly` **numberKeys**: [`BitFlag`](../../../schema/README.md#bitflag)

NumberKeys

Supports numeric input 0..9

##### id

> `readonly` **id**: `1289`

##### name

> `readonly` **name**: `"KeypadInput"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:186

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:312

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.sendKey

> `readonly` **sendKey**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

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

> `readonly` **locationKeys**: [`BitFlag`](../../../schema/README.md#bitflag)

LocationKeys

Supports CEC keys 0x0A (Settings) and 0x09 (Home)

##### features.navigationKeyCodes

> `readonly` **navigationKeyCodes**: [`BitFlag`](../../../schema/README.md#bitflag)

NavigationKeyCodes

Supports UP, DOWN, LEFT, RIGHT, SELECT, BACK, EXIT, MENU

##### features.numberKeys

> `readonly` **numberKeys**: [`BitFlag`](../../../schema/README.md#bitflag)

NumberKeys

Supports numeric input 0..9

##### id

> `readonly` **id**: `1289`

##### name

> `readonly` **name**: `"KeypadInput"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:245

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:315

***

### TlvSendKeyRequest

> `const` **TlvSendKeyRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the KeypadInput sendKey command

#### See

MatterSpecification.v11.Cluster § 6.8.3.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:106

***

### TlvSendKeyResponse

> `const` **TlvSendKeyResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This command shall be generated in response to a SendKey command.

#### See

MatterSpecification.v11.Cluster § 6.8.3.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:143
