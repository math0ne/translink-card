Lovelace custom card for BKK Stop Information
This Lovelace custom card displays Budapest Public Transportation (BKK) line information departing in the near future from a configurable stop.

# Lovelace Translink Card
This Lovelace custom card displays Translink data from the public api for a given stop and route.

![Preview](https://user-images.githubusercontent.com/457678/52977264-edf34980-33cc-11e9-903b-cee43b307ed8.png)

### Manual install
1. Download and copy 'translink-card.js' into your 'config/www' directory.

2. Add a reference to 'mini-graph-card-bundle.js' inside your 'ui-lovelace.yaml' or at the top of the *raw config editor UI*:

```yaml
resources:
  - url: /local/mini-graph-card-bundle.js?v=0.7.0
    type: module
```

###  Using the card
Add the following lines to your ui-lovelace.yaml (entity should be the sensor of translink sensor):

```yaml
sensor:
  - platform: translink_sensor
    api_key: XX
    stop_id: 58652
    route_number: 16
```