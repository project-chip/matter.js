[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [model](../../README.md) / Access

# Namespace: Access

## Index

### Enumerations

- [Fabric](enumerations/Fabric.md)
- [Privilege](enumerations/Privilege.md)
- [PrivilegeName](enumerations/PrivilegeName.md)
- [Rw](enumerations/Rw.md)
- [Timed](enumerations/Timed.md)

## Type Aliases

### Ast

> **Ast**: `object`

#### Type declaration

##### fabric?

> `optional` **fabric**: \`$\{Fabric\}\`

##### readPriv?

> `optional` **readPriv**: \`$\{Privilege\}\`

##### rw?

> `optional` **rw**: \`$\{Rw\}\`

##### timed?

> `optional` **timed**: `boolean`

##### writePriv?

> `optional` **writePriv**: \`$\{Privilege\}\`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:255](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L255)

***

### Authorization

> **Authorization**: *typeof* [`V`](README.md#v-1) \| *typeof* [`VO`](README.md#vo) \| *typeof* [`VM`](README.md#vm) \| *typeof* [`VA`](README.md#va) \| *typeof* [`O`](README.md#o) \| *typeof* [`OM`](README.md#om) \| *typeof* [`OA`](README.md#oa) \| *typeof* [`M`](README.md#m) \| *typeof* [`MA`](README.md#ma) \| *typeof* [`A`](README.md#a)

All valid privilege tags.

#### Source

[packages/matter.js/src/model/aspects/Access.ts:399](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L399)

***

### Definition

> **Definition**: [`Ast`](README.md#ast) \| ([`Flag`](README.md#flag) \| [`Authorization`](README.md#authorization))[] \| `string` \| `undefined`

Defines access as defined in the Matter 1.1 specification.

In TypeScript and JavaScript, definitions adhering to this type look
like `[ RW, VA ]` or `[ Access.Rw.W, Access.Privilege.Operate ]`.

#### Source

[packages/matter.js/src/model/aspects/Access.ts:422](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L422)

***

### Flag

> **Flag**: [`Rw`](enumerations/Rw.md) \| [`Fabric`](enumerations/Fabric.md) \| [`Privilege`](enumerations/Privilege.md) \| [`Timed`](enumerations/Timed.md)

All atomic access control values.

#### Source

[packages/matter.js/src/model/aspects/Access.ts:367](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L367)

***

### Flags

> **Flags**: [`Flag`](README.md#flag)[]

A defined set of access control values.

#### Source

[packages/matter.js/src/model/aspects/Access.ts:372](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L372)

***

### TimedTag

> **TimedTag**: *typeof* [`T`](README.md#t)

All valid timed tags.

#### Source

[packages/matter.js/src/model/aspects/Access.ts:414](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L414)

## Variables

### A

> `const` **A**: [[`Administer`](enumerations/Privilege.md#administer)]

#### Source

[packages/matter.js/src/model/aspects/Access.ts:386](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L386)

***

### Default

> `const` **Default**: [`Access`](../../classes/Access.md)

#### Source

[packages/matter.js/src/model/aspects/Access.ts:426](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L426)

***

### F

> `const` **F**: [`Scoped`](enumerations/Fabric.md#scoped) = `Fabric.Scoped`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:380](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L380)

***

### M

> `const` **M**: [[`Manage`](enumerations/Privilege.md#manage)]

#### Source

[packages/matter.js/src/model/aspects/Access.ts:385](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L385)

***

### MA

> `const` **MA**: [[`Manage`](enumerations/Privilege.md#manage), [`Administer`](enumerations/Privilege.md#administer)]

#### Source

[packages/matter.js/src/model/aspects/Access.ts:392](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L392)

***

### O

> `const` **O**: [[`Operate`](enumerations/Privilege.md#operate)]

#### Source

[packages/matter.js/src/model/aspects/Access.ts:384](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L384)

***

### OA

> `const` **OA**: [[`Operate`](enumerations/Privilege.md#operate), [`Administer`](enumerations/Privilege.md#administer)]

#### Source

[packages/matter.js/src/model/aspects/Access.ts:391](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L391)

***

### OM

> `const` **OM**: [[`Operate`](enumerations/Privilege.md#operate), [`Manage`](enumerations/Privilege.md#manage)]

#### Source

[packages/matter.js/src/model/aspects/Access.ts:390](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L390)

***

### PrivilegeLevel

> `const` **PrivilegeLevel**: `object`

Relative ordering of privilege.

#### Type declaration

##### A

> **A**: [`AccessLevel`](../../../cluster/export/enumerations/AccessLevel.md) = `AccessLevel.Administer`

##### M

> **M**: [`AccessLevel`](../../../cluster/export/enumerations/AccessLevel.md) = `AccessLevel.Manage`

##### O

> **O**: [`AccessLevel`](../../../cluster/export/enumerations/AccessLevel.md) = `AccessLevel.Operate`

##### V

> **V**: [`AccessLevel`](../../../cluster/export/enumerations/AccessLevel.md) = `AccessLevel.View`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:346](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L346)

***

### R

> `const` **R**: [`Read`](enumerations/Rw.md#read) = `Rw.Read`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:374](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L374)

***

### RW

> `const` **RW**: [`ReadWrite`](enumerations/Rw.md#readwrite) = `Rw.ReadWrite`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:376](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L376)

***

### RWo

> `const` **RWo**: [`ReadWriteOption`](enumerations/Rw.md#readwriteoption) = `Rw.ReadWriteOption`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:377](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L377)

***

### S

> `const` **S**: [`Sensitive`](enumerations/Fabric.md#sensitive) = `Fabric.Sensitive`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:381](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L381)

***

### T

> `const` **T**: [`Required`](enumerations/Timed.md#required) = `Timed.Required`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:394](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L394)

***

### U

> `const` **U**: [`Unaware`](enumerations/Fabric.md#unaware) = `Fabric.Unaware`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:379](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L379)

***

### V

> `const` **V**: [`View`](enumerations/Privilege.md#view) = `Privilege.View`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:383](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L383)

***

### VA

> `const` **VA**: [[`View`](enumerations/Privilege.md#view), [`Administer`](enumerations/Privilege.md#administer)]

#### Source

[packages/matter.js/src/model/aspects/Access.ts:389](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L389)

***

### VM

> `const` **VM**: [[`View`](enumerations/Privilege.md#view), [`Manage`](enumerations/Privilege.md#manage)]

#### Source

[packages/matter.js/src/model/aspects/Access.ts:388](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L388)

***

### VO

> `const` **VO**: [[`View`](enumerations/Privilege.md#view), [`Operate`](enumerations/Privilege.md#operate)]

#### Source

[packages/matter.js/src/model/aspects/Access.ts:387](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L387)

***

### W

> `const` **W**: [`Write`](enumerations/Rw.md#write) = `Rw.Write`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:375](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L375)
