import React from "react";
import {
    Heading,
    Text,
} from "spectacle";

export class ReactSlide extends React.Component {
    render() {
        return (
            <div>
                <Heading size={2} textColor="secondary">
                    ¿ Que es React.js ?
                </Heading>
               <Text  margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                   React es una libreria javascript para el desarrollo y representaciones de las interfaces de usuario de nuestras aplicaciones web.
               </Text>
            </div>
        );
    }
}
