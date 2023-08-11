# MATTER NODE SHELL

STATUS: Work In Progress (WIP)

This project provides a light-weight node.js implementation of a Matter Node shell application:
https://github.com/project-chip/connectedhomeip

## Install Dependencies

```
npm install
```

## Build

Because TypeScript is used, the project needs to be built before it can be run.

```
npm run build
```
## Run

There are three ways to start matter-node-shell. The `nodenum` parameter provides a unique identifier for the matter-node-shell process mainly to allocate a unique port number. If `nodenum` is not passed, it will default to `0`. The node will allocate a default port of `nodenum + 5540` unless a config file already exists with a manually configured port for the node.

```
npm start <nodenum>
```

## Run tests

To execute all tests and generate a coverage report:

```
npm test
```

### help

Display a list of all top-level commands supported and a brief description.

```
matter-node> help
help	  Display list of all commands
exit	  Exit the shell
config	Display all config variables
nodenum	Get and set the node number
pin	    Get and set the pairing pin
port	  Get and set the IP port
ip	    Get and set the IP address
pair	  Commission a device
onoff	  Control on/off cluster state
Done
```

### config

Display all node configuration in persistant store.

```
> config
store: fabricid = 0000000000000000
store: nodeid = dc2ab22aad1f573e
store: encryptionKey = 00112233445566778899aabbccddeeff
store: nodeid = 3
store: ipPort = 5543
Done
```

### exit

Exit the shell terminal.

```
> exit
Goodbye
```

### nodeid

Display the Node ID of the node.

```
> nodeid
dc2ab22aad1f573e
Done
```

### nodeid <hex_string>

Set the Node ID of the node.

```
> nodeid 1
0000000000000001
Done
```

### nodenum

Display the node number of the node. The node num identifies the instance locally and maps to port allocation to allow running multiple nodes as processes on a single machine.

```
> nodenum
3
Done
```

### nodenum <number>

Set the Node number of the node.

```
> nodenum 3
3
Done
```

### port

Display the UDP port number of the node.

```
> port
5540
Done
```

### port <number>

Set the UDP port number of the node.

```
> port 5541
5541
Done
```


# Running multiple instances

`matter-node-shell` uses the `node-localstorage` package to persistantly store configuration data of each node on disk. In order to run multiple nodes on one machine, start each node with their own `nodenum` so each will create and use their own `.matter-shell-#` directory and use different ports for communication where `#` is the `nodenum` passed from the commandline.

```
# From matter-node-shell top-level
npm start 1

# In different terminal
npm start 2
```

To delete node state, i.e. factory reset, just delete the `.matter-shell-#` directory of the node:

```
rm -fr .matter-shell-2
```

The contents of the `.matter-shell-#` directory are human-readable, where each field in the key/value store is a separate file in ascii format:

```
$ ls .matter-shell-1
0.MatterController.fabric			0.SessionManager.resumptionRecords
0.MatterController.fabricCommissioned		Node.discriminator
0.MatterController.operationalServerAddress	Node.ip
0.RootCertificateManager.nextCertificateId	Node.longDiscriminator
0.RootCertificateManager.rootCertBytes		Node.pin
0.RootCertificateManager.rootCertId		Node.port
0.RootCertificateManager.rootKeyIdentifier	Node.shortDiscriminator
0.RootCertificateManager.rootKeyPair

$ more .matter-shell-1/Node.ip 
"fe80::148d:9bd8:5006:243%en0"
```

```
          █
          █
      ▄   █   ▄
      ▀▀█████▀▀
    ▀█▄       ▄█▀
      ▀█▄   ▄█▀
   ▄██▀▀█   █▀▀██▄
  ▀▀    █   █    ▀▀
```