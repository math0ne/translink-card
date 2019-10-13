# Lovelace Translink Card
This Lovelace custom card displays Translink data from the public api for a given stop and route.

This is designed to work with the translink sensor: https://github.com/math0ne/translink_sensor

![Preview](https://github.com/math0ne/translink-card/blob/master/translink-card.png?raw=true)

###  Using the card

Add the following lines to your ui-lovelace.yaml (entity should be the ids of translink sensors):

```yaml
cards:
  - type: "custom:translink-card"
    entities: 
      - entity: sensor.translink_next_bus
      - entity: sensor.translink_next_bus_2
```