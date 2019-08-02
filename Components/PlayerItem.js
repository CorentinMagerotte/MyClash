import React from "react";
import { StyleSheet, View, Text, Image, FlatList, Button, ScrollView } from "react-native";

class PlayerItem extends React.Component {
  render() {
    const player = this.props.player;
    let tabTroop = [];
    for (let troop of player.troops) {
      const temp =  <View style={styles.oneTroop}>
                        <Text>Nom : {troop.name}</Text>
                        <Text>Level : {troop.level}</Text>
                        <Text>Level Max : {troop.maxLevel}</Text>
                    </View>;
      tabTroop.push(temp);
    }

    const idTroop = 5;

    return (
      
      <View style={styles.main_container}>
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.name_text}>{player.name}</Text>
            <Text style={styles.level_text}>Level {player.expLevel}</Text>
            </View>
            <View>
            <Text style={styles.description_text}>Clan</Text>
            <Text>{player.clan.name}</Text>
            <Text>Rôle : {player.role}</Text>
            </View>
          <View style={styles.troops_container}>
          <Text style={styles.description_text}>Troupes</Text>
          <ScrollView>
          <View>{tabTroop}</View>
          </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection: "row"
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: "gray"
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flexDirection: "row"
  },
  name_text: {
    fontSize: 20,
    flex : 1,
  },
  HDV_text: {
    fontSize: 15,
    flex: 3,
    flexWrap: "wrap"
  },
  level_text: {
    flex : 1,
    fontSize: 20,
    color: "#666666",
    textAlign : "right"
  },
  description_container: {
    flex: 7
  },
  troops_container: {
    textAlign: "center",
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666"
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: "right",
    fontSize: 14
  },
  oneTroop: {
    textAlign: "center",
    margin : 1,
    borderColor: "#000000",
    borderWidth: 1,
  }
});

export default PlayerItem;
