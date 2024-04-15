[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [AccountLogin](../modules/cluster_export.AccountLogin.md) / Cluster

# Interface: Cluster

[cluster/export](../modules/cluster_export.md).[AccountLogin](../modules/cluster_export.AccountLogin.md).Cluster

Account Login

This cluster provides commands that facilitate user account login on a Content App or a node. For example, a
Content App running on a Video Player device, which is represented as an endpoint (see Device Type Library
document), can use this cluster to help make the user account on the Content App match the user account on the
Client.

**`See`**

MatterSpecification.v11.Cluster § 6.2

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/cluster_export.AccountLogin.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](cluster_export.AccountLogin.Cluster.md#attributes)
- [base](cluster_export.AccountLogin.Cluster.md#base)
- [commands](cluster_export.AccountLogin.Cluster.md#commands)
- [events](cluster_export.AccountLogin.Cluster.md#events)
- [extensions](cluster_export.AccountLogin.Cluster.md#extensions)
- [features](cluster_export.AccountLogin.Cluster.md#features)
- [id](cluster_export.AccountLogin.Cluster.md#id)
- [name](cluster_export.AccountLogin.Cluster.md#name)
- [revision](cluster_export.AccountLogin.Cluster.md#revision)
- [supportedFeatures](cluster_export.AccountLogin.Cluster.md#supportedfeatures)
- [unknown](cluster_export.AccountLogin.Cluster.md#unknown)

### Methods

- [alter](cluster_export.AccountLogin.Cluster.md#alter)
- [enable](cluster_export.AccountLogin.Cluster.md#enable)
- [set](cluster_export.AccountLogin.Cluster.md#set)
- [with](cluster_export.AccountLogin.Cluster.md#with)

## Properties

### attributes

• **attributes**: `Object`

#### Inherited from

Identity.attributes

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L86)

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L92)

___

### commands

• **commands**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `getSetupPin` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> | The purpose of this command is to determine if the active user account of the given Content App matches the active user account of a given Commissionee, and when it does, return a Setup PIN code which can be used for password-authenticated session establishment (PASE) with the Commissionee. For example, a Video Player with a Content App Platform may invoke this command on one of its Content App endpoints to facilitate commissioning of a Phone App made by the same vendor as the Content App. If the accounts match, then the Content App may return a setup code that can be used by the Video Player to commission the Phone App without requiring the user to physically input a setup code. The account match is determined by the Content App using a method which is outside the scope of this specification and will typically involve a central service which is in communication with both the Content App and the Commissionee. The GetSetupPIN command is needed in order to provide the Commissioner/Admin with a Setup PIN when this Commissioner/Admin is operated by a different vendor from the Content App. This method is used to facilitate Setup PIN exchange (for PASE) between Commissioner and Commissionee when the same user account is active on both nodes. With this method, the Content App satisfies proof of possession related to commissioning by requiring the same user account to be active on both Commissionee and Content App, while the Commissioner/Admin ensures user consent by prompting the user prior to invocation of the command. Upon receipt of this command, the Content App checks if the account associated with the Temporary Account Identifier sent by the client is the same account that is active on itself. If the accounts are the same, then the Content App returns the GetSetupPIN Response which includes a Setup PIN that may be used for PASE with the Commissionee. The Temporary Account Identifier for a Commissionee may be populated with the Rotating ID field of the client’s commissionable node advertisement (see Rotating Device Identifier section in [MatterCore] ) encoded as an octet string where the octets of the Rotating Device Identifier are encoded as 2-character sequences by representing each octet’s value as a 2-digit hexadecimal number, using uppercase letters. The Setup PIN is an 11 character string so that it can accommodate different future formats, including alpha-numeric encodings. For a Commissionee it shall be populated with the Manual Pairing Code (see Manual Pairing Code section in [MatterCore] ) encoded as a string. The Server shall implement rate limiting to prevent brute force attacks. No more than 10 unique requests in a 10 minute period shall be allowed; a command response status of FAILURE should sent for additional commands received within the 10 minute period. Because access to this command is limited to nodes with Admin-level access, and the user is prompted for consent prior to Commissioning, there are in place multiple obstacles to successfully mounting a brute force attack. A Content App that supports this command shall ensure that the Temporary Account Identifier used by its clients is not valid for more than 10 minutes. **`See`** MatterSpecification.v11.Cluster § 6.2.4.1 |
| `login` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> | The purpose of this command is to allow the Content App to assume the user account of a given Commissionee by leveraging the Setup PIN code input by the user during the commissioning process. For example, a Video Player with a Content App Platform may invoke this command on one of its Content App endpoints after the commissioning has completed of a Phone App made by the same vendor as the Content App. The Content App may determine whether the Temporary Account Identifier maps to an account with a corresponding Setup PIN and, if so, it may automatically login to the account for the corresponding user. The end result is that a user performs commissioning of a Phone App to a Video Player by inputting the Setup PIN for the Phone App into the Video Player UX. Once commissioning has completed, the Video Player invokes this command to allow the corresponding Content App to assume the same user account as the Phone App. The verification of Setup PIN for the given Temporary Account Identifier is determined by the Content App using a method which is outside the scope of this specification and will typically involve a central service which is in communication with both the Content App and the Commissionee. Implementations of such a service should impose aggressive time outs for any mapping of Temporary Account Identifier to Setup PIN in order to prevent accidental login due to delayed invocation. Upon receipt, the Content App checks if the account associated with the client’s Temp Account Identifier has a current active Setup PIN with the given value. If the Setup PIN is valid for the user account associated with the Temp Account Identifier, then the Content App may make that user account active. The Temporary Account Identifier for a Commissionee may be populated with the Rotating ID field of the client’s commissionable node advertisement encoded as an octet string where the octets of the Rotating Device Identifier are encoded as 2-character sequences by representing each octet’s value as a 2-digit hexadecimal number, using uppercase letters. The Setup PIN for a Commissionee may be populated with the Manual Pairing Code encoded as a string of decimal numbers. The Server shall implement rate limiting to prevent brute force attacks. No more than 10 unique requests in a 10 minute period shall be allowed; a command response status of FAILURE should sent for additional commands received within the 10 minute period. Because access to this command is limited to nodes with Admin-level access, and the user is involved when obtaining the SetupPIN, there are in place multiple obstacles to successfully mounting a brute force attack. A Content App that supports this command shall ensure that the Temporary Account Identifier used by its clients is not valid for more than 10 minutes. **`See`** MatterSpecification.v11.Cluster § 6.2.4.3 |
| `logout` | [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> | The purpose of this command is to instruct the Content App to clear the current user account. This command SHOULD be used by clients of a Content App to indicate the end of a user session. **`See`** MatterSpecification.v11.Cluster § 6.2.4.4 |

#### Inherited from

Identity.commands

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L89)

___

### events

• **events**: `Object`

#### Inherited from

Identity.events

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L90)

___

### extensions

• **extensions**: `undefined`

#### Inherited from

Identity.extensions

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L93)

___

### features

• **features**: `Object`

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``1294``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"AccountLogin"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L82)

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L83)

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L85)

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L91)

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` = 0x50e; `name`: ``"AccountLogin"`` = "AccountLogin"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` = 0x50e; `name`: ``"AccountLogin"`` = "AccountLogin"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` = 0x50e; `name`: ``"AccountLogin"`` = "AccountLogin"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` = 0x50e; `name`: ``"AccountLogin"`` = "AccountLogin"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` = 0x50e; `name`: ``"AccountLogin"`` = "AccountLogin"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` = 0x50e; `name`: ``"AccountLogin"`` = "AccountLogin"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` = 0x50e; `name`: ``"AccountLogin"`` = "AccountLogin"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/cluster_export.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` = 0x50e; `name`: ``"AccountLogin"`` = "AccountLogin"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` = 0x50e; `name`: ``"AccountLogin"`` = "AccountLogin"; `revision`: ``1`` = 1 }\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` = 0x50e; `name`: ``"AccountLogin"`` = "AccountLogin"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` = 0x50e; `name`: ``"AccountLogin"`` = "AccountLogin"; `revision`: ``1`` = 1 }\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
