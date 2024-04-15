[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/door-lock/export](../modules/behavior_definitions_door_lock_export.md) / [DoorLockInterface](../modules/behavior_definitions_door_lock_export.DoorLockInterface.md) / User

# Interface: User

[behavior/definitions/door-lock/export](../modules/behavior_definitions_door_lock_export.md).[DoorLockInterface](../modules/behavior_definitions_door_lock_export.DoorLockInterface.md).User

## Table of contents

### Methods

- [clearCredential](behavior_definitions_door_lock_export.DoorLockInterface.User.md#clearcredential)
- [clearUser](behavior_definitions_door_lock_export.DoorLockInterface.User.md#clearuser)
- [getCredentialStatus](behavior_definitions_door_lock_export.DoorLockInterface.User.md#getcredentialstatus)
- [getUser](behavior_definitions_door_lock_export.DoorLockInterface.User.md#getuser)
- [setCredential](behavior_definitions_door_lock_export.DoorLockInterface.User.md#setcredential)
- [setUser](behavior_definitions_door_lock_export.DoorLockInterface.User.md#setuser)

## Methods

### clearCredential

▸ **clearCredential**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:187](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L187)

___

### clearUser

▸ **clearUser**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:172](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L172)

___

### getCredentialStatus

▸ **getCredentialStatus**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `creatorFabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `credentialExists`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `lastModifiedFabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `nextCredentialIndex`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userIndex`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `creatorFabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `credentialExists`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `lastModifiedFabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `nextCredentialIndex`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userIndex`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:182](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L182)

___

### getUser

▸ **getUser**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `creatorFabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `credentialRule`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `credentials`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `lastModifiedFabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `nextUserIndex`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `userName`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `string`\> ; `userStatus`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `userIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `creatorFabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `credentialRule`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `credentials`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]\> ; `lastModifiedFabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `nextUserIndex`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `userName`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `string`\> ; `userStatus`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:167](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L167)

___

### setCredential

▸ **setCredential**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `nextCredentialIndex`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `credential`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>\> ; `credentialData`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `operationType`: [`FieldType`](tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `userStatus`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `nextCredentialIndex`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`DlStatus`](../enums/cluster_export.DoorLock.DlStatus.md)\> ; `userIndex`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:177](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L177)

___

### setUser

▸ **setUser**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `credentialRule`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)\> ; `operationType`: [`FieldType`](tlv_export.FieldType.md)\<[`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)\> ; `userIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `userName`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `string`\> ; `userStatus`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)\> ; `userType`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)\> ; `userUniqueId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

#### Defined in

[packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts:162](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/door-lock/DoorLockInterface.ts#L162)
