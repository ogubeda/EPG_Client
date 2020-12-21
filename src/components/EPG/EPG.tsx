import React, { Component } from 'react';
import epg from '../../data/epg.json'
import { IonCard, IonCardHeader, IonCardTitle, IonSlide, IonSlides, IonCardContent } from '@ionic/react';


class EPG extends Component {
  showDetails(epg) {
    alert(`Duration: ${epg.duration}\nStart: ${epg.start}`)
  }

  render() {
    const slideOpts = {
      slidesPerView: 10,
      grabCursor: true,
    };
    console.log(epg.events);

    Object.entries(epg.events).map((t, k) => {
      let arr = t[1].spa.ext.text;
      console.log();
    })

    return (
      <header>
        <h2>{epg.title}</h2>
        <IonSlides pager={false} options={slideOpts}>
          {Object.entries(epg.events).map((t, k) =>
            <IonSlide id={t[1].spa.id.toString()}>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle onClick={() => this.showDetails(t[1].spa)}>{t[1].spa.name}</IonCardTitle>
                  {/* <IonCardContent>
                    {t[1].spa.ext.text}
                  </IonCardContent> */}
                </IonCardHeader>
              </IonCard>
            </IonSlide>

          )}
        </IonSlides>
      </header>
    );
  }
}


export default EPG;