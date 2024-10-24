# How to use Thread based devices with matter.js Controller/Shell

Beside Wi-Fi and Ethernet the Thread protocol is the third main communication protocol for Matter devices.

Thread is a low-power, wireless mesh networking protocol that enables secure, scalable, and reliable communication among IoT devices. It is designed to support a wide variety of IoT devices in the home, including appliances, access points, sensors, and other devices. Thread is a mesh network, meaning that all Thread devices can communicate with each other, and that the network can be extended by simply adding more Thread devices. 

In order to bring Thread devices into an operational IP based network a **Thread Border Router (TBR)** is required. The TBR is the device that facilitates IPv6-based communication between Thread networks and the local IP network.  The TBR is also responsible for providing the Thread network with access to the internet.

TBRs are available as standalone devices or as part of a larger device, such as a smart home hub or a Wi-Fi router. Please refer to the hub information in the [README](README.md) to determine whether your hub supports thread. The thread networks from Apple or Google for instance are known to be very stable. Alternatively you can use a Raspberry Pi or a VM with a Thread USB stick/module as an [OpenThread Border Router](https://openthread.io) (see below).

Ideally you should have all your devices in the same Thread network. This is not strictly necessary but it is more efficient as it allows devices to communicate directly with each other over thread without round-tripping through the TBR.  Matter groups and bindings (direct device connections) therefore benefit from a shared Thread network.

## IPv6 requirements when devices are already on IP network

When a thread based device is already commissioned into an existing ecosystem, e.g. Apple, Google, Amazon or such, and so using their hubs as "Thread border router", then a proper IOv6 setup is important.
This requires potentially [tweaking settings of hosts or VM](./TROUBLESHOOTING.md#enabling-ipv6-thread-connectivity-on-linux-hosts).

## How to gather Thread credentials needed for device commissioning?
Depending on the hub you have, and until new (upcoming) Thread credential sharing options have hit the market, you have two options for connecting devices with the thread network.

The way that always works is to use a hub to commission the device. During commissioning the hub provides the device with the necessary credentials to join the Thread network. The device and hub may then communicate via thread, Wifi or Ethernet.

This means you pair the device with e.g. Apple, Google or Amazon first - which brings the device into the operational IP network - and then you pair matter.js as a secondary controller to the device. You could then delete the first controller from the device and the device should stay in the Thread network.

Alternatively you can use a "trick" with a matter.js test device to gather the thread credentials.

### Using Apple and Google branded hubs
This requires a Raspberry Pi with BLE available and Matter.js's `matter-node.js-examples` package installed (other hardware will work but here BLE support can be finicky). Then you use the `DeviceFull` example with these parameters:

```
node node_modules/@matter/examples/dist/esm/examples/DeviceNodeFull.js --storage-path=.thread --ble-enable --ble-thread-fake --passcode=20202021 --discriminator=1234
```
(In case of issues with BLE or such and you need to redo the pairing just slightly change the passcode or discriminator parameter.)

With this command the matter.js example starts up a simple mock device, reachable via BLE for commissioning. Now use your mobile device with Apple/Google Home app to add a new device. The app will ask you to scan the QR code from the matter.js example. The app then commissions the device and you can see the thread credentials in the console of the matter.js example. Search the log for "---> addOrUpdateThreadNetwork called on NetworkCommissioning cluster: ..." to get the operational credentials (it will be a hex string). Now you can remove the device again from the Apple/Google home because we have what we need.

Additional to the operational credentials we need the thread network name. You can get this by using `avahi-browse _meshcop._udp -r` (or `dns-sd -B _meshcop._udp local` and from results `dns-sd -L "Apple BorderRouter #xxxx" _meshcop._udp local`, look for the "nn=" name) on the CLI of your device to scan in the network for thread border routers.

### Using Amazon branded hubs

With Amazon the process is comparable to above, but before adding a Thread network Amazon asks the device to scan for available thread networks.  Amazon uses this to confirm its own network is visible to the device.

So for Amazon you need an OTBR setup with a Thread USB stick in order to scan for other networks.

On the OTBR host use `sudo ot-ctl discover` to scan for Thread networks and select the one where the name starts with "AMZN". With this you get the "PAN", the "Extended PAN", the "Ch(annel)" and the "MAC Address". 

Using these fields as additional parameters, your start command for the device looks like:

```
node node_modules/@matter/examples/dist/esm/examples/DeviceNodeFull.js --storage-path=.thread --ble-enable --ble-thread-fake --passcode=20202438 --discriminator=1248 --ble-thread-panid=XXXX --ble-thread-extendedpanid=XXXXXXXXX --ble-thread-networkname=AMZN-Thread-XXXX --ble-thread-channel=XX --ble-thread-address=XXXXXXXXXXX
```

When Amazon sends the scan command the device returns this network as "found" and Amazon will add the device to the network.  You can then view the operational credentials in the log at line "---> addOrUpdateThreadNetwork called on NetworkCommissioning cluster: ..." as a hex-string.

### With your own OTBR

When you hve set up your own OTBR (see sections below) you define the network name yourself.  You can retrieve operational credential using `sudo ot-ctl dataset active -x` on the OTBR host.

### Configure matter.js Shell with the details

After you obtain thread credentials you configure them into the matter.js Shell app using `config thread-credentials set NetworkName OperationalCredentialsString`. Then any thread device commissioned with the matter.js shell using BLE is added to this thread network. 

## How to setup your own OTBR
This is a two part topic. You need a Thread USB stick with an OTBR firmware installed and a host to run the OTBR software with the USB stick connected.

### OTBR USB stick
I personally use an [nRF52840 USB Key with TinyUF2 Bootloader - Bluetooth Low Energy - MDBT50Q-RX](https://www.adafruit.com/product/5199) because it is simple to flash.

You must build the firmware using https://developer.nordicsemi.com/nRF_Connect_SDK/doc/1.9.99-dev1/matter/openthread_rcp_nrf_dongle.html. Then flash the firmware to the USB stick (for the above USB stick you just to copy the file to the stick after plugging it with "reset" button pressed).

### Install OTBR on a host

You can use a Raspberry Pi or a VM (theoretically Docker will also work) to run the OTBR software. Just follow https://openthread.io/guides/border-router/build#install-otbr

Then you [Form a Thread Network](https://openthread.io/guides/border-router/web-gui#form_a_thread_network).
