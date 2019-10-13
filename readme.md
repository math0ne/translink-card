[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)

# Lovelace Translink Card
This Lovelace custom card displays Translink data from the public api for a given stop and route.

This is designed to work with the translink sensor: https://github.com/math0ne/translink_sensor

![Preview](https://github.com/math0ne/translink-card/blob/master/translink-card.png?raw=true)

### Manual install
1. Download and copy 'translink-card.js' into your 'config/www' directory.

2. Add a reference to 'mini-graph-card-bundle.js' inside your 'ui-lovelace.yaml' or at the top of the *raw config editor UI*:

```yaml
resources:
  - url: /local/translink-card.js
    type: js
```

### HACS Custom Install

1. Go to the community tab of your home assistant installation
2. Click settings
3. Add "https://github.com/math0ne/translink-card" with the type **Plugin**
4. Click Save

###  Using the card

Add the following lines to your ui-lovelace.yaml (entity should be the ids of translink sensors):

```yaml
cards:
  - type: "custom:translink-card"
    entities: 
      - entity: sensor.translink_next_bus
      - entity: sensor.translink_next_bus_2
```
