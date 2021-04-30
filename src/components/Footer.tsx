import {
    Button,
    Footer,
    FooterTab,
    Icon,
    Text
} from "native-base";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-native";

import { darkMacchaColor, macchaColor } from "../ThemeColor";

/**
 * Properties of `FooterButton`.
 */
interface IFooterButtonProps {
    icon: string;
    text: string;
    here: string;
    jumpTo: string;
    onPress: (jumpTo: string) => void;
}

/**
 * A component which is a button used for the footer.
 */
class FooterButton extends React.Component<IFooterButtonProps> {
    constructor(props: IFooterButtonProps) {
        super(props);
    }

    render() {
        let style = {
            backgroundColor: this.props.here == this.props.jumpTo
                ? darkMacchaColor
                : macchaColor
        };

        return (
            <Button onPress={() => this.props.onPress(this.props.jumpTo)} style={style}>
                <Icon name={this.props.icon} />
                <Text>{this.props.text}</Text>
            </Button>
        );
    }
}

/**
 * Properties of `MacchaFooter`.
 *
 * Note that the interface inherits `RouteComponentProps` due to using users history.
 */
export interface IMacchaFooterProps extends RouteComponentProps { }

/**
 * A component which draw a footer with buttons to go another page.
 */
export class MacchaFooter extends React.Component<IMacchaFooterProps> {
    constructor(props: IMacchaFooterProps) {
        super(props);
    }

    onButtonClicked = (jumpTo: string) => {
        this.props.history.push(jumpTo);
    };

    render() {
        const location = this.props.history.location.pathname;

        return (
            <Footer>
                <FooterTab style={{ backgroundColor: macchaColor }}>
                    <FooterButton
                        icon="home-outline"
                        text="ホーム"
                        here={location}
                        jumpTo="/"
                        onPress={this.onButtonClicked}
                    />
                    <FooterButton
                        icon="pencil-outline"
                        text="注文をとる"
                        here={location}
                        jumpTo="/take"
                        onPress={this.onButtonClicked}
                    />
                    <FooterButton
                        icon="nutrition-outline"
                        text="現在の注文"
                        here={location}
                        jumpTo="/cook"
                        onPress={this.onButtonClicked}
                    />
                    <FooterButton
                        icon="megaphone-outline"
                        text="完成"
                        here={location}
                        jumpTo="/done"
                        onPress={this.onButtonClicked}
                    />
                </FooterTab>
            </Footer>
        );
    }
}

/**
 * A class which is made of `MacchaFooter` and `Router`.
 *
 * For more information, please refer `MacchaFooter` or read react-router documentations.
 */
export const MacchaFooterWithRouter = withRouter(MacchaFooter);