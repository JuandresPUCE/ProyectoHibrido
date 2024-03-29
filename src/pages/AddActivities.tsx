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
    IonMenuButton,
  } from "@ionic/react";

const AllActivities: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
						<IonMenuButton/>
					</IonButtons>
                    <IonTitle>Nueva Actividad</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <h1> Nueva Actividad </h1>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}
export default AllActivities;