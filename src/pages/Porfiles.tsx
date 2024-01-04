import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonMenu,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonAlert,
} from "@ionic/react";

const Porfiles: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            
          <IonTitle>Perfiles</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1> Daniel Simbaña </h1>
              <IonCard>
                <img alt="Imagen" src="/assets/images/daniel.jpg" />

                <h1> Nombres Completos </h1>
                <h2> Daniel Esteban </h2>
                <h2> Simbaña Vargas </h2>
                <h1> Cédula </h1>
                <h2> 17529501### </h2>
                <h1> Teléfono </h1>
                <h2> 0987000000 </h2>
                <h1> Experiencia Laboral </h1>
                <h2> Programador </h2>
                <h2> Estudiante </h2>
                <h1> Dirección </h1>
                <h2> Av el Inca </h2>
              </IonCard>
              <br></br>
              <br></br>
              <h1> Juan Avilés</h1>
              <IonCard>
                <img alt="Imagen" src="/assets/images/juan.jpg" />

                <h1> Nombres Completos </h1>
                <h2> Juan Andrés </h2>
                <h2> Aviles Mata </h2>
                <h1> Cédula </h1>
                <h2> 17299### </h2>
                <h1> Teléfono </h1>
                <h2> 099902999 </h2>
                <h1> Experiencia Laboral </h1>
                <h2> Estudiante </h2>
                <h2> Pasantias en SLB </h2>
                <h2> Pasantias en Inova </h2>
                <h1> Dirección </h1>
                <h2> Av 10 de agosto y falconi </h2>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Porfiles;
