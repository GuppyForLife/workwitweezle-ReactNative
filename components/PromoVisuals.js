import React, { Component } from "react";
import { Card } from "react-native-elements";
import { Text, ScrollView } from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';
import { PROMOVISUALS } from "../shared/promoVisuals";

class PromoVisuals extends Component {

    static navigationOptions = {
        title: 'Promo Visuals'
    };

    constructor(props) {
        super(props);
        this.state={
            promoVisuals: PROMOVISUALS
        }
    }

    render() {
        return(
            <ScrollView>
                {this.state.promoVisuals.map(promo => {
                    return(
                        <Card key={promo.id}>
                            <Card.Title>{promo.title}</Card.Title>
                            <YoutubePlayer 
                                height={200}
                                play={false}
                                videoId={promo.source}
                            />
                            <Text style={{textAlign:'center'}}>{promo.description}</Text>
                        </Card>
                    )
                } )}
            </ScrollView>
        )
    }

}

export default PromoVisuals