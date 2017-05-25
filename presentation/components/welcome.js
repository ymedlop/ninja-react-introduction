import React from "react";
import {
    Heading,
    Image,
    Text,
    Cite
} from "spectacle";

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                <Heading size={6} fit caps lineHeight={1} textColor="secondary">
                    Introducción a
                </Heading>
                <Image src='https://raw.githubusercontent.com/ymedlop/website/master/website/static/img/react/react.png'/>
                <Image src='https://ymedlop.es/img/avatar.jpg'/>
                <Cite>Yeray Medina López</Cite>
            </div>
        );
    }
}
