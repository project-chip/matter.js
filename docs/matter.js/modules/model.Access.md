[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](model.md) / Access

# Namespace: Access

[model](model.md).Access

## Table of contents

### Enumerations

- [Fabric](../enums/model.Access.Fabric.md)
- [Privilege](../enums/model.Access.Privilege.md)
- [PrivilegeName](../enums/model.Access.PrivilegeName.md)
- [Rw](../enums/model.Access.Rw.md)
- [Timed](../enums/model.Access.Timed.md)

### Type Aliases

- [Ast](model.Access.md#ast)
- [Authorization](model.Access.md#authorization)
- [Definition](model.Access.md#definition)
- [Flag](model.Access.md#flag)
- [Flags](model.Access.md#flags)
- [TimedTag](model.Access.md#timedtag)

### Variables

- [A](model.Access.md#a)
- [F](model.Access.md#f)
- [M](model.Access.md#m)
- [MA](model.Access.md#ma)
- [O](model.Access.md#o)
- [OA](model.Access.md#oa)
- [OM](model.Access.md#om)
- [PrivilegePriority](model.Access.md#privilegepriority)
- [R](model.Access.md#r)
- [RW](model.Access.md#rw)
- [RWo](model.Access.md#rwo)
- [S](model.Access.md#s)
- [T](model.Access.md#t)
- [U](model.Access.md#u)
- [V](model.Access.md#v)
- [VA](model.Access.md#va)
- [VM](model.Access.md#vm)
- [VO](model.Access.md#vo)
- [W](model.Access.md#w)

## Type Aliases

### Ast

Ƭ **Ast**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fabric?` | \`${Fabric}\` |
| `readPriv?` | \`${Privilege}\` |
| `rw?` | \`${Rw}\` |
| `timed?` | `boolean` |
| `writePriv?` | \`${Privilege}\` |

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:232](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L232)

___

### Authorization

Ƭ **Authorization**: typeof [`V`](model.Access.md#v) \| typeof [`VO`](model.Access.md#vo) \| typeof [`VM`](model.Access.md#vm) \| typeof [`VA`](model.Access.md#va) \| typeof [`O`](model.Access.md#o) \| typeof [`OM`](model.Access.md#om) \| typeof [`OA`](model.Access.md#oa) \| typeof [`M`](model.Access.md#m) \| typeof [`MA`](model.Access.md#ma) \| typeof [`A`](model.Access.md#a)

All valid privilege tags.

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:375](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L375)

___

### Definition

Ƭ **Definition**: [`Ast`](model.Access.md#ast) \| ([`Flag`](model.Access.md#flag) \| [`Authorization`](model.Access.md#authorization))[] \| `string` \| `undefined`

Defines access as defined in the Matter 1.1 specification.

In TypeScript and JavaScript, definitions adhering to this type look
like `[ RW, VA ]` or `[ Access.Rw.W, Access.Privilege.Operate ]`.

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:398](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L398)

___

### Flag

Ƭ **Flag**: [`Rw`](../enums/model.Access.Rw.md) \| [`Fabric`](../enums/model.Access.Fabric.md) \| [`Privilege`](../enums/model.Access.Privilege.md) \| [`Timed`](../enums/model.Access.Timed.md)

All atomic access control values.

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:343](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L343)

___

### Flags

Ƭ **Flags**: [`Flag`](model.Access.md#flag)[]

A defined set of access control values.

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:348](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L348)

___

### TimedTag

Ƭ **TimedTag**: typeof [`T`](model.Access.md#t)

All valid timed tags.

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:390](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L390)

## Variables

### A

• `Const` **A**: [[`Administer`](../enums/model.Access.Privilege.md#administer)]

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:362](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L362)

___

### F

• `Const` **F**: [`Scoped`](../enums/model.Access.Fabric.md#scoped) = `Fabric.Scoped`

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:356](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L356)

___

### M

• `Const` **M**: [[`Manage`](../enums/model.Access.Privilege.md#manage)]

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:361](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L361)

___

### MA

• `Const` **MA**: [[`Manage`](../enums/model.Access.Privilege.md#manage), [`Administer`](../enums/model.Access.Privilege.md#administer)]

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:368](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L368)

___

### O

• `Const` **O**: [[`Operate`](../enums/model.Access.Privilege.md#operate)]

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:360](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L360)

___

### OA

• `Const` **OA**: [[`Operate`](../enums/model.Access.Privilege.md#operate), [`Administer`](../enums/model.Access.Privilege.md#administer)]

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:367](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L367)

___

### OM

• `Const` **OM**: [[`Operate`](../enums/model.Access.Privilege.md#operate), [`Manage`](../enums/model.Access.Privilege.md#manage)]

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:366](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L366)

___

### PrivilegePriority

• `Const` **PrivilegePriority**: `Object`

Relative ordering of privilege.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `A` | `number` |
| `M` | `number` |
| `O` | `number` |
| `V` | `number` |

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:323](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L323)

___

### R

• `Const` **R**: [`Read`](../enums/model.Access.Rw.md#read) = `Rw.Read`

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:350](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L350)

___

### RW

• `Const` **RW**: [`ReadWrite`](../enums/model.Access.Rw.md#readwrite) = `Rw.ReadWrite`

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:352](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L352)

___

### RWo

• `Const` **RWo**: [`ReadWriteOption`](../enums/model.Access.Rw.md#readwriteoption) = `Rw.ReadWriteOption`

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:353](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L353)

___

### S

• `Const` **S**: [`Sensitive`](../enums/model.Access.Fabric.md#sensitive) = `Fabric.Sensitive`

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:357](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L357)

___

### T

• `Const` **T**: [`Required`](../enums/model.Access.Timed.md#required) = `Timed.Required`

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:370](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L370)

___

### U

• `Const` **U**: [`Unaware`](../enums/model.Access.Fabric.md#unaware) = `Fabric.Unaware`

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:355](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L355)

___

### V

• `Const` **V**: [`View`](../enums/model.Access.Privilege.md#view) = `Privilege.View`

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:359](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L359)

___

### VA

• `Const` **VA**: [[`View`](../enums/model.Access.Privilege.md#view), [`Administer`](../enums/model.Access.Privilege.md#administer)]

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:365](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L365)

___

### VM

• `Const` **VM**: [[`View`](../enums/model.Access.Privilege.md#view), [`Manage`](../enums/model.Access.Privilege.md#manage)]

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:364](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L364)

___

### VO

• `Const` **VO**: [[`View`](../enums/model.Access.Privilege.md#view), [`Operate`](../enums/model.Access.Privilege.md#operate)]

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:363](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L363)

___

### W

• `Const` **W**: [`Write`](../enums/model.Access.Rw.md#write) = `Rw.Write`

#### Defined in

[packages/matter.js/src/model/aspects/Access.ts:351](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/model/aspects/Access.ts#L351)
