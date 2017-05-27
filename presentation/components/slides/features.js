import React from "react";
import {
  List,
  ListItem,
} from "spectacle";

export class FeaturesSlide extends React.Component {
    render() {
        return (
            <div>
              <List>
                <ListItem>Basado en Componentes</ListItem>
                <ListItem>Declarativo</ListItem>
                <ListItem>Flujo de Datos</ListItem>
                <ListItem>Composición de Componentes</ListItem>
              </List>
            </div>
        );
    }
}
