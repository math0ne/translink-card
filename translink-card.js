class TranslinkCard extends HTMLElement {
    set hass(hass) {
        if (!this.content) {
        const card = document.createElement('ha-card');
        card.header = 'Next Buses';
        this.content = document.createElement('div');
        this.content.style.padding = '0 16px 16px';
        card.appendChild(this.content);
        const style = document.createElement('style');
        style.textContent = `
            .bus_times {
                display: grid;
                grid-template-columns: repeat(12, 1fr);
                grid-gap: 5px;
                width: 100%;
                margin-bottom: 20px;
            }
            .bus_time_icon{
                grid-column: span 3;
                text-align: center;
            }
            .bus_time{
                grid-column: span 3;
                text-align: center;
                margin-top: 4px;
            }
            .bus_times_header{
                display: grid;
                grid-template-columns: repeat(12, 1fr);
                grid-gap: 5px;
                width: 100%;
                margin-bottom: 7px;
            }
            .bus_times_header_route{
                grid-column: span 3;
                text-align: center;
            }
            .bus_times_header_countdown{
                grid-column: span 9;
                text-align: right;
                margin-right: 5%;
            }
        `;
        this.appendChild(style);
        this.appendChild(card);
        }

        const entityId = this.config.entity;
        const state = hass.states[entityId];
        
        //console.log(this.config.entities);
        //console.log(hass.states);
        const stateStr = state ? state.state : 'unavailable';

        var tmpcontent = "";

        this.config.entities.forEach(function (item, index) {
            //console.log(hass.states[item["entity"]]);
            //console.log(item, index);
            if(hass.states[item["entity"]]){
                if(hass.states[item["entity"]].attributes){
                    if(hass.states[item["entity"]].attributes.next_bus_countdown){
                        tmpcontent = tmpcontent + `
                            <div class="bus_times_header">
                                <div class="bus_times_header_route">Route ${hass.states[item["entity"]].attributes.route_number}</div>
                                <div class="bus_times_header_countdown">next in ${hass.states[item["entity"]].attributes.next_bus_countdown} min</div>
                            </div>
                            <div class="bus_times">
                                <div class="bus_time_icon"><ha-icon icon="mdi:bus"></ha-icon></div>
                                <div class="bus_time">${hass.states[item["entity"]].attributes.buses_1}</div>
                                <div class="bus_time">${hass.states[item["entity"]].attributes.buses_2}</div>
                                <div class="bus_time">${hass.states[item["entity"]].attributes.buses_3}</div>
                            </div>
                        `;
                    }
                }
            }



        });

        this.content.innerHTML = tmpcontent;


    }

    setConfig(config) {
        if (!config.entities) {
            throw new Error("You need to define entities");
        }
        this.config = config;
    }

    // The height of your card. Home Assistant uses this to automatically
    // distribute all cards over the available columns.
    getCardSize() {
        return 3;
    }

}
  
customElements.define('translink-card', TranslinkCard);
