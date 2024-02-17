# Matter.js Node API

## Introduction

The *Node API* offers a high-level interface for implementing and interacting with Matter nodes.  A *node* in Matter is
a top-level network-accessible resource.

> [!NOTE]
> Don't confuse Matter "nodes" with Node.js.  You can use the Node API from Node.js but it it not specific to Node.js.

Most nodes are physical devices.  The Matter specifications use the term *device* informally to describe nodes
associated with a real-world device such as a light switch, door lock or window covering.

A *controller* is a node that manages other nodes and commissions them into a fabric specific to the controller.  In
Matter, a *fabric* is a private namespace associated with an specific controller.  Nodes may be associated with more
than one controller and thus more than one fabric.

Common controllers include Apple HomePod, Amazon Echo and Google Nest Hub.

A *bridge* is a node that publishes non-Matter devices as Matter nodes.  Bridges are often provided by third parties
to publish nodes for devices that do not have native Matter support.  You can use Matter.js to create a bridge.

## High-level overview

You can look through Matter.js examples to get a feel for how you might use the Node API in your application.
Familiarity with a few concepts described here might be helpful as you browse the examples.

```mermaid
---
title: The Node API
---
classDiagram
    direction LR

    class ClientNode {
        TBD
    }
    ClientNode --|> Node

    class ServerNode {
        async run()
        start()
        cancel()
    }
    ServerNode --|> Node

    class Node {
        type: RootEndpointType
        lifecycle: NodeLifecycle
    }
    Node --|> Part

    class Part {
        type: EndpointType
        id: string
        number: EndpointNumber
        lifecycle: PartLifecycle
        parts: Parts
        lifecycle: Lifecycle
        act(actor: agent => ...)
    }


    class Parts {
        «iterable»
        get(id)
    }
    Part --* Parts
    Parts --o Part

    class Agent {
        «behavior id»: Behavior
        context: ActionContext
    }
    Part --> Agent
    Agent --* Behavior
    Agent --* ActionContext

    class Behavior {
        state: Object
        events: EventEmitter
        «command name»()
    }

    class PartLifecycle {
        isInstalled: boolean
        isReady: boolean
        isTreeReady: boolean
    }

    class NodeLifecycle {
        isOnline: boolean
        isCommissioned: boolean
    }

    class ActionContext {
        transaction: Transaction
        fabric?: FabricIndex
        subject?: SubjectId
    }
    NodeLifecycle --|> PartLifecycle

    Part --* PartLifecycle
    Node --* NodeLifecycle
```

### Nodes and Parts

*TODO*

### Agents and Behaviors

*TODO*